import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import styles from './style';

class WeatherInfo extends Component {
  render(){
    const weatherData = this.props.weatherInfo
      return (
        <View style={ styles.container }>
          <Icon name="weather-windy-variant" type="MaterialCommunityIcons" style={ styles.icon }/>
          <Text style={ styles.temp }>{ weatherData.temperature } °C </Text>
          <Text style={ styles.wind }>Vento: { weatherData.wind_speed } Km/h</Text>
        </View>
      );
  }
}

export default WeatherInfo;
