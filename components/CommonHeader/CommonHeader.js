import React from 'react';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title } from 'native-base';
import styles from './style';


const CommonHeader = (props) => (
  <Header style={ styles.header }>
    <Left>
      <Icon name="ios-menu" onPress={ () =>
            props.navigation.navigate('DrawerOpen')}
            style={ styles.hamburgerIcon }/>
    </Left>
    <Body>
      <Title style={ styles.title }>{ props.title }</Title>
    </Body>
    <Right>
      <Button
        style={ styles.logoutButton }
        iconLeft
        transparent
        primary
        onPress={() => console.log("logging out")}>
        <Icon name='user-circle-o'
              type="FontAwesome"
              style={ styles.userProfileIcon } />
        </Button>
    </Right>
  </Header>
);

export default CommonHeader;
