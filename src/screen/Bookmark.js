import React, { Component } from "react";
import { View, Text, FlatList } from 'react-native';
import ListComponent from '../component/Search/ListComponent';
import {connect} from 'react-redux';


class Bookmark extends Component {

    state = {
        bookmarks : null,
        userLatLong:  null,
    }

    componentWillReceiveProps (next) {
        if( next.auth.userLatLong) {
            this.setState({
                bookmarks: next.restaurants.bookmarks,
                userLatLong: next.auth.userLatLong,
            });  
        } 
       
    }
    _keyExtractor = (item, index) => item.id;
    renderBookmarks = () => {
        if(this.state.bookmarks) {
            return (
                <FlatList
                data={this.state.bookmarks}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                    <ListComponent
                        item={item}
                        key={item.id}
                        geoLocation={this.state.userLatLong}
                    />
                )}
            />
            )
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{ width: '100%',}}>
                   {this.renderBookmarks()}
                </View>
            </View>
        );
    }
}

const mapStateToProps =({auth, restaurants}) => {
 
    return {
        restaurants,
        auth
    }
}


export default connect(mapStateToProps)(Bookmark);