import React, { Component } from "react";
import { View, Text, FlatList } from 'react-native';
import ListComponent from '../component/Search/ListComponent';

class Bookmark extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{ width: '100%',}}>
                    <FlatList
                        data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'o' }, { key: 'p' }, { key: 'q' }, { key: 'r' }, { key: 's' }, { key: 't' }, { key: 'u' }, { key: 'v' }, { key: 'w' }, { key: 'x' }, { key: 'y' }, { key: 'z' }, { key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '10' }, { key: '11' }, { key: '12' }, { key: '13' }, { key: '14' }, { key: '15' }, { key: '16' }]}
                        renderItem={({ item }) => (
                            <ListComponent
                                item={item}
                            />
                        )}
                    />

                </View>
            </View>
        );
    }
}

export default Bookmark;