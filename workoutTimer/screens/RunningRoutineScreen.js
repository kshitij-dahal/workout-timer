import React from 'react';
import {Text} from 'react-native';

const RunningRoutineScreen = ({route}) => {
  return <Text> {route.params.name}</Text>;
};

export default RunningRoutineScreen;
