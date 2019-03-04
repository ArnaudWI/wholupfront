import React from 'react';

import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';

// imports de mes composants de navigation
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

// imports de mes screens au sein de mon composant App et de ma navigation
import AccountScreen from '../Screens/AccountScreen';
import FollowingScreen from '../Screens/FollowingScreen';
import SearchScreen from '../Screens/SearchScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen';

// création de ma bottom navigation
const MainNavigator = createBottomTabNavigator({
  Account: AccountScreen,
  Search: SearchScreen,
  Following: FollowingScreen
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      var iconName;
      var outline = (focused)
      ? ''
      : '';// '-outline' normalement
      if (navigation.state.routeName == 'Account') {
        iconName = 'ios-information-circle';
      } else if (navigation.state.routeName == 'Search') {
        iconName = 'ios-search';
      } else if (navigation.state.routeName == 'Following') {
        iconName = 'ios-people';
      }

      return <Ionicons name={iconName + outline} size={25} color={tintColor}/>;
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  }
});

// Création de ma navigation globale qui contient à la fois mes pages non contenues
// dans la bottom navigation et les pages de la bottom Navigation

var StackNavigator = createStackNavigator({
  // pages de ma navigation sans bottom
  Home: HomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,

  //pages de ma navigation avec le bottom créés juste avant
  MainNavigator: MainNavigator
}, {headerMode: 'none'  });

// export du composant navigation
export default Navigation = createAppContainer(StackNavigator);
