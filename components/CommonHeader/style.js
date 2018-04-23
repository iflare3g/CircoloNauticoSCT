import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  hamburgerIcon: {
    fontSize: 35,
    color: 'white'
  },
  title: {
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
   paddingTop: Constants.statusBarHeight,
   height: 54 + Constants.statusBarHeight,
 },
});

export default styles;
