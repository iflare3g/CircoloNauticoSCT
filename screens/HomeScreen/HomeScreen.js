import React, { Component } from 'react';
import {
  Text,
  Keyboard,
  Alert,
  View
} from 'react-native';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import WeatherInfo from '../../components/Weather/Weather';
import { Container, Content, Thumbnail, Spinner } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import CurrentDate from '../../components/CurrentDate/CurrentDate';
import styles from './style';

class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      weatherData : [],
      isLoading: true
    };
  }

  componentDidMount(){
    Keyboard.dismiss();
    let openWeatherUrl =
      "http://api.openweathermap.org/data/2.5/weather?q=Rome,it&APPID=b5fa716f150a7f0e1336b164874ffe01&units=metric"
    return fetch(openWeatherUrl)
      .then((response) => response.json())
      .then(( responseJson ) => {
        const weatherInfo = this.mapOpenWeatherData(responseJson);
        this.setState({ weatherData: weatherInfo, isLoading: false });
      })
      .catch((error) => {
        Alert.alert(error.toString());
      });
    }

  mapOpenWeatherData(responseJson){
    if(responseJson){
        return {
          "temperature": parseInt(responseJson.main.temp),
          "wind_speed": parseInt(responseJson.wind.speed) * 3.60,
        }
    }
  }

  render(){
    return(
      <Container style={{ flex: 1 }}>
        <CommonHeader title="Home" navigation={this.props.navigation} />
          <Grid style={ styles.grid }>
            <Row size={3} style={{ paddingTop: '10%'}}>
              <View style={{ flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Thumbnail
                  source={require("../../components/Weather/assets/img/rose.png")}
                  style={{ height: 120, width: 120 }}
                  />
              </View>
            </Row>
            <Row size={3} style={ styles.currentDateRow }>
              <CurrentDate/>
            </Row>
            { this.state.isLoading ? <Spinner color='blue'/> :
              <Row size={3}>
                <WeatherInfo weatherInfo={ this.state.weatherData }/>
              </Row>
            }
          </Grid>
      </Container>
    );
  }
}

export default HomeScreen;
