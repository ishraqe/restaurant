import React, {Component} from 'react';
import { View, Text,NetInfo } from "react-native";
import Router from './config/router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';
import Reducers from './store/reducers/index';




class App extends Component {
    render () {
        const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
        renderApp = () => {
            NetInfo.isConnected.fetch().then(isConnected => {
                if(isConnected)
                {
                    console.log('Internet is connected');
                }
            })
        }
        return (
            <Provider store={store}>
                <View style={{width: '100%', height: '100%'}}>
                    <Router />
                </View>
            </Provider>
        );
    }
}

export default App;

//for metro blunder error rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json