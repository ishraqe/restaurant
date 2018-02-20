import React,{ Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity , FlatList, ScrollView} from 'react-native';
import color from "../assets/colors";
import { BoxShadow } from 'react-native-shadow';
import ListComponent from '../component/Home/ListComponent'

import { connect } from 'react-redux';
import { getUsersLocation } from '../store/actions';



class Home  extends Component {
    componentWillMount () {
        console.log('hello');
        
        
    }
    componentDidMount() {
        console.log('hello');

       
    }
    render () {
        return (
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
                            data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'o' }, { key: 'p' }, { key: 'q' }, { key: 'r' }, { key: 's' }, { key: 't' }, { key: 'u' }, { key: 'v' }, { key: 'w' }, { key: 'x' }, { key: 'y' }, { key: 'z' }, { key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '10' }, { key: '11' }, { key: '12' }, { key: '13' }, { key: '14' }, { key: '15' }, { key: '16' }]}
                            renderItem={({ item }) => (
                                <ListComponent
                                    item={item}
                                />
                            )}
                        />
                    </View>
                </View>
          
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


const mapDispatchToProps = dispatch => {
    return {
        log_user_in: () => dispatch(getUsersLocation())
    };
};


export default connect(null, mapDispatchToProps)(Home);