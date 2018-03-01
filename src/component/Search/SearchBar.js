import React from 'react';
import { View, Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2}
        autoFocus={false}
        fetchDetails
        onPress={(data, details) =>console.log(data, details)}
        query={{
          types: '(cities)', // default: 'geocode'
          key: 'AIzaSyAwUyFikvyvgzx2Wp2bVc3Vt_hNm4AIggM',
          language: 'en' // language of the results
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)'
          },
          listView: {
            height: '100%',
            width: '100%',
            position: 'absolute',
          }
        }}
        nearbyPlacesAPI={'GooglePlacesSearch'}
        // GoogleReverseGeocodingQuery={{
        // }}
        // GooglePlacesSearchQuery={{
        // }}
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
      />
  );
}

export {GooglePlacesInput};