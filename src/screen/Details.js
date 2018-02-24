import React, { Component } from 'react';

import {  View,Text, StatusBar } from 'react-native';
import Tab from '../component/Details/Tab';
import {connect} from 'react-redux';
import { getRestaurantDetails} from '../store/actions/index';

class Details extends Component {

    componentDidMount () {
        const place_id = this.props.item.item.place_id;
    
        console.log(this.props.item.item.place_id);
        
        this.props.get_restaurant_detail({ place_id });            
        
    }

    componentWillReceiveProps(next) {
        console.log(next);
        
    }
    render() {
        return (
            <View style={{flex:1 }}>
                <Tab />
            </View>
        );
    }
}


const mapStateToProps = ({restaurants }) => {
    console.log(restaurants);
    
    return {
        restaurants
    }
}


const mapDispatchToProps = dispatch => {
    return {
        get_restaurant_detail: ({ place_id }) => dispatch(getRestaurantDetails({ place_id }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);