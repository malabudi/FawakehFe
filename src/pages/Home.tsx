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
        <Text>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
