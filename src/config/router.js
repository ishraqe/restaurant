import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../assets/colors';
import Auth from "../screen/Auth";
import HomeScreen from '../screen/Home';
import SearchScreen from '../screen/Search';
import NotificationScreen from '../screen/Notifications';
import BookmarkScreen from '../screen/Bookmark';
import DrawerScreen from '../screen/DrawerScreen';


const tabScreen = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            tabStyle: { backgroundColor: 'red', marginRight: 20, width: 100 }
        }),

    },
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Search',
        }),
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Notifications',
        }),
    },
    Bookmark: {
        screen: BookmarkScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Bookmark',
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
            }
            return <Icon name={iconName} size={25} color={color.themeColor} />;
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

// export const RootStack = StackNavigator({
   
//     Main : {
//         screen:
//     }
// });