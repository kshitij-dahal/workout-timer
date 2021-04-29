import React from 'react';
import {Text} from 'react-native';

const RunningRoutineScreen = ({data}) => {
  return <Text> {data.routine.name}</Text>;
};

export default RunningRoutineScreen;
