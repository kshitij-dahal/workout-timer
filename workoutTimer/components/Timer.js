import React from 'react';
import {View, Text} from 'react-native';

const Timer = ({restart, initialTime}) => {
  const [time, setTime] = React.useState(initialTime);

  React.useEffect(() => setTime(initialTime), [initialTime]);

  const runTimer = () => {
    console.log('RUNTIMER IN TIMER');
    if (parseInt(time.sec) === 0) {
      if (parseInt(time.min) === 0) {
        clearInterval(runTimer);
        setTimeout(restart, 1000);
      } else {
        setTime({
          min: (parseInt(time.min) <= 10 ? '0' : '') + (parseInt(time.min) - 1),
          sec: '59',
        });
      }
    } else {
      setTime({
        min: time.min,
        sec: (parseInt(time.sec) <= 10 ? '0' : '') + (parseInt(time.sec) - 1),
      });
    }
  };

  React.useEffect(() => setTimeout(runTimer, 1000), [time]);

  return (
    <View>
      <Text>{time.min + ':' + time.sec}</Text>
    </View>
  );
};

export default Timer;
