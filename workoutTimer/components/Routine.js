import React from 'react';
import {List} from 'react-native-paper';
import {Button, View} from 'react-native';
import Workout from './Workout';

const Routine = ({data, navigation, setExpandedRoutine}) => {
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => setExpandedRoutine(data.routine.name, expanded), [
    expanded,
  ]);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
      <List.Accordion
        title={data.routine.name}
        expanded={expanded}
        onPress={handlePress}>
        {data.routine.workouts.map(workout => (
          <Workout data={workout} />
        ))}
      </List.Accordion>
    </View>
  );
};

export default Routine;
