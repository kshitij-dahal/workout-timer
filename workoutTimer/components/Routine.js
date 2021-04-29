import React from 'react';
import {List} from 'react-native-paper';
import {Button, View} from 'react-native';
import Workout from './Workout';

const Routine = ({data, navigation}) => {
  return (
    <View>
      <List.Accordion
        title={data.routine.name}
        right={() => (
          <Button
            title="Start"
            onPress={() => navigation.navigate('RunningRoutine', data)}
          />
        )}>
        {data.routine.workouts.map(workout => (
          <Workout data={workout} key={1} />
        ))}
      </List.Accordion>
    </View>
  );
};

export default Routine;
