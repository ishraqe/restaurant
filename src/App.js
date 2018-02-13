import React, {Component} from 'react';
import { View, Text } from "react-native";
import { RootStack} from './config/router';

class App extends Component {
    render () {
        return (
            <RootStack />
        );
    }
}

export default App;