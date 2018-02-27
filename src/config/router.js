import React, {Component} from 'react';
import { TouchableOpacity, View, Text } from "react-native";
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
import Test from '../screen/Test'
import Direction from '../component/Details/component/Direct';

class RouterComponent extends Component { 

    getTabIcon = (focused) => {
        let focusedRoute = focused.focused;
        let routeName = focused.route.key;
        
        let iconName;
        let label;
        if (routeName === 'Home') {
            iconName = `ios-home${focusedRoute ? '' : '-outline'}`;
            label = routeName;
        } else if (routeName === 'Search') {
            label = routeName;
            iconName = `ios-search${focusedRoute ? '' : '-outline'}`;
        } else if (routeName === 'Notification') {
            iconName = `ios-notifications${focusedRoute ? '' : '-outline'}`;
            label = routeName;
        } else if (routeName === 'Bookmark') {
            iconName = `ios-bookmark${focusedRoute? '' : '-outline'}`;
            label = routeName;
        } else if (routeName === 'Map') {
            iconName = `ios-pin${focusedRoute? '' : '-outline'}`;
            label = routeName;
        }

        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={iconName} size={25} color={color.themeColor} />
                <Text>{label}</Text>
            </View>
        );
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
                        <Scene key="drawer" initial drawer contentComponent={DrawerScreen}>
                            <Scene 
                                key="tabbar"
                                showLabel={true} 
                                activeTintColor={color.themeColor} 
                                tabs={true}
                                tabBarPosition={'bottom'}
                                tabBarLabel={({ focused }) => this.getTabIcon}
                              
                            >
                                <Scene
                                    key="Home"
                                    component={HomeScreen}
                                    title="Home"
                                />
                                <Scene
                                    key="Search"
                                    component={SearchScreen}
                                    title = 'Search'
                                />
                                <Scene
                                    key="Map"
                                    component={Map}
                                    title="Map"
                                />
                                {/* <Scene
                                    key="Notification"
                                    component={NotificationScreen}
                                    title="Notification"
                                /> */}
                                <Scene
                                    key="Bookmark"
                                    component={BookmarkScreen}
                                    title="Bookmark"
                                />
                            </Scene>
                        </Scene>
                    </Scene>
                    <Scene key='main'>
                        <Scene
                            key='Details'
                            component={Details}
                            title='Details'
                        />
                        <Scene 
                            key={'Directions'}
                            component={Direction}
                            title={'Direction'}
                        />
                    </Scene>
                </Stack>
            </Router>
        );
    }
}


export default RouterComponent;
