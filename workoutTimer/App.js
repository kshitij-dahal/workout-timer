import React from 'react';
import RoutinesScreen from './screens/RoutinesScreen';
import RunningRoutineScreen from './screens/RunningRoutineScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Routines" component={RoutinesScreen} />
        <Stack.Screen name="RunningRoutine" component={RunningRoutineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
