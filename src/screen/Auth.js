import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, StatusBar} from "react-native";
import color from '../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from "react-native-video";
import bgVideo from '../assets/bg.mov';



class Auth extends Component {
  
    render() {
        return (
            <View style={styles.container}>
                <Video  
                    muted={false}   
                    repeat={true}   
                    source={bgVideo}
                    resizeMode="cover" style={StyleSheet.absoluteFill} 
                />
                <View style={styles.buttonContainer}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{width: 200, height: 200,  marginBottom: 50}}
                    />
                
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={[styles.button, {marginTop: 100}]}
                    >
                        <View style={styles.buttonWrapper}>
                            <Image
                                style={{width: 30, height: 30, marginRight: 10}}
                                source={require('../assets/google.png')}
                            />
                            <Text style={{color: '#000'}}>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: '#3b5998'}]}
                >
                        <View style={styles.buttonWrapper}>
                           <Icon
                                name={'logo-facebook'}
                                color={'#fff'}
                                size={30}
                                style={{ marginRight: 10}}
                           />
                            <Text style={{ color: '#fff' }}>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: { width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
    button: {
        width: '60%',
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        shadowColor: color.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        marginBottom: 10,
        elevation: 2,
    },
    buttonWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Auth;