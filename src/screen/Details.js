import React, { Component } from 'react';

import {  View,Text, StatusBar } from 'react-native';
import Tab from '../component/Details/Tab';


class Details extends Component {
    render() {
        return (
            <View style={{flex:1 }}>
                <Tab />
            </View>
        );
    }
}




export default Details;