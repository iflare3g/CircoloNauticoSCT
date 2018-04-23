import React, { Component } from 'react';
import {
  View,
  Text,
  Stylesheet
} from 'react-native';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import TimelineComp from '../../components/Timeline/Timeline';
import { Container, Content } from 'native-base';
import Timeline from 'react-native-timeline-listview';
import styles from './style';

class ClockScreen extends Component{
  constructor(){
    super()
    this.data = [
        {time: '07:00 - 00.00', title: 'Circolo'},
        {time: '08:00 - 18:00', title: 'Piscina'},
        {time: '07:00 - 00.00', title: 'Bar'},
        {time: '07:00 - 00:00', title: 'Ristorante'},
        {time: '08:00 - 18:00', title: 'Segreteria'}
      ]
  }
  render(){
    return(
      <Container>
        <CommonHeader title="Orari" navigation={ this.props.navigation }/>
        <Content contentContainerStyle={{
          flex: 1,
          padding:20,
          paddingTop: 65,
        }}>
        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight:'bold' }}>Circolo Nautico ...</Text>
        <TimelineComp data={ this.data }/>
        </Content>
      </Container>
    )
  }
}

export default ClockScreen;
