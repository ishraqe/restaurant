import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import color from '../assets/colors';


class Auth extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer} >
                   
                </View>
                <Image
                    style={styles.bgImage}
                    source={require('../assets/bg.png')}
                />
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <View style={styles.authContainer}>
                    <View style={styles.buttonContainer}>
                        <Image
                            source={require('../assets/google.png')}
                            style = {styles.icon}
                        />
                        <Text> Continue with Google </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Image
                            source={require('../assets/google.png')}
                            style={styles.icon}
                        />
                        <Text> Continue with Google </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles=  StyleSheet.create({
    container : {
        flex :1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    logoContainer :{
        flex:1,
        width: 250,
        height: '60%',
        backgroundColor: color.themeColor ,
        opacity: 0.7,
        borderRadius: 125,
        transform: [
            { scaleX: 2 }
        ],
        position :'absolute',
        top :-39,
        justifyContent :'center',
        alignItems :'center'
    },
    bgImage : {
        height: '100%',
        width: '100%',
        marginTop :0,
        position: 'absolute',
    },
    logo : {
        height :180,
        width: 180,
        top : '15%'
    },
    authContainer :{
        flex:1,
        width :'100%',
        justifyContent :'center',
        alignItems :'center',
        paddingTop: 40
    },
    buttonContainer : {
        flexDirection : 'row',
        alignItems :'center',
        justifyContent: 'center',
        height :50,
        width: '65%',
        borderRadius :4,
        backgroundColor : '#fff',
        marginTop :20
    },
    icon : {
        height : 30,
        width :30,
        marginRight: 10
    },

});

export default Auth;