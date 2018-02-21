import {
    RESTAURANT_DATA
} from "./types";


export const getRestaurant = ({lat, lon}) => {
    console.log('in', lat, lon);

    return (dispatch) => {
        let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lon + '&radius=500&type=restaurant&key=AIzaSyCc4aVWLkCZyvh8ERdTuVg0UgPfeux2kz4';
        fetch(url)
        .then(response => {
            if (response) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(data => {
            console.log(data);
            dispatch({type: RESTAURANT_DATA,  payload: data })
        }).catch(error => this.setState({ error, isLoading: false }));
    }

}