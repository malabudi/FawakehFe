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
import SettingsScreen from './pages/Settings';
import LeaderboardScreen from './pages/Leaderboard';
import HowToPlayScreen from './pages/HowToPlay';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions = {{
        headerShown: false,
        // Content style is used for global styles only
        contentStyle: {
          backgroundColor: '#FDF5E6',
        },
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Game" component={GameScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen}/>
        <Stack.Screen name="HowToPlay" component={HowToPlayScreen}/>
    </Stack.Navigator>
  );
}

//const styles = StyleSheet.create({});

export default App;
