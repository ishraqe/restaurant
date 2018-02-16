import React, {Component} from 'react';
import { View, Text } from "react-native";
import StackNavigator from './config/router';

class App extends Component {
    render () {
        return (
            <View style={{width: '100%', height: '100%'}}>
                <StackNavigator />
            </View>
        );
    }
}

export default App;