import React,{ Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity , FlatList, ScrollView} from 'react-native';
import color from "../assets/colors";
import { BoxShadow } from 'react-native-shadow';
import ListComponent from '../component/Home/ListComponent'

import { connect } from 'react-redux';
import { getUsersLocation, getRestaurant } from '../store/actions';

import RNGooglePlaces from 'react-native-google-places';


class Home  extends Component {

    state = {
        userLatLong:  null,
        restaurant: null
    }

    componentWillMount () {
        this.props.get_user_latlng();
    }
    componentWillReceiveProps(next) {
        console.log(next);
        this.setState({
            userLatLong: next.auth.userLatLong,
            restaurant: next.auth.restaurants
        });
    }
    _keyExtractor = (item, index) => item.id;

    render () {
        console.log(this.state.userLatLong);
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
                            data={this.state.restaurant}
                            keyExtractor={this._keyExtractor}
                            renderItem={({ item }) => (
                                <ListComponent
                                    item={item}
                                    geoLocation={this.state.userLatLong}
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
        marginBottom: 50
    }
});

const mapStateToProps = ({ auth, restaurants}) => {
    return {
        auth,
        restaurants
    }
}


const mapDispatchToProps = dispatch => {
    return {
        get_user_latlng: () => dispatch(getUsersLocation()),
        get_restaurant: ({ lat, lon }) => dispatch(getRestaurant({lat, lon})) 
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);