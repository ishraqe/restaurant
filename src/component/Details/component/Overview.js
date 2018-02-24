import React, { Component } from 'react';

import { Platform, View, ScrollView, Text, StatusBar, StyleSheet, FlatList } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

import SliderEntry from '../SliderEntry';
import { ENTRIES1, ENTRIES2 } from '../entries';
import { sliderWidth, itemWidth } from '../SliderStyle';
import styles, { colors } from '../index';
import { scrollInterpolators, animatedStyles } from '../animations';
import color from '../../../assets/colors';
import { Actions } from 'react-native-router-flux';
import { getDistanceFromLatLonInKm } from '../../util';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

class OverView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            overview: null,
        };
    }
    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }
    componentWillMount() {  
        Actions.refresh({ title: 'Overview' })
    }
    
    componentWillReceiveProps(next){
        console.log(next.overview, 'over');
        this.setState({
            overview: next.overview
        });
    }

    mainExample(number, rating) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    // inactiveSlideShift={20}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={false}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
                <View style={style.rate}>
                    <Text style={style.rateText}>{rating}</Text>
                </View>
            </View>
        );
    }
    renderRow({item}) {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text>{'\u2022'}</Text>
                <Text style={{  paddingLeft: 5 }}>{item}</Text>
            </View>
        );
    }
    renderOverView = () => {
       if (this.state.overview) {
          
           const { name, rating, opening_hours, international_phone_number, geometry, formatted_address, types, user_latlng} = this.state.overview;
           const distance = getDistanceFromLatLonInKm(user_latlng.latitude, user_latlng.longitude, geometry.location.lat, geometry.location.lng);
           const example1 = this.mainExample(1, rating);
           return (
               <ScrollView
                   style={{ flex: 1 }}
               >
                   <View style={{ flex: 1, }}>
                       {example1}
                       <View style={style.descContainer}>
                           <Text style={style.title}>{name}</Text>
                           <View style={style.typeStyle}>
                               <Text style={style.type}>{types[0]}</Text>
                           </View>
                           <View style={style.infoContainer}>
                               <Text style={style.status}>{opening_hours.open_now ? 'Open now' : 'closed'}</Text>
                               <Text style={{ fontSize: 20, fontWeight: 'bold' }}>.</Text>
                               <Text style={style.loca}>{distance}</Text>
                               <Text style={{ fontSize: 20, fontWeight: 'bold', }}>.</Text>
                           </View>
                           <FlatList
                               data={types}
                               renderItem={({ item }) => this.renderRow({item})}
                           />
                           <Text style={style.loca}>{formatted_address}</Text>
                           <View style={style.action}>
                               <View style={style.actionWrapper}>
                                   <Icon
                                       name={'ios-time-outline'}
                                       size={30}
                                   />
                                   <Text>5AM-10AM</Text>
                               </View>
                               <View style={style.actionWrapper}>
                                   <Icon
                                       name={'ios-navigate-outline'}
                                       size={30}
                                   />
                                   <Text>Direct</Text>
                               </View>
                               <View style={style.actionWrapper}>
                                   <Icon
                                       name={'ios-call-outline'}
                                       size={30}
                                   />
                                   <Text>Call now</Text>
                               </View>
                               <View style={style.actionWrapper}>
                                   <Icon
                                       name={'ios-bookmark'}
                                       size={30}
                                   />
                                   <Text>Bookmark</Text>
                               </View>
                           </View>
                       </View>
                   </View>
               </ScrollView>
           );
       }
       
       
    }

    render() {
        console.log(this.props.overview, 'last');
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', }}>
                {this.renderOverView()}
            </View>
        );
    }
}

const style = StyleSheet.create({
    descContainer: {
        width: '100%',
        minHeight: 100,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    typeStyle: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    type: {
        color: 'grey'
    },
    tag: {
        color: color.themeColor
    },
    infoContainer: {
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    status: {
        color: color.themeColor
    },
    loca: {
        color: 'grey'
    },
    rate: {
        height: 60,
        width: 60,
        backgroundColor: color.themeColor,
        borderRadius: 30,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -20,
        right: 60
    },
    rateText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    actionWrapper: {
        backgroundColor: '#eee',
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: -10,
        marginRight: -10
    }
});


export default OverView;