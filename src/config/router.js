import React from 'react';
import { TouchableOpacity, View } from "react-native";
import { StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../assets/colors';


import Auth from "../screen/Auth";
import HomeScreen from '../screen/Home';
import SearchScreen from '../screen/Search';
import NotificationScreen from '../screen/Notifications';
import BookmarkScreen from '../screen/Bookmark';
import DrawerScreen from '../screen/DrawerScreen';
import Map from '../screen/Map';


const tabScreen = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Home',
        }),

    },
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Search',
        }),
    },
    Map: {
        screen: Map,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Map',
        }),
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Notifications',
        }),
    },
    Bookmark: {
        screen: BookmarkScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Bookmark',
        }),
    }
},
{
    navigationOptions: ({ navigation }) => ({
        
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-home${focused ? '' : '-outline'}`;
            } else if (routeName === 'Search') {
                iconName = `ios-search${focused ? '' : '-outline'}`;
            } else if (routeName === 'Notification') {
                iconName = `ios-notifications${focused ? '' : '-outline'}`;
            } else if (routeName === 'Bookmark') {
                iconName = `ios-bookmark${focused ? '' : '-outline'}`;
            } else if (routeName === 'Map') {
                iconName = `ios-pin${focused ? '' : '-outline'}`;
            }
            
            return <Icon name={iconName} size={25} color={color.themeColor} />;
        },
        headerLeft: (
            <TouchableOpacity 
                style={{marginLeft :20}}
                onPress={() => navigation.navigate('DrawerToggle')}  >
                <Icon 
                    name = 'md-menu'
                    size = {30}
                    color = {color.themeColor}
                />
            </TouchableOpacity>
        ),
        headerTitleStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft :'35%'
        },
       
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
});

const DrawerScene = StackNavigator({
    Auth: {
        screen: Auth,
        navigationOptions: {
            header: null,
        }
    }, 
    Stacks : { screen: tabScreen }
})  

export default DrawerNavigator({
   
    Drawer: { screen: DrawerScene },
  
});

