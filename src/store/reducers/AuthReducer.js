import {
    LOGIN_USER,
    GET_COORDINATES
} from "../actions/types";


const INITIAL_STATE = {
    userLatLong: null,
};

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case GET_COORDINATES:
            console.log(actions);
            return { ...state, userLatLong: actions.payload };
        default:
            return state;
    }
};