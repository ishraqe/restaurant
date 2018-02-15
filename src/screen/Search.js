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
                            style={{marginLeft: 10, marginRight: 10}}
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
                   
                        <Text
                            style={{fontSize: 20, fontWeight: 'bold', color: '#000',marginLeft: 10,marginTop: 30, marginBottom: 5}}
                        >Recommended for you</Text>
                        <FlatList
                            data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'o' }, { key: 'p' }, { key: 'q' }, { key: 'r' }, { key: 's' }, { key: 't' }, { key: 'u' }, { key: 'v' }, { key: 'w' }, { key: 'x' }, { key: 'y' }, { key: 'z' }, { key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '10' }, { key: '11' }, { key: '12' }, { key: '13' }, { key: '14' }, { key: '15' }, { key: '16' }]}
                            renderItem={({ item }) => (
                                <ListComponent
                                    item={item}
                                />
                            )}
                        />
                   
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