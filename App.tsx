import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LandingScreen from './src/screens/LandingScreen';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const switchNavigator = createSwitchNavigator({
  //랜딩스크린 메인 출력
  landingStack: {
    screen: createStackNavigator(
      {
        Landing: LandingScreen,
        // search address screen
      },
      {
        defaultNavigationOptions: {
          headerShown: false,
        },
      }
    ),
  },

  homeStack: createBottomTabNavigator({
    // Home tab Icon
    home: {
      screen: createStackNavigator({
        HomePage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./src/images/home_icon.png')
              : require('./src/images/home_n_icon.png');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },

    // Home tab Icon
    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./src/images/offer_icon.png')
              : require('./src/images/offer_n_icon.png');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },

    // Home tab Icon
    Cart: {
      screen: createStackNavigator({
        CartPage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./src/images/cart_icon.png')
              : require('./src/images/cart_n_icon.png');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    // Home tab Icon
    Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./src/images/account_icon.png')
              : require('./src/images/account_n_icon.png');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
  }),
});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  <Provider store={store}>
    <AppNavigation />
  </Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});
