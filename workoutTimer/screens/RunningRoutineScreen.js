import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Tts from 'react-native-tts';
import Timer from '../components/Timer';

const RunningRoutineScreen = ({route}) => {
  const states = [
    'notRunning',
    'midSet',
    'betweenSet',
    'betweenWorkouts',
    'startSet',
  ];

  const [routineState, setRoutineState] = React.useState('notRunning');

  const stateEq = str => {
    return str.localeCompare(routineState) === 0;
  };

  const nextSection = setTime => {
    // set time for next seciont of workout
    setTime({min: '00', sec: '50'});
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
          <Timer start restart={nextSection} min="00" sec="35" />
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
