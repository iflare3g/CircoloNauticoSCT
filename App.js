import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ClockScreen from './screens/ClockScreen/ClockScreen';
import AboutUsScreen from './screens/AboutUsScreen/AboutUsScreen';
import Sidebar from './components/Sidebar/Sidebar';
import { Container, Content, Body, Header, List, ListItem } from 'native-base';
import Expo from 'expo';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);
console.disableYellowBox = true;

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isReady: false
    }
  }
  async UNSAFE_componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <MyApp />
    );
  }
}

const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Orari: {
    screen: ClockScreen,
  },
  About: {
    screen: AboutUsScreen,
  },
},{
  initialRouteName: 'Home',
  contentComponent: props => <Sidebar { ...props } />,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
