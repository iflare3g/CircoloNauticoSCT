import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 60,
    color: 'blue',
    textShadowColor: 'grey',
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 2 },
  },
  wind: {
    fontSize: 30,
    color:'blue',
    textShadowColor: 'grey',
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 2 },
  },
  icon: {
    fontSize: 40,
    color: 'black'
  }
});
