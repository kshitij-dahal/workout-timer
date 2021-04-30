import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Tts from 'react-native-tts';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

const RunningRoutineScreen = ({route}) => {
  const states = [
    'notRunning',
    'midSet',
    'betweenSet',
    'betweenWorkouts',
    'startSet',
  ];

  const [routineState, setRoutineState] = React.useState('notRunning');
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = React.useState(0);
  const [stopwatchStart, setStopwatchStart] = React.useState(false);
  const [stopwatchReset, setStopwatchReset] = React.useState(false);
  const stateEq = str => {
    return str.localeCompare(routineState) === 0;
  };

  if (stateEq('notRunning')) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() => {
            setRoutineState('startSet');
            setStopwatchStart(true);
          }}
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 200,
            backgroundColor: '#fff',
            borderRadius: 100,
          }}>
          <Text>Go!</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() => {
            setRoutineState('startSet');
            setStopwatchStart(!stopwatchStart);
          }}
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 200,
            backgroundColor: '#fff',
            borderRadius: 100,
          }}>
          <Stopwatch
            laps
            msecs
            start={stopwatchStart}
            reset={stopwatchReset}
            getTime={() => {}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  const hello = () => {
    Tts.speak(route.params.name);
  };

  hello();
  return <Text> {route.params.name}</Text>;
};

export default RunningRoutineScreen;
