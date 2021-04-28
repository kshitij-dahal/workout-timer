import React from 'react';
import {List} from 'react-native-paper';
import {TextInput, Text, View} from 'react-native';

const Workout = ({data}) => {
  const [workoutInfo, setWorkoutInfo] = React.useState(data);

  return (
    <List.Accordion
      title={workoutInfo.name}
      style={{width: '95%', left: '5%'}}
      left={props => <List.Icon {...props} icon="folder" />}>
      {Object.keys(workoutInfo).map(key => {
        return (
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{flex: 1}}>{key}</Text>
            <TextInput
              onChangeText={text => {
                let workoutInfoCopy = JSON.parse(JSON.stringify(workoutInfo));
                workoutInfoCopy[key] = text;
                setWorkoutInfo(workoutInfoCopy);
              }}
              style={{flex: 5}}
              value={workoutInfo[key]}
              placeholder={String(workoutInfo[key])}
              keyboardType="numeric"
            />
          </View>
        );
      })}
    </List.Accordion>
  );
};

export default Workout;
