import React, { PropsWithChildren } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export interface Props {
    navigation: any;
}

const LeaderboardScreen = (props: PropsWithChildren<Props>) => {
  return (
    <View>
      <Text>Leaderboard Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeaderboardScreen;
