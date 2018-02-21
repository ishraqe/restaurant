import {
    GET_RESTAURANTS
} from "../actions/types";


const INITIAL_STATE = {
    userLatLong: null,
    restaurants: null
};

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case GET_RESTAURANTS:
            console.log(actions);
            return { ...state, restaurants: actions.payload.data.results , userLatLong: actions.payload.focusedLocation };
            break;
        default:
            return state;
    }
};