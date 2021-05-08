import React from 'react';
import {List} from 'react-native-paper';
import {TextInput, Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  nonTimeInfoText: {
    flex: 2,
    justifyContent: 'center',
  },
  timeInfoText: {
    flex: 5,
    justifyContent: 'center',
  },
  minSecText: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Workout = ({data}) => {
  const [workoutInfo, setWorkoutInfo] = React.useState(data);

  React.useEffect(() => {
    setWorkoutInfo(data);
  }, [data]);

  return (
    <List.Accordion
      title={workoutInfo.name}
      style={{width: '95%', marginLeft: '5%'}}
      right={() => <View />}>
      {Object.keys(workoutInfo).map(key => {
        if (key.localeCompare('times') !== 0) {
          return (
            <View
              style={{
                marginLeft: '15%',
                flexDirection: 'row',
              }}>
              <View style={styles.nonTimeInfoText}>
                <Text>{key}</Text>
              </View>
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
        }
      })}
      {Object.keys(workoutInfo.times).map(timeInfo => {
        return (
          <View
            style={{
              marginLeft: '15%',
              flexDirection: 'row',
            }}>
            <View style={styles.timeInfoText}>
              <Text>{timeInfo}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TextInput
                onChangeText={text => {
                  let workoutInfoCopy = JSON.parse(JSON.stringify(workoutInfo));
                  workoutInfoCopy.times[timeInfo].min = text;
                  setWorkoutInfo(workoutInfoCopy);
                }}
                value={workoutInfo.times[timeInfo].min}
                placeholder={String(workoutInfo.times[timeInfo].min)}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.minSecText}>
              <Text>min</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TextInput
                onChangeText={text => {
                  let workoutInfoCopy = JSON.parse(JSON.stringify(workoutInfo));
                  workoutInfoCopy.times[timeInfo].sec = text;
                  setWorkoutInfo(workoutInfoCopy);
                }}
                value={workoutInfo.times[timeInfo].sec}
                placeholder={String(workoutInfo.times[timeInfo].sec)}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.minSecText}>
              <Text>sec</Text>
            </View>
          </View>
        );
      })}
    </List.Accordion>
  );
};

export default Workout;
