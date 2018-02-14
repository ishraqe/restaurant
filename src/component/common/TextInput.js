import React from 'react';
import {View, Text, TextInput } from 'react-native';


const Input =({label, value, onChangeText, placeholder,secureTextEntry})=>{
    const {inputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                underlineColorAndroid='transparent'
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle }
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles={
    inputStyle: {
        color: '#000',
        paddingTop:3,
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        flex:2
    },
    labelStyle:{
        fontSize:19,
        paddingLeft:20,
        flex:1,
        color:'#000'
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
}

export {Input }