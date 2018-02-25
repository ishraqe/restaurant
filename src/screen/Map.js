import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import color from '../assets/colors';
import {connect} from 'react-redux';
import {getDistanceFromLatLonInKm} from '../component/util';

import { getUsersLocation} from '../store/actions';


class Map extends Component {
    state = {
        focusedLocation  :  {
            latitude: 23.7510271,
            longitude: 90.3793187,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        restaurant : null
    }
   
   componentWillReceiveProps(next) {
    console.log(next, 'map');
    this.setState({
        restaurant: next.restaurant,
        focusedLocation : {
            latitude: next.userLocation.latitude,
            longitude: next.userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })
   }

    render() {
        const markers = [];
        if (this.state.restaurant) {
            for (var i of this.state.restaurant) {
                markers.push(i);
            }
        }

        return (
            <View style={{flex:1}}>
                <MapView 
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                    zoomEnabled={true}
                    minZoomLevel ={0}
                >
                    {markers.map((marker, i) => (
                        <Marker 
                            key={i} 
                            image={{ uri: marker.icon}}
                            title={marker.name}
                            description={getDistanceFromLatLonInKm(this.state.focusedLocation.latitude, this.state.focusedLocation.longitude, marker.geometry.location.lat, marker.geometry.location.lng)}
                            coordinate={{ 
                                latitude: marker.geometry.location.lat,
                                longitude: marker.geometry.location.lng
                            }} 
                        /> 
                    ))}

                </MapView>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    map: {
       width: '100%',
       height: '100%'
    },
});

const mapStateToProps = (state) => {
    return {
        restaurant: state.auth.restaurants,
        userLocation: state.auth.userLatLong
    };
};


export default connect(mapStateToProps)(Map);