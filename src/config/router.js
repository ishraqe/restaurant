import React from 'react';
import {StackNavigator} from 'react-navigation';
import Auth from "../component/Auth";

export const RootStack = StackNavigator({
    Auth : {
        screen: Auth,
        navigationOptions : {
            header: null,
        }
    }
});