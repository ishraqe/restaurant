import React, {Component} from 'react';
import { View, Text , Image, StyleSheet} from "react-native";
import { Card, CardSection } from "../common/index";
import color from '../../assets/colors';


const ListComponent  = (props) => {
    return (
        <View style={{marginTop: 20, width: '100%', paddingLeft: 10, paddingRight: 10, borderRadius: 5}}>
            <CardSection>
                <View style={styles.imageCover}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxmBuSqBLEVe6FZkt8CK7GxewFiDHOihhgod4ncC8H0hPVV6w'}}
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
                        <Text style={styles.status}>Open now</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>.</Text>                        
                        <Text style={styles.loca}>40 Kilo from you</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>.</Text>                        
                        <Text style={styles.loca}>Hanoi, Vietnam</Text>
                    </View>
                </View>
            </CardSection>
        </View>
    )
}

const styles = StyleSheet.create({
    imageCover :{
        width: '100%',
        height: 150
    },
    image :{
        height: '100%', 
        width: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius :5,
        borderTopRightRadius : 5
    },
    descContainer :  {
        width: '100%',
        minHeight: 100,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight :20
    },
    title : {
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#000'
    },
    typeStyle : {
        marginTop: 10, 
        marginBottom: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    type : {
        color: 'grey'
    },
    tag: {
        color: color.themeColor
    },
    infoContainer : {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    status : {
        color: color.themeColor
    },
    loca : {
       color: 'grey' 
    },
    rate : {
        height: 60, 
        width: 60, 
        backgroundColor: 
        color.themeColor, 
        borderRadius: 30,
        position: 'absolute',
        justifyContent: 'center', 
        alignItems: 'center',
        bottom: -30,
        right: 20
    },
    rateText : {
        fontSize: 20,
        color :'#fff',
        fontWeight: 'bold'
    }
})

export default ListComponent