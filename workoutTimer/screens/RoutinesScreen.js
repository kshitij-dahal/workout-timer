import React from 'react';
import Routine from '../components/Routine';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';

const RoutinesScreen = ({navigation}) => {
  const defaultTimes = {
    times: {
      'Set Duration': {min: '00', sec: '10'},
      'Rest Between Sets': {min: '00', sec: '30'},
      'Rest Between Workouts': {min: '02', sec: '00'},
    },
  };

  const defaultRoutines = [
    {
      name: 'Upper Body',
      workouts: [
        //{...defaultTimes, name: 'Push-ups', reps: 12, sets: 3},
        //{...defaultTimes, name: 'Military Press', reps: 10, sets: 3},
        //{...defaultTimes, name: 'Barbell Bent Over Row', reps: 10, sets: 3},
        {
          ...defaultTimes,
          name: 'Lying Dumbbell Triceps Extension',
          reps: 6,
          sets: 2,
        },
        //{...defaultTimes, name: 'Dumbbell Curls', reps: 8, sets: 3},
      ],
    },
    {
      name: 'Abs',
      workouts: [
        {...defaultTimes, name: 'Plank', reps: 1, sets: 3},
        {...defaultTimes, name: 'Side Plank', reps: 1, sets: 3},
        {...defaultTimes, name: 'Reverse Crunch', reps: 1, sets: 3},
        {...defaultTimes, name: 'Bicycle Crunch', reps: 1, sets: 3},
      ],
    },
  ];

  const getInitialExpandedRoutines = () => {
    let initial = {};
    defaultRoutines.forEach(routine => (initial[routine.name] = 'false'));
    return initial;
  };

  const [expandedRoutines, setExpandedRoutines] = React.useState(
    getInitialExpandedRoutines(),
  );
  const [routineFetched, setRoutineFetched] = React.useState(false);
  const [routines, setRoutines] = React.useState(defaultRoutines);

  const fetchRoutines = async () => {
    if (!routineFetched) {
      setRoutineFetched(true);
      try {
        const fetched = await AsyncStorage.getItem('routines');
        console.log('HERE WE ARE');
        console.log(fetched);
        console.log('NO MORE');
        if (fetched !== null) {
          setRoutines(JSON.parse(fetched));
        }
      } catch (e) {
        alert('Failed to fetch the data from storage');
      }
    }
  };

  React.useEffect(() => {
    fetchRoutines();
  }, []);

  React.useEffect(() => {
    console.log('what is happen');
    console.log(routines);
  }, [routines]);

  const setExpandedRoutine = (routineName, value) => {
    let copy = JSON.parse(JSON.stringify(expandedRoutines));
    copy[routineName] = value;
    setExpandedRoutines(copy);
  };

  React.useEffect(() => console.log(expandedRoutines), [expandedRoutines]);

  const displayStartButton = routineName => {
    if (!expandedRoutines[routineName]) {
      return (
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            title="Go"
            onPress={() => navigation.navigate('RunningRoutine', routines[0])}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'deepskyblue',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Go
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <View />;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {routines.map(routine => (
          <Swipeable renderLeftActions={() => displayStartButton(routine.name)}>
            <Routine
              data={{routine: routine}}
              setExpandedRoutine={setExpandedRoutine}
              setRoutines={setRoutines}
            />
          </Swipeable>
        ))}
      </ScrollView>
      <View>
        <Button
          title="Add"
          style={{flex: 1}}
          onPress={() =>
            AsyncStorage.setItem('routines', JSON.stringify(routines))
          }
        />
        <Button
          style={{flex: 1}}
          title="Update"
          onPress={() =>
            AsyncStorage.setItem('routines', JSON.stringify(routines))
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default RoutinesScreen;
