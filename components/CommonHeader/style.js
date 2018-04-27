import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  hamburgerIcon: {
    fontSize: 35,
    color: 'white'
  },
  title: {
    color:'white',
    fontSize: 22
  },
  logoutButton: {
    marginRight: -20
  },
  userProfileIcon: {
    color: 'white',
    fontSize: 28
  },
  header: {
   backgroundColor: 'blue',
   paddingTop: Constants.statusBarHeight,
   height: 54 + Constants.statusBarHeight,
 },
});

export default styles;
