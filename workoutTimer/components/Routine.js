import React from 'react';
import {List} from 'react-native-paper';
import {View, Text} from 'react-native';
import Workout from './Workout';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Routine = ({data, navigation, setExpandedRoutine, setRoutines}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [workouts, setWorkouts] = React.useState(data.routine.workouts);

  React.useEffect(() => setExpandedRoutine(data.routine.name, expanded), [
    expanded,
  ]);

  React.useEffect(() => {}, [workouts]);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
      <List.Accordion
        title={data.routine.name}
        expanded={expanded}
        onPress={handlePress}
        right={() => <View />}>
        {data.routine.workouts.map(workout => (
          <Workout data={workout} />
        ))}
      </List.Accordion>
    </View>
  );
};

export default Routine;
