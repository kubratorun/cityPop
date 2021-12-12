/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/Home';
import SearchByCity from './src/SearchByCity';
import SearchByCountry from './src/SearchByCountry';
import City from './src/City';
import Country from './src/Country';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchByCity"
          component={SearchByCity}
          options={({title: 'City Pop'})}
        />
        <Stack.Screen
          name="SearchByCountry"
          component={SearchByCountry}
          options={({title: 'City Pop'})}
        />
        <Stack.Screen
          name="City"
          component={City}
          options={({title: 'City Pop'})}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={({title: 'City Pop'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
