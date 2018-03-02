import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import color from "../../../assets/colors";
import Icon from 'react-native-vector-icons/Ionicons'


class Direction extends Component {
    render () {
        const userLatLong = {
            latitude: this.props.mapData.user_latlng.latitude,
            longitude: this.props.mapData.user_latlng.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        const origin = {latitude: userLatLong.latitude, longitude: userLatLong.longitude};
        const destination = {latitude: this.props.mapData.geometry.location.lat , longitude:  this.props.mapData.geometry.location.lng};
        const GOOGLE_MAPS_APIKEY = 'API_KEY';
        const markers = [];
        markers.push(origin, destination);
                
        return (
            <View>
                 <MapView 
                    initialRegion={userLatLong}
                    style={styles.map}
                    zoomEnabled={true}
                    minZoomLevel ={0}
                >
                    {markers.map((marker, i) => (
                        <Marker 
                            key={i}
                            title={ marker.latitude === origin.latitude? 'You': this.props.mapData.name}
                            // pinColor={marker.latitude === origin.latitude ? color.themeColor : 'red' } 
                            coordinate={{ 
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }} 
                        > 
                            <Icon 
                                name={ marker.latitude === origin.latitude ? 'ios-man' : 'ios-flag'}
                                size={40}
                                color={marker.latitude === origin.latitude ? color.themeColor : 'red'}
                            />
                        </Marker>
                    ))}
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={10}
                        strokeColor="#11e0cf"
                        mode='driving'
                    />
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


export default Direction;