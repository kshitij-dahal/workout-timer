import React from 'react';
import {View, Text} from 'react-native';

const Timer = ({restart, initialTime, isOn}) => {
  const [time, setTime] = React.useState(initialTime);
  const [on, setOn] = React.useState(true);

  React.useEffect(() => setTime(initialTime), [initialTime]);

  const runTimer = () => {
    if (on) {
      console.log('RUNTIMER IN TIMER');
      if (parseInt(time.sec) === 0) {
        if (parseInt(time.min) === 0) {
          clearInterval(runTimer);
          restart();
        } else {
          setTime({
            min:
              (parseInt(time.min) <= 10 ? '0' : '') + (parseInt(time.min) - 1),
            sec: '59',
          });
        }
      } else {
        setTime({
          min: time.min,
          sec: (parseInt(time.sec) <= 10 ? '0' : '') + (parseInt(time.sec) - 1),
        });
      }
    }
  };

  React.useEffect(() => {
    if (isOn) {
      setTimeout(runTimer, 1000);
    }
  }, [time, isOn]);

  return (
    <View>
      <Text>{time.min + ':' + time.sec}</Text>
    </View>
  );
};

export default Timer;
