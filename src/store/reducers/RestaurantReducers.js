import {
    GET_RESTAURANTS_DETAILS
} from "../actions/types";


const INITIAL_STATE = {
    restaurant_detail: null,
};

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case GET_RESTAURANTS_DETAILS:
            console.log(actions);
            return { ...state, restaurant_detail: actions.payload };
            break;
        default:
            return state;
    }
};