import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import color from '../assets/colors';



const API_KEY = 'AIzaSyCc4aVWLkCZyvh8ERdTuVg0UgPfeux2kz4'; 



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
    componentDidMount() {
        this.getUsersLocation();
        if (this.state.focusedLocation) {
            this.getRestaurent();
        }
    }
    getUsersLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                
              this.setState({
                  focusedLocation : {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                  }
              });
            },
            (error) => console.log(error.message)
            
        );
    }



    getRestaurent = () => {
        console.log('ex');
      
        let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.state.focusedLocation.latitude+','+this.state.focusedLocation.longitude+'&radius=50000&type=restaurant&key=AIzaSyCc4aVWLkCZyvh8ERdTuVg0UgPfeux2kz4';
        fetch(url)
            .then(response => {
                if (response) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                console.log(data);
                
                this.setState({restaurant: data.results})
            }).catch(error => this.setState({ error, isLoading: false }));
    }
    restaurantMarker = () => {
        console.log(this.state.restaurant);  
    }

    getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2, unit) => {
        var radlat1 = Math.PI * lat1 / 180
        var radlat2 = Math.PI * lat2 / 180
        var theta = lon1 - lon2
        var radtheta = Math.PI * theta / 180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180 / Math.PI
        dist = dist * 60 * 1.1515
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return (Math.round(dist * 100) / 100).toString() + ' m away';
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
                <View style={{position: 'absolute', top : 10, height: 200, zIndex: 1, width: '100%'}}>
                   <TextInput 
                    placeholder= 'Search here !!'
                   />
                </View>
                <MapView 
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                    
                >
                    {markers.map((marker, i) => (
                        <Marker 
                            key={i} 
                            image={{ uri: marker.icon}}
                            title={marker.name}
                            description={
                               this.getDistanceFromLatLonInKm(
                                    this.state.focusedLocation.latitude,
                                    this.state.focusedLocation.longitude,
                                    marker.geometry.location.lat,
                                    marker.geometry.location.lng
                                )}
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
export default Map;