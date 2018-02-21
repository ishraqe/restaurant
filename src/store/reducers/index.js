import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RestaurantReducer from './RestaurantReducers'

export default  combineReducers({
    auth: AuthReducer,
    restaurants: RestaurantReducer
});