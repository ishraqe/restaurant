import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,Dimensions, TouchableNativeFeedback } from "react-native";
import { Card, CardSection } from "../../../component/common/index";
import color from '../../../assets/colors';


const ReviewList = (props) => {
    return (
            <View style={{
                flex: 1, marginTop: 20}}>
                <CardSection>
                    <View style={styles.cardWrapper}>
                        <View style={styles.cardInsiedContainer}>
                        <View style={styles.profileContainer}>
                                <Image
                                    source={{ uri: 'https://moviemavengaldotcom.files.wordpress.com/2016/10/sai-pallavi-premam-malar-images-2.jpg' }}
                                    style={styles.profileImage}
                                />
                                <View>
                                    <Text style={styles.name}>Ama Watson</Text>
                                    <Text style={styles.time}>23 hour</Text>
            
                                </View>
                        </View> 
                            <Text style={styles.review}>9,2/10</Text>
                        </View>
                        <Text >
                            lorem  lorem  lorem  lorem
                            lorem  lorem  lorem  lorem
                            lorem  lorem  lorem  lorem
                            lorem  lorem  lorem  lorem
                            lorem  lorem  lorem  lorem
                            lorem  lorem  lorem  lorem
                            lorem  lorem  lorem  lorem
                            lorem  lorem  lorem  lorem 
                        </Text>
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