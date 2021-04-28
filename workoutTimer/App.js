/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routine from './components/Routine';

const App = () => {
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

  return <Routine data={{routine: routines[0]}} />;
};

export default App;
