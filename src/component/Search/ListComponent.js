import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Card, CardSection } from "../common/index";
import color from '../../assets/colors';



const ListComponent = (props) => {
    const { name, opening_hours, rating, geometry, vicinity, types} = props.item;
    console.log(props.geoLocation,props.item, 'geolocation');
    
    return (
        <View style={{ marginTop: 20, width: '100%', paddingLeft: 10, paddingRight: 10, borderRadius: 5 }}>
            <CardSection>
                <View style={{width: '100%', flexDirection: 'row'}}>
                    <View style={styles.imageCover}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxmBuSqBLEVe6FZkt8CK7GxewFiDHOihhgod4ncC8H0hPVV6w' }}
                        />
                        <View style={styles.rate}>
                            <Text style={styles.rateText}>{rating}</Text>
                        </View>
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.title}>{name}</Text>
                    </View>
                </View>
            </CardSection>
        </View>
    )
}

const styles = StyleSheet.create({
    imageCover: {
        width: 120,
        height: 120
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    descContainer: {
        width: '100%',
        marginLeft: 10,
        maxHeight: 120,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    typeStyle: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    type: {
        color: 'grey',
        marginRight: 70
    },
    tag: {
        color: color.themeColor
    },
    infoContainer: {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    status: {
        color: color.themeColor,
        marginRight: 20
    },
    loca: {
        color: 'grey'
    },
    rate: {
        height: 40,
        width: 40,
        backgroundColor:
            color.themeColor,
        borderRadius: 20,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 40,
        left: 100
    },
    rateText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default ListComponent