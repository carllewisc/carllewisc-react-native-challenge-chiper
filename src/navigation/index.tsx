import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import WebViewScreen from '../screens/WebViewScreen';

import styles from '../styles';
import {Colors} from '../themes';

import {RootStackParams} from '../ts/types';

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.background}
      />
      <SafeAreaView style={styles.container}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="WebView" component={WebViewScreen} />
        </RootStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigation;
