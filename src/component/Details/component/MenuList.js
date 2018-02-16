import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Card, CardSection } from "../../../component/common/index";
import color from '../../../assets/colors';
import { Actions } from 'react-native-router-flux';


const MenuList = (props) => {
    return (
        <View style={{ marginTop: 20, width: '100%', paddingLeft: 10, paddingRight: 10, borderRadius: 5 }}>

            <CardSection>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={styles.imageCover}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxmBuSqBLEVe6FZkt8CK7GxewFiDHOihhgod4ncC8H0hPVV6w' }}
                        />
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.title}>Sublimotion</Text>
                        <View style={styles.typeStyle}>
                            <Text style={styles.type}>Restaurant</Text>
                            <Text style={styles.tag}>$$$$$</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.status}>Open now </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10 }}>.</Text>
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
    }
})

export default MenuList;