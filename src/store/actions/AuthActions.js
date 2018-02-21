import {
    GET_COORDINATES ,
    GET_RESTAURANTS
} from "./types";
import React from "react";


export const getUsersLocation = () => {
    
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
               const focusedLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                };
                let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +focusedLocation.latitude + ',' + focusedLocation.longitude + '&radius=500&type=restaurant&key=AIzaSyCc4aVWLkCZyvh8ERdTuVg0UgPfeux2kz4';
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
                        const userAndRes = {
                            data, focusedLocation
                        }
                        dispatch({ type: GET_RESTAURANTS, payload: userAndRes })
                    })
                    .catch(error => console.log(error))   
                // dispatch({ 
                //     type: GET_COORDINATES,
                //     payload: focusedLocation 
                // })
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