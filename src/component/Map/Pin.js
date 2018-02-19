import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import color from "../../assets/colors";


const PinIcon = (props) => {
    return (
        <View>
            <Image 
                source = {{uri : props.icon}}
                style={{height: 30, width: 30}}
            />
        </View>
    );
}
export default PinIcon;