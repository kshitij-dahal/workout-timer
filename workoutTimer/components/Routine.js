import React from 'react';
import {List} from 'react-native-paper';
import {View, Button} from 'react-native';
import Workout from './Workout';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {getBlankWorkout} from './../utils/utils';

const Routine = ({data, navigation, setExpandedRoutine, setRoutines}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [workouts, setWorkouts] = React.useState(data.routine.workouts);

  React.useEffect(() => setExpandedRoutine(data.routine.name, expanded), [
    expanded,
  ]);

  React.useEffect(() => {}, [workouts]);

  const handlePress = () => setExpanded(!expanded);

  const setWorkout = newWorkout => {
    setWorkouts({...workouts, newWorkout});
  };

  return (
    <View>
      <List.Accordion
        title={data.routine.name}
        expanded={expanded}
        onPress={handlePress}
        right={() => <View />}>
        {workouts.map(workout => (
          <Workout data={workout} setWorkout={setWorkout} />
        ))}
        <List.Item
          title="Add Workout"
          style={{width: '95%', marginLeft: '5%'}}
          left={() => <View />}
          onPress={() => {
            const blank = getBlankWorkout();
            setWorkouts([...workouts, blank]);
          }}
        />
      </List.Accordion>
    </View>
  );
};

export default Routine;
