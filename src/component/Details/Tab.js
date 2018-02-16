import React from 'react';
import {
    Text,View
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import OverView from './component/Overview';
import color from '../../assets/colors';


export default () => {
    return <ScrollableTabView
        style={{ marginTop: 20, }}
        initialPage={0}
        renderTabBar={() => <DefaultTabBar />}
        tabBarPosition = 'bottom'
        tabBarActiveTextColor={color.themeColor}
        tabBarUnderlineStyle = {{backgroundColor: color.themeColor}}
    >
       
        <OverView tabLabel='Overview'/>
        <Text tabLabel='Menu'>favorite</Text>
        <Text tabLabel='Review'>project</Text>
    </ScrollableTabView>;
}
