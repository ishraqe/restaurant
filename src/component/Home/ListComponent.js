import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Card, CardSection } from "../common/index";
import color from '../../assets/colors';
import { withNavigation } from 'react-navigation'
import {Actions} from 'react-native-router-flux';
import {getDistanceFromLatLonInKm} from '../util'


const ListComponent  = (props) => {
    
    const { name, opening_hours, rating, geometry, vicinity, types} = props.item;
    const { latitude, longitude } = props.geoLocation;
    onRowPress = () => {
        Actions.push('main', {item: props} );
    }


    return (
            <View style={{marginTop: 20, width: '100%', paddingLeft: 10, paddingRight: 10, borderRadius: 5}}>
                <TouchableOpacity
                    style={{ width: '100%' }}
                onPress={this.onRowPress}
                >
                        <CardSection>
                            <View style={styles.imageCover}>
                                <Image
                                    style={styles.image}
                            source={{ uri: 'https://www.bostonsausage.co.uk/wp-content/uploads/2013/11/Rump-Steak-Meal-Deal.jpg'}}
                                />
                                <View style={styles.rate}>
                                    <Text style={styles.rateText}>{rating > 0 ? rating: 0}</Text>
                                </View>
                            </View>
                            <View style={styles.descContainer}>
                                <Text style={styles.title}>{name}</Text>
                                <View style={styles.typeStyle}>
                                    <Text style={styles.type}>{types[0]}</Text>
                                    <Text style={styles.tag}>$$$$$</Text>                        
                                </View>
                                <View style={styles.infoContainer}>
                            <Text style={opening_hours.open_now ? styles.status : [styles.status, {color:'red'}]}>{opening_hours.open_now ? 'Open now' : 'Closed'}</Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>.</Text>                        
                            <Text style={styles.loca}>{getDistanceFromLatLonInKm(latitude, longitude, geometry.location.lat, geometry.location.lng )} from you</Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>.</Text>                        
                            <Text style={styles.loca}>{vicinity.substring(0, 7)}...</Text>
                                </View>
                            </View>
                        </CardSection>
                </TouchableOpacity>     
            </View>
       
    )
}

const styles = StyleSheet.create({
    imageCover :{
        width: '100%',
        height: 150
    },
    image :{
        height: '100%', 
        width: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius :5,
        borderTopRightRadius : 5
    },
    descContainer :  {
        width: '100%',
        minHeight: 100,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight :20
    },
    title : {
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#000'
    },
    typeStyle : {
        marginTop: 10, 
        marginBottom: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    type : {
        color: 'grey'
    },
    tag: {
        color: color.themeColor
    },
    infoContainer : {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    status : {
        color: color.themeColor
    },
    loca : {
       color: 'grey' 
    },
    rate : {
        height: 60, 
        width: 60, 
        backgroundColor: 
        color.themeColor, 
        borderRadius: 30,
        position: 'absolute',
        justifyContent: 'center', 
        alignItems: 'center',
        bottom: -30,
        right: 20,
        opacity: 0.9
    },
    rateText : {
        fontSize: 20,
        color :'#fff',
        fontWeight: 'bold'
    }
})

export default withNavigation(ListComponent);