import {
    FB_AUTH,
    GOOGLE_AUTH,
    GET_COORDINATES ,
    GET_RESTAURANTS,
    LOG_OUT
} from "./types";

import React from "react";
import { AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
const FBSDK = require('react-native-fbsdk');
const { LoginManager, LoginButton, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;
import { GoogleSignin} from 'react-native-google-signin';

export const _fbAuth = () => {
    return (dispatch) => {
        var that = this;
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {

                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            let accessToken = data.accessToken

                            const responseInfoCallback = (error, result) => {
                                if (error) {
                                    console.log('Error fetching data: ' + error.toString());
                                } else {
                                    console.log(result);
                                    const userInfo = { ...result, type: 'fb' }
                                    dispatch({ type: FB_AUTH, payload: userInfo});
                                    console.log(userInfo);
                                    AsyncStorage.setItem('as:auth:user', JSON.stringify(userInfo));
                                    Actions.lightbox(); 
                                }
                            }

                            const infoRequest = new GraphRequest(
                                '/me',
                                {
                                    accessToken: accessToken,
                                    parameters: {
                                        fields: {
                                            string:
                                                'email,name,first_name,middle_name,last_name, cover ,age_range,link,gender,locale,picture,timezone,updated_time,verified',
                                        }
                                    }
                                },
                                responseInfoCallback
                            );
                            new GraphRequestManager().addRequest(infoRequest).start()
                        }
                    )
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error);
            }
        );
    } 
}

export const _googleAuth = () => {
    return (dispatch) => {
        GoogleSignin.configure({
            webClientId: '693614564118-ej8ukdngmkgvodgmalsa7ik2kj8hq1ho.apps.googleusercontent.com',
            offlineAccess: false
        })
        .then(() => {
            GoogleSignin.signIn()
            .then((user) => {
                const userInfo = {...user, type: 'google' }
                dispatch({ type: GOOGLE_AUTH, payload: userInfo })
                console.log(userInfo);                 
                AsyncStorage.setItem('as:auth:user', JSON.stringify(userInfo));
                Actions.lightbox(); 
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
        });
    }
}

export const logOut = ({type}) => {
    console.log(type, 'in action');
    return (dispatch) => {
        if ( type === 'fb') {
            LoginManager.logOut();
            AsyncStorage.removeItem('as:auth:user');
            Actions.first();
        }else if (type === 'google') {
            GoogleSignin.signOut()
            .then(() => {
                AsyncStorage.removeItem('as:auth:user');
                Actions.first();
            })
            .catch((err) => {
                console.log(err);
            });
        
        }
    }
}

export const getUsersLocation = () => {
    
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
               
                let url = 'https://freegeoip.net/json/';
                fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    const   focusedLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        country_code : responseJson.country_code,
                        cityName: responseJson.city
                    };
                    let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + focusedLocation.latitude + ',' + focusedLocation.longitude + '&radius=500&type=restaurant&key=AIzaSyAwUyFikvyvgzx2Wp2bVc3Vt_hNm4AIggM';
                    fetch(url)
                        .then(response => {
                            if (response) {
                                console.log('hello');
    
                                return response.json();
                            } else {
                                throw new Error('Something went wrong ...');
                            }
                        })
                        .then(data => {
                            try {
                                AsyncStorage.getItem('as:auth:user',)
                                .then(user => {
                                    var userInfo = null;
                                    userInfo = JSON.parse(user);
                                    const userAndRes = {
                                        data, focusedLocation , userInfo
                                    }
                                    dispatch({ type: GET_RESTAURANTS, payload: userAndRes })
                                }).catch(err=> console.log(err));
                            } catch (error) {
                                
                            }
                           
                        })
                        .catch(error => console.log(error))   
                    // dispatch({ 
                    //     type: GET_COORDINATES,
                    //     payload: focusedLocation 
                    // })
                })
                .catch((error) => console.log(error));
            },
            (error) => console.log(error),
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 10000
            }

        );
    }
    
}