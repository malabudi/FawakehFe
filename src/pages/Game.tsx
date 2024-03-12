import React, { PropsWithChildren } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export interface Props {
    navigation: any;
}

const GameScreen = (props: PropsWithChildren<Props>) => {
  return (
    <View>
      <Text>Game Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameScreen;
