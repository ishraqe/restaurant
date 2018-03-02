import {
    GET_RESTAURANTS_DETAILS,
    SAVE_BOOKMARK,
    GET_BOOKMARKS,
    GET_CITY
} from "../actions/types";


const INITIAL_STATE = {
    restaurant_detail: null,
    bookmarks: null,
    city: null
};

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case GET_RESTAURANTS_DETAILS:
            console.log(actions);
            return { ...state, restaurant_detail: actions.payload };
            break;
        case SAVE_BOOKMARK:
            console.log(actions);
            return { ...state, bookmarks: actions.payload};
            break;
        case GET_BOOKMARKS: 
            console.log(actions);
            return { ...state, bookmarks: actions.payload};
            break;
        case GET_CITY: 
        console.log(actions);
        return { ...state, city: actions.payload};
        break;    
        default:
            return state;
    }
};