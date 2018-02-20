import {
    GET_COORDINATES 
} from "./types";
import React from "react";


// export const signUpUser = ({ fullname, email, password }) => {
//     return (dispatch) => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then((user) => {
//                 const uid = user.uid;
//                 firebase.database().ref('userInfo/' + uid).set({
//                     fullname: fullname,
//                     profileImage: 'http://servotech.in/wp-content/uploads/2016/10/user-icon-placeholder.png'
//                 }).then(
//                     (userInfo) => signupUserSuccess(dispatch, userInfo, user, { email, password })
//                 )
//             })
//             .catch(() => signupUserfail(dispatch));
//     }
// }

export const getUsersLocation = () => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);   
               let focusedLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                };
                dispatch({ type: GET_COORDINATES  , payload: focusedLocation })
            },
            (error) => console.log(error.message)
        );
    }
    
}