// need sth that returns a empty routine
export const getBlankWorkout = () => ({
  times: {
    'Set Duration': {min: '00', sec: '10'},
    'Rest Between Sets': {min: '00', sec: '30'},
    'Rest Between Workouts': {min: '02', sec: '00'},
  },
  name: 'Blank',
  reps: 1,
  sets: 3,
});
