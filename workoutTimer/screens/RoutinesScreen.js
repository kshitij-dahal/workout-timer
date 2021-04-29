import React from 'react';
import Routine from '../components/Routine';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Button, View} from 'react-native';

const RoutinesScreen = () => {
  const routines = [
    {
      name: 'Upper Body',
      workouts: [
        {name: 'Push-ups', reps: 12, sets: 3},
        {name: 'Military Press', reps: 10, sets: 3},
        {name: 'Barbell Bent Over Row', reps: 10, sets: 3},
        {name: 'Lying Dumbbell Triceps Extension', reps: 6, sets: 3},
        {name: 'Dumbbell Curls', reps: 8, sets: 3},
      ],
    },
  ];

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    return (
      <View>
        <Button
          title="Start"
          onPress={() => console.log('ee')}
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
  };

  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <Routine data={{routine: routines[0]}} />
    </Swipeable>
  );
};

export default RoutinesScreen;
