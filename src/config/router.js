import React, {Component} from 'react';
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../assets/colors';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';


import Auth from "../screen/Auth";
import HomeScreen from '../screen/Home';
import SearchScreen from '../screen/Search';
import NotificationScreen from '../screen/Notifications';
import BookmarkScreen from '../screen/Bookmark';
import DrawerScreen from '../screen/DrawerScreen';
import Map from '../screen/Map';
import Details from '../screen/Details';
import Tab from '../component/Details/Tab'


class RouterComponent extends Component { 
    getTabIcon = (focused) => {
        console.log(focused.route.focused);
        
        const routeName = focused.route.key;
        
        let iconName;
        if (routeName === 'Home') {
            iconName = `ios-home${focused.route.focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
            iconName = `ios-search${focused.route.focused ? '' : '-outline'}`;
        } else if (routeName === 'Notification') {
            iconName = `ios-notifications${focused.route.focused ? '' : '-outline'}`;
        } else if (routeName === 'Bookmark') {
            iconName = `ios-bookmark${focused.route.focused ? '' : '-outline'}`;
        } else if (routeName === 'Map') {
            iconName = `ios-pin${focused.route.focused ? '' : '-outline'}`;
        }

        return <Icon name={iconName} size={25} color={color.themeColor} />;
    }

    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: '#fff' }}

                titleStyle={{ color: color.themeColor, alignSelf: 'center' }}
            >
                <Stack key="root" hideNavBar={true}>
                    <Stack key="first" >
                        <Scene
                            key='initial_screen'
                            hideNavBar={true}
                            component={Auth}

                        />
                    </Stack>
                    <Scene key="lightbox" lightbox >
                        <Scene key="drawer" drawer contentComponent={DrawerScreen}>
                            <Scene 
                                key="tabbar"
                                showLabel={true} activeBackgroundColor='#fff'
                                activeTintColor={color.themeColor} tabs={true}
                                tabBarPosition={'bottom'}
                            >
                                <Scene
                                    key="Home"
                                    tabBarLabel={({ focused }) => this.getTabIcon}
                                    component={HomeScreen}
                                    title="Home"
                                />
                                <Scene
                                    key="Search"
                                    tabBarLabel={({ focused }) => this.getTabIcon}
                                    component={SearchScreen}
                                    title="Search"
                                />
                                <Scene
                                    key="Map"
                                    tabBarLabel={({ focused }) => this.getTabIcon}
                                    component={Map}
                                    title="Map"
                                />
                                <Scene
                                    key="Notification"
                                    tabBarLabel={({ focused }) => this.getTabIcon}
                                    component={NotificationScreen}
                                    title="Notification"
                                />
                                <Scene
                                    key="Bookmark"
                                    tabBarLabel={({ focused }) => this.getTabIcon}
                                    component={BookmarkScreen}
                                    title="Bookmark"
                                />
                            </Scene>
                        </Scene>
                    </Scene>
                </Stack>
            </Router>
        );
    }
}


export default RouterComponent;
