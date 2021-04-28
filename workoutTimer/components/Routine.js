import React from 'react';
import {List} from 'react-native-paper';
import Workout from './Workout';

const Routine = ({data}) => {
  return (
    <List.Accordion
      title="Uncontrolled Accordion"
      left={props => <List.Icon {...props} icon="folder" />}>
      {data.routine.workouts.map(workout => (
        <Workout data={workout} />
      ))}
    </List.Accordion>
  );
};

export default Routine;
