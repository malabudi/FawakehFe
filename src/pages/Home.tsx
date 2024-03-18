import React, { PropsWithChildren } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export interface Props {
  navigation: any;
}

const HomeScreen = (props: PropsWithChildren<Props>) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Game')}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Leaderboard')}>
        <Text>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('HowToPlay')}>
        <Text>How To Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
