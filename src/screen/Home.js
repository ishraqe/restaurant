import React,{ Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity , FlatList, ScrollView} from 'react-native';
import color from "../assets/colors";
import { BoxShadow } from 'react-native-shadow';
import ListComponent from '../component/Home/ListComponent'

class Home  extends Component {

    render () {
        return (
            <ScrollView style={{flex:1}} >
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <BoxShadow setting={color.shadowOpt}>
                            <TouchableOpacity
                                style={{height: '100%',width: '100%'}}    

                            >
                                <View style={styles.iconsWrapper}>
                                    <Image
                                        source={require('../assets/restaurant.png')}
                                        style={styles.iconStyle}
                                    />
                                    <Text>Restaurant</Text>
                                </View>
                            </TouchableOpacity>
                        </BoxShadow>
                        <BoxShadow setting={color.shadowOpt}>
                            <TouchableOpacity
                                style={{ height: '100%', width: '100%' }}

                            >
                                <View style={styles.iconsWrapper}>
                                    <Image
                                        source={require('../assets/restaurant.png')}
                                        style={styles.iconStyle}
                                    />
                                    <Text>Restaurant</Text>
                                </View>
                            </TouchableOpacity>
                        </BoxShadow>
                        <BoxShadow setting={color.shadowOpt}>
                            <TouchableOpacity
                                style={{ height: '100%', width: '100%' }}

                            >
                                <View style={styles.iconsWrapper}>
                                    <Image
                                        source={require('../assets/restaurant.png')}
                                        style={styles.iconStyle}
                                    />
                                    <Text>Restaurant</Text>
                                </View>
                            </TouchableOpacity>
                        </BoxShadow>
                    </View>
                    <View style={styles.listContainer}>
                        <FlatList
                            data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' },]}
                            renderItem={({ item }) => (
                                <ListComponent
                                    item={item}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor: color.bgColor,
        padding:10,
    },
    iconContainer : {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconsWrapper :{
        height: '100%',
        width: '100%',
        backgroundColor :'#fff',
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius: 5
    },
    iconStyle :{
        height : 20, 
        width :30,
        marginBottom: 10
    },
    listContainer : {
        
        width: '100%',
    }
});

export default Home;