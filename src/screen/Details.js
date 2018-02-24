import React, { Component } from 'react';

import {  View,Text, StatusBar } from 'react-native';
import Tab from '../component/Details/Tab';
import {connect} from 'react-redux';
import { getRestaurantDetails} from '../store/actions/index';

class Details extends Component {

    state = {
        restaurant_detail : null
    }

    componentDidMount () {
        const place_id = this.props.item.item.place_id;        
        this.props.get_restaurant_detail({ place_id });            
    }

    componentWillReceiveProps(next) {
        console.log(next);
        setTimeout(() => {
            if (next.restaurants) {
                this.setState({
                    restaurant_detail: { ...next.restaurants.restaurant_detail.result, user_latlng: next.auth.userLatLong}
                });
            }
        }, 700);
       
       
    }
    render() {
        console.log(this.state.restaurant_detail, 'detail');
        return (
            <View style={{flex:1 }}>
                <Tab details={this.state.restaurant_detail}  />
            </View>
        );
    }
}


const mapStateToProps = ({auth,restaurants }) => { 
    return {
        auth,
        restaurants
    }
}


const mapDispatchToProps = dispatch => {
    return {
        get_restaurant_detail: ({ place_id }) => dispatch(getRestaurantDetails({ place_id }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);