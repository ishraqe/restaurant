import React, { Component } from 'react';
import { View, Text,NetInfo, StyleSheet, Image, Dimensions, TouchableOpacity, StatusBar, AsyncStorage} from "react-native";
import color from '../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from "react-native-video";
import bgVideo from '../assets/bg.mov';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { _fbAuth, _googleAuth } from '../store/actions/index';

class Auth extends Component {
    
    componentWillMount() {
        AsyncStorage.getItem('as:auth:user',)
        .then(user => {
                 if(user !== null){
                    AsyncStorage.getItem('as:info:bookmark',)
                    .then(
                        user => console.log(JSON.parse(user))   
                    )
                    .catch(err => console.log(err));
                    Actions.lightbox();
                } 
            })
        .catch(err => console.log(err));
    }
    
    _googleSignIn = () => {
        this.props.google_sign_in();
    }
    

    _fbAuth =() => {
        this.props.fb_sign_in();
    }

    render() {
        return (
            <View style={styles.container}>
                <Video  
                    muted={false}   
                    repeat={true}   
                    source={bgVideo}
                    resizeMode="cover" style={StyleSheet.absoluteFill} 
                />
                <View style={styles.buttonContainer}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{width: 200, height: 200,  marginBottom: 50}}
                    />
                
                    <TouchableOpacity
                        onPress={()=>this._googleSignIn()}
                        style={[styles.button, {marginTop: 100}]}
                    >
                        <View style={styles.buttonWrapper}>
                            <Image
                                style={{width: 30, height: 30, marginRight: 10}}
                                source={require('../assets/google.png')}
                            />
                            <Text style={{color: '#000'}}>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                

                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: '#3b5998'}]}
                        onPress={this._fbAuth}
                >
                        <View style={styles.buttonWrapper}>
                           <Icon
                                name={'logo-facebook'}
                                color={'#fff'}
                                size={30}
                                style={{ marginRight: 10}}
                           />
                            <Text style={{ color: '#fff' }}>Continue with Facebook</Text>
                           
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: { width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
    button: {
        width: '60%',
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        shadowColor: color.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        marginBottom: 10,
        elevation: 2,
    },
    buttonWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

const mapStateToProps = ({ auth}) => {
    return {
        auth,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fb_sign_in: () => dispatch(_fbAuth()),
        google_sign_in: () => dispatch(_googleAuth())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);