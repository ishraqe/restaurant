import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,Dimensions, TouchableNativeFeedback } from "react-native";
import { Card, CardSection } from "../../../component/common/index";
import color from '../../../assets/colors';


const ReviewList = (props) => {
    const { author_name, profile_photo_url, rating, relative_time_description, text, time } = props.item;
    return (
            <View style={{
                flex: 1, marginTop: 20}}>
                <CardSection>
                    <View style={styles.cardWrapper}>
                        <View style={styles.cardInsiedContainer}>
                        <View style={styles.profileContainer}>
                                <Image
                                    source={{ uri: profile_photo_url }}
                                    style={styles.profileImage}
                                />
                                <View>
                                    <Text style={styles.name}>{author_name}</Text>
                                <Text style={styles.time}>{relative_time_description}</Text>
                                </View>
                        </View> 
                            <Text style={styles.review}>{rating}/5</Text>
                        </View>
                        <Text >{text}</Text>
                    </View>
                </CardSection>
            </View>    
    );
}

const styles = StyleSheet.create({
    cardWrapper : {
        minHeight: 120,
        width: '100%' ,
        padding: 20
    },
    cardInsiedContainer : {
        width: '100%',
        flexDirection: 'row',
        alignItems :'center',
        justifyContent : 'space-between',
        marginBottom: 7
       
    },
    profileContainer : {
        flexDirection :'row',
        alignItems: 'center'
    },
    profileImage : {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10
    },
    name : {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    time :{
        fontSize :12,
        color: 'gray'
    },
    review : {
        color: color.themeColor,
    }
})

export default ReviewList;