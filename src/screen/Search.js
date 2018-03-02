import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView,Button, TouchableOpacity} from 'react-native';
import { Input } from '../component/common/index';
import color from "../assets/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import RNGooglePlaces from 'react-native-google-places';
import ListComponent from '../component/Search/ListComponent';
import {connect} from 'react-redux';
import {getCity} from '../store/actions/index';
import {Actions} from 'react-native-router-flux';
class Search extends Component { 
    state = {
        country_code: '',
        restaurantName: '',
        cityname: '',
        latitude: 23.7552,
        longitude: 90.3731
    }
    openSearchModal() {
            RNGooglePlaces.openAutocompleteModal({
                type: 'restaurant',
                country: this.state.country_code,
                latitude: this.state.latitude,
                longitude: this.state.longitude
            })
            .then((place) => {
                let props = null;
                let item = {
                    place_id : place.placeID
                }
                props = {...props, item};
                Actions.push('main', {item: props} );
            })
            .catch();  // error is a Javascript Error object
      }



    componentWillReceiveProps(next) {
        if(next.auth.userLatLong) {
            const {country_code, cityName, latitude, longitude} = next.auth.userLatLong;
            this.setState({
                country_code : country_code,
                cityname: cityName,
                latitude: latitude,
                longitude: longitude
            });
        }
       
    }
    render() {
        return (
           <View style={{flex:1, padding:10, justifyContent: 'center'}}>
                <Button
                    title='Click to search'
                    style={{flex:1}}
                    onPress={()=>this.openSearchModal()}
                />
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

const mapStateToProps = ({auth, restaurants}) => {
    return {
        auth,restaurants
    }
}

const mapDispatchToProps = dispatch => {
    return {
       get_city_restaurant : ({country_code,cityname, restaurantName}) => dispatch(getCity({country_code,cityname, restaurantName})) 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Search);