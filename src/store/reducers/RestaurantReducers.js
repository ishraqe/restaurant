import {
    GET_RESTAURANTS
} from "../actions/types";


const INITIAL_STATE = {
    restaurants: null,
};

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case GET_RESTAURANTS:
            console.log(actions);
            return { ...state, userLatLong: actions.payload };
            break;
        default:
            return state;
    }
};