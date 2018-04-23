import React from 'react';
import {
  Container,
  Content,
  Body,
  Header,
  List,
  ListItem,
  Left,
  Icon,
  Right,
  Button } from 'native-base';
import { Text, Image } from 'react-native';

const routes = [
  "Home",
  "About",
  "Orari",
  "Attivita' & Eventi",
  "Soci",
  "Chat",
  "Servizi",
  "Sedi"
];
const icons_for_list_items = {
  "Home": "md-home",
  "Orari": "ios-clock-outline",
  "Attivita' & Eventi": "md-calendar",
  "Soci": "ios-people-outline",
  "Chat": "ios-chatbubbles",
  "Servizi": "ios-cloud-outline",
  "Sedi": "ios-locate-outline",
  "About": "ios-information-circle-outline",
}

const Sidebar = (props) => (
  <Container>
    <Header style={{ backgroundColor: '#1a0dab', height:100 }}>
    <Left>
    <Icon  name="person"
           style={{ fontSize: 60, marginTop: 50, color:'white', marginBottom: 40 }}
    />
    </Left>
    <Body style={{ marginLeft: -10 }}>
      <Text
        style={{ margin: 10, marginTop: 40, color: 'white', fontWeight: 'bold'}}>
        Mario Rossi
      </Text>
      <Text style={{ margin: 10, marginBottom: 25, color: 'white', textDecorationLine: 'underline' }}>mariorossi@gmail.com</Text>
    </Body>
    <Right style={{ flex: 0 , flexDirection: 'row'}}>
        <Button
          iconLeft
          transparent
          primary
          style={{ alignItems: 'flex-start'}}
          onPress={() => console.log("logging out")}
        >
          <Icon name='power' style={{ color: 'white' }}/>
        </Button>
    </Right>
    </Header>
    <Content>
    <List
          dataArray={routes}
          renderRow={data => {
            return (
              <ListItem
                icon
                button
                onPress={() => props.navigation.navigate(data)}>
                <Left><Icon name={ icons_for_list_items[data.toString()]} style={{ color: '#1a0dab'}}/>
                </Left>
                <Body><Text style={{ fontSize: 18 }}>{data}</Text></Body>
              </ListItem>
            );
          }}
        />
    </Content>
  </Container>
);

export default Sidebar;
