import React from 'react';
import {List} from 'react-native-paper';
import {TextInput} from 'react-native';

const Workout = ({data}) => {
  const [workoutInfo, setWorkoutInfo] = React.useState(data);

  return (
    <List.Accordion
      title={data.name}
      style={{width: '95%', left: '5%'}}
      left={props => <List.Icon {...props} icon="folder" />}>
      {Object.keys(data).map(key => (
        <TextInput
          onChangeText={text => {
            let workoutInfoCopy = JSON.parse(JSON.stringify(workoutInfo));
            workoutInfoCopy[key] = text;
            setWorkoutInfo(workoutInfoCopy);
          }}
          value={data[key]}
          placeholder={String(data[key])}
          keyboardType="numeric"
        />
      ))}
    </List.Accordion>
  );
};

export default Workout;
