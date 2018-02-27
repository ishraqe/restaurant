import {
    GET_RESTAURANTS_DETAILS,
    SAVE_BOOKMARK
} from "./types";
import {AsyncStorage} from 'react-native';


export const getRestaurantDetails = ({ place_id}) => {
    console.log('inside', place_id);

    return (dispatch) => {
        let url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid='+place_id+'&key=AIzaSyAwUyFikvyvgzx2Wp2bVc3Vt_hNm4AIggM';
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
            console.log(data);
            dispatch({ type: GET_RESTAURANTS_DETAILS,  payload: data })
        })
        .catch(error => console.log(error))    
    }
}

export const bookMarkRestaurant = (info) => {
    return (dispatch) => {
        console.log(info);
        try {
            AsyncStorage.setItem('as:info:bookmark', JSON.stringify(info));
            dispatch({type: SAVE_BOOKMARK, payload: info});
        } catch (error) {
            console.log(error);
        }
       
    }
}