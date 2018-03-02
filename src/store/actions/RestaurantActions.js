'use strict';

import {
    GET_RESTAURANTS_DETAILS,
    SAVE_BOOKMARK,
    GET_BOOKMARKS,
    GET_CITY,
    
} from "./types";
import {AsyncStorage} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

export const getRestaurantDetails = ({ place_id}) => {

    return (dispatch) => {
        let url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid='+place_id+'&key=AIzaSyAwUyFikvyvgzx2Wp2bVc3Vt_hNm4AIggM';
        fetch(url)
        .then(response => {
            if (response) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(data => {
            dispatch({ type: GET_RESTAURANTS_DETAILS,  payload: data })
        })
        .catch(error => console.log(error))    
    }
}

export const getBookMark = () => {
    return (dispatch) => {
        AsyncStorage.getItem('as:info:bookmark',)
        .then(
            bookmarks => {
                dispatch({type: GET_BOOKMARKS, payload: JSON.parse(bookmarks)})
            }
        )
        .catch(err => console.log(err));
    }
}


export const bookMarkRestaurant = (info) => {
    return (dispatch,getState) => {
    //   AsyncStorage.removeItem('as:info:bookmark');  
       const { restaurants } = getState();
       let newArray = [];
       if(restaurants.bookmarks) {   
            if(Object.keys(restaurants.bookmarks) > 0) {
                for (var key in restaurants.bookmarks){
                    newArray.push(restaurants.bookmarks[key]);                
                }
            }else {
                newArray.push(restaurants.bookmarks);
            }
            newArray.push(info);
            try {
                AsyncStorage.setItem('as:info:bookmark', JSON.stringify(newArray));
                dispatch({type: SAVE_BOOKMARK, payload: newArray});
            } catch (error) {
                console.log(error);
            }
       }else {
            AsyncStorage.setItem('as:info:bookmark', JSON.stringify(info));
            dispatch({type: SAVE_BOOKMARK, payload: newArray.push(info)});
       }
    }
}

export const getCity = ({country_code, cityname, restaurantName}) => {
    
    return (dispatch) => {
        RNGooglePlaces.getAutocompletePredictions(restaurantName, {
            type: 'establishments',
            country: country_code,
        })
        .then((place) => {
            dispatch({type: GET_CITY, payload: place})
        })
        .catch(error => console.log(error.message));
    
    }
}