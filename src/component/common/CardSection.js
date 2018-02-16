import React  from 'react';
import {View} from 'react-native';

const CardSection = (props) =>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle:{
        borderBottomWidth:1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    }
};


export {CardSection};