import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { Home } from '../screens';

// Constants
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,    
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elavation: 21,
    }
}

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.home}
                  resizeMode='contain'
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30
                  }}    
                />
              )
            case "Search":
              return (
                <Image
                  source={icons.search}
                  resizeMode='contain'
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30
                  }}    
                />
              )
            case "Bookmark":
              return (
                <Image
                  source={icons.bookmark}
                  resizeMode='contain'
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30
                  }}    
                />
              )
            case "Account":
              return (
                <Image
                  source={icons.user}
                  resizeMode='contain'
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30
                  }}    
                />
              )                           
          
            // default:
            //   break;
          }
        }
      })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen name="Bookmark" component={Home} />
        <Tab.Screen name="Account" component={Home} />
    </Tab.Navigator>
  );
}

export default Tabs;