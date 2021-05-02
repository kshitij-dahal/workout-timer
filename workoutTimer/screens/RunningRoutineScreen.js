import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Tts from 'react-native-tts';
import Timer from '../components/Timer';

const RunningRoutineScreen = ({route}) => {
  const states = ['notRunning', 'set', 'betweenSets', 'betweenWorkouts'];
  const {workouts} = route.params;

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'FINISH_ROUTINE':
          return {
            ...prevState,
            time: {min: '00', sec: '00'},
            routineState: 'notRunning',
            currSet: 1,
          };
        case 'START_BREAK_BETWEEN_WORKOUTS':
          return {
            ...prevState,
            time:
              workouts[prevState.workoutIndex].times['Rest Between Workouts'],
            routineState: 'betweenWorkouts',
          };
        case 'START_BREAK_BETWEEN_SETS':
          console.log('oompa');
          return {
            ...prevState,
            time: workouts[prevState.workoutIndex].times['Rest Between Sets'],
            routineState: 'betweenSets',
          };
        case 'START_NEW_WORKOUT':
          return {
            ...prevState,
            time: workouts[prevState.workoutIndex].times['Set Duration'],
            workoutIndex: prevState.workoutIndex + 1,
            currSet: 1,
            routineState: 'set',
          };
        case 'START_NEW_SET':
          return {
            ...prevState,
            time: workouts[prevState.workoutIndex].times['Set Duration'],
            currSet: prevState.currSet + 1,
            routineState: 'set',
          };
        case 'START_ROUTINE':
          return {
            ...prevState,
            time: workouts[0].times['Set Duration'],
            routineState: 'set',
            currSet: 1,
          };
      }
    },
    {
      routineState: 'notRunning',
      workoutIndex: 0,
      currSet: 1,
      time: {min: '00', sec: '00'},
      setTimerTime: null,
    },
  );

  const getCurrWorkout = () => route.params.workouts[state.workoutIndex];

  const stateEq = str => {
    return str.localeCompare(state.routineState) === 0;
  };

  const nextSection = () => {
    console.log('IN NEXT SECTION' + state.routineState);
    // set time for next section of workout
    if (stateEq('set')) {
      if (state.currSet < getCurrWorkout().sets) {
        console.log('here AAA');
        dispatch({type: 'START_BREAK_BETWEEN_SETS'});
      } else {
        if (state.workoutIndex < workouts.length - 1) {
          dispatch({type: 'START_BREAK_BETWEEN_WORKOUTS'});
        } else {
          dispatch({type: 'FINISH_ROUTINE'});
        }
      }
    } else if (stateEq('betweenSets')) {
      dispatch({type: 'START_NEW_SET'});
    } else if (stateEq('betweenWorkouts')) {
      dispatch({type: 'START_NEW_WORKOUT'});
    } else if (stateEq('notRunning')) {
      dispatch({type: 'START_ROUTINE'});
    }
  };

  const voiceRoutineState = () => {
    const workoutName = workouts[state.workoutIndex].name;
    if (stateEq('set')) {
      Tts.speak(
        workoutName +
          ', ' +
          'Set ' +
          state.currSet +
          ' and ' +
          workouts[state.workoutIndex].reps +
          ' reps ' +
          ' start',
      );
    } else if (stateEq('betweenSets')) {
      Tts.speak(workoutName + ' Break - Set ' + (state.currSet + 1) + ' Next');
    } else if (stateEq('betweenWorkouts')) {
      Tts.speak(
        'Break - Next Workout ' + workouts[state.workoutIndex + 1].name,
      );
    }
    return '';
  };

  React.useEffect(voiceRoutineState, [state.routineState]);

  const displayRoutineState = () => {
    console.log('here we go' + state.routineState);
    const workoutName = workouts[state.workoutIndex].name;
    if (stateEq('set')) {
      return workoutName + ' - Set ' + state.currSet;
    } else if (stateEq('betweenSets')) {
      return workoutName + ' Break - Next Set ' + (state.currSet + 1);
    } else if (stateEq('betweenWorkouts')) {
      return 'Break - Next Workout ' + workouts[state.workoutIndex + 1].name;
    }
    return '';
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
            nextSection();
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
        <Text
          style={{
            position: 'absolute',
            top: 0,
            fontFamily: 'Cochin',
            fontSize: 20,
            marginTop: 40,
          }}>
          {displayRoutineState()}
        </Text>
        <TouchableOpacity
          onPress={() => {}}
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
          <Timer start initialTime={state.time} restart={nextSection} />
        </TouchableOpacity>
      </View>
    );
  }
};

export default RunningRoutineScreen;
