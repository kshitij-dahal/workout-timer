import React from 'react';
import {Text} from 'react-native';

const Routine = ({data}) => {
  return <Text> {data.routine.name}</Text>;
};

export default Routine;
