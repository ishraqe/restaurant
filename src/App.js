import React, {Component} from 'react';
import { View, Text } from "react-native";
import StackNavigator from './config/router';

class App extends Component {
    render () {
        return (
            <View style={{flex:1}}>
                <StackNavigator />
            </View>
        );
    }
}

export default App;