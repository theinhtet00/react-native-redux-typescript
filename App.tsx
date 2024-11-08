import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StackScreenNames, StackScreens} from './src/screens';
import StackNavigator from './src/navigations/stackNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <StackNavigator/>
  );
}

export default App;
