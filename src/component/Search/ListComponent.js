import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Card, CardSection } from "../common/index";
import color from '../../assets/colors';
import {Actions} from 'react-native-router-flux';


const ListComponent = (props) => {
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
                            <Text style={styles.rateText}>9.2</Text>
                        </View>
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.title}>Sublimotion</Text>
                        <View style={styles.typeStyle}>
                            <Text style={styles.type}>Restaurant</Text>
                            <Text style={styles.tag}>$$$$$</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.status}>Open now </Text>
                            <Text style={{fontSize: 20, fontWeight: 'bold', marginRight: 10}}>.</Text>
                            <Text style={styles.loca}>40 Kilo from you</Text>
                        </View>
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