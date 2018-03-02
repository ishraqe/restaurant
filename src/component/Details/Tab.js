import React, {Component} from 'react';
import {
    Text,View
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import OverView from './component/Overview';
import Menu from './component/Menu';
import Review from './component/Review';

import color from '../../assets/colors';


class ScrollableTab extends Component {

    state = {
        reviews : null,
        overview : null
    }

    componentWillReceiveProps (next) {
        setTimeout(() => {
            if (next.details) {
                this.setState({
                    reviews: next.details.reviews,
                    overview: next.details
                })
            }
        }, 700);
    }

    render () {
        return (
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() =>
                    <DefaultTabBar />
                }
                tabBarPosition='bottom'
                style={{ flex: 1, backgroundColor: '#fff' }}
                tabBarActiveTextColor={color.themeColor}
                tabBarUnderlineStyle={{ backgroundColor: color.themeColor }}
            >

                <OverView overview={this.state.overview} tabLabel='Overview' title='Over' />
                <Menu tabLabel='Menu' />
                <Review reviews={this.state.reviews}  tabLabel='Review' />
            </ScrollableTabView>
        )
    }
}

export default ScrollableTab;
