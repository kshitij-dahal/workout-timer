import React from 'react';
import Routine from '../components/Routine';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Button, View} from 'react-native';

const RoutinesScreen = ({navigation}) => {
  const defaultTimes = {
    setDuration: {min: '00', sec: '10'},
    betweenSetDuration: {min: '00', sec: '45'},
    betweenWorkoutsDuration: {min: '02', sec: '00'},
  };

  const routines = [
    {
      name: 'Upper Body',
      workouts: [
        {...defaultTimes, name: 'Push-ups', reps: 12, sets: 3},
        {...defaultTimes, name: 'Military Press', reps: 10, sets: 3},
        {...defaultTimes, name: 'Barbell Bent Over Row', reps: 10, sets: 3},
        {
          ...defaultTimes,
          name: 'Lying Dumbbell Triceps Extension',
          reps: 6,
          sets: 3,
        },
        {...defaultTimes, name: 'Dumbbell Curls', reps: 8, sets: 3},
      ],
    },
  ];

  const getInitialExpandedRoutines = () => {
    let initial = {};
    routines.forEach(routine => (initial[routine.name] = 'false'));
    return initial;
  };

  const [expandedRoutines, setExpandedRoutines] = React.useState(
    getInitialExpandedRoutines(),
  );

  const setExpandedRoutine = (routineName, value) => {
    let copy = JSON.parse(JSON.stringify(expandedRoutines));
    copy[routineName] = value;
    setExpandedRoutines(copy);
  };

  React.useEffect(() => console.log(expandedRoutines), [expandedRoutines]);

  const displayStartButton = routineName => {
    console.log('haha');
    console.log(routineName);
    console.log(expandedRoutines);
    if (!expandedRoutines[routineName]) {
      return (
        <View>
          <Button
            title="Go"
            onPress={() => navigation.navigate('RunningRoutine', routines[0])}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
              paddingVertical: 100,
            }}
          />
        </View>
      );
    } else {
      return <View />;
    }
  };

  return (
    <View>
      {routines.map(routine => (
        <Swipeable renderLeftActions={() => displayStartButton(routine.name)}>
          <Routine
            data={{routine: routine}}
            setExpandedRoutine={setExpandedRoutine}
          />
        </Swipeable>
      ))}
    </View>
  );
};

export default RoutinesScreen;
