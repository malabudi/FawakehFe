/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/Home';
import GameScreen from './pages/Game';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      >
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Game" component={GameScreen}/>
    </Stack.Navigator>
  );
}

//const styles = StyleSheet.create({});

export default App;
