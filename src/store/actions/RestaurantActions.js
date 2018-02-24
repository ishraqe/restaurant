import {
    GET_RESTAURANTS_DETAILS
} from "./types";


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