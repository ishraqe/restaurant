import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import { Input } from '../component/common/index';
import color from "../assets/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import ListComponent from '../component/Search/ListComponent';

class Search extends Component {
    static navigationOptions = {
        header: null,
    }; 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <Input 
                        placeholder='Search Restaurant and ....'   
                        underlineColorAndroid={color.shadow}                   
                    />
                    <View style={styles.locationCon}>
                        <Text
                            style={{marginLeft: 10, marginRight: 10, color: '#000'}}
                        >in</Text>
                        <Input
                            placeholder='Dhaka, Bangladesh'
                            underlineColorAndroid={color.shadow}
                        />
                        <Icon
                            name={'ios-pin'}
                            size={20}
                            color='grey'
                            style={{ position: 'absolute',right: 5}}
                        />
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                <View style={styles.resultContainer}>
                   
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container :{
        flex: 1, 
        width: '100%',
        backgroundColor: color.bgColor,
       
    },
    searchBarContainer : {
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems : 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    locationCon : {
        marginTop: -20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    resultContainer : {
        width: '100%',
    }
});

export default Search;