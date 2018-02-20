import React from 'react';
import {
    Text,View
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import OverView from './component/Overview';
import Menu from './component/Menu';
import Review from './component/Review';

import color from '../../assets/colors';


export default () => {
    return <ScrollableTabView
        initialPage={0}
        renderTabBar={() => 
            <DefaultTabBar />
        }
        tabBarPosition = 'bottom'
        style= {{flex:1, backgroundColor: '#fff'}}
        tabBarActiveTextColor={color.themeColor}
        tabBarUnderlineStyle = {{backgroundColor: color.themeColor}}
    >
       
        <OverView tabLabel='Overview' title= 'Over'/>
        <Menu tabLabel='Menu' />
        <Review tabLabel='Review' />
    </ScrollableTabView>;
}
