import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

// Constants
import { icons, images, COLORS, SIZES, FONTS } from './constants'

// Screens
import { DestinationDetail, Onboarding } from './screens';

// Tabs
import Tabs from './navigation/tabs'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  }
}

import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Onboarding'}>
        <Stack.Screen 
          name="Onboarding" 
          component={Onboarding} 
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
              elevation: 0  
            },
            headerLeft: null,
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: SIZES.padding }}
                    onPress={() => console.log("Pressed")}
                >
                    <Image
                        source={icons.barMenu}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen 
          name="DestinationDetail" 
          component={DestinationDetail} 
          options={{ headerShown: false }}
        />

        {/* Tabs */}
        <Stack.Screen 
          name="Home" 
          component={Tabs} 
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
              elevation: 0
            },
            shadowColor: 'none',
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                  style={{ marginLeft: SIZES.padding }}
                  onPress={onPress}
              >
                  <Image
                      source={icons.back}
                      resizeMode="contain"
                      style={{
                          width: 25,
                          height: 25,
                      }}
                  />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={console.log("Menu Pressed")}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25
                  }}
                />
              </TouchableOpacity>
            )
          }}
        />
        
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <App />
}