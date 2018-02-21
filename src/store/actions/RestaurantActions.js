import {
    GET_RESTAURANTS
} from "./types";


export const getRestaurant = ({lat, lon}) => {
    console.log('inside', lat, lon);

    return (dispatch) => {
        let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lon + '&radius=500&type=restaurant&key=AIzaSyCc4aVWLkCZyvh8ERdTuVg0UgPfeux2kz4';
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
            dispatch({ type: GET_RESTAURANTS,  payload: data })
        })
        .catch(error => console.log(error))    
    }

}