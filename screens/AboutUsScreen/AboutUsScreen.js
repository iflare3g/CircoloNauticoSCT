import React, { Component } from 'react';
import {
  Container,
  ListItem,
  Content,
  Card,
  CardItem,
  Button,
  Left,
  Right,
  Body,
  Icon } from 'native-base';
import {
  Text,
  View,
  Image
} from 'react-native';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import GalleryCarousel from '../../components/Gallery/Gallery';
import openMap from 'react-native-open-maps';
import styles from './style';
//import Lightbox from 'react-native-lightbox'; // 0.6.0

{/* const activeProps = {
//    resizeMode: 'contain',
//    flex: 1,
//    width: null
// }; */}
const mapImageURI = 'https://i2.wp.com/zultimatesprings.com/wp-content/uploads/2017/10/google-map-background-1900x1170.png?ssl=1'
class AboutUsScreen extends Component {
  _goToSalento() {
    openMap({
      latitude: 40.0338832,
      longitude: 18.4521999,
      name:"Circolo nautico Santa Cesarea Terme"});
  }
  render(){
    return(
      <Container>
        <CommonHeader title="Chi siamo" navigation={this.props.navigation}/>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Icon
                  name="map-marker-outline"
                  type="MaterialCommunityIcons"
                  style={ styles.icons }/>
                <Body>
                  <Text style={ styles.headerTitle }>Dove siamo</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: mapImageURI  }}
                       style={ styles.mapCardImage }/>
                <Text style={ styles.cardBodyText }>Santa Cesarea Terme via Archi s.n 73020 (LE)</Text>
                <Button iconRight transparent onPress= {this._goToSalento}>
                  <Text style={ styles.buttonText }>Apri mappa</Text>
                  <Icon name='arrow-forward'/>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Icon name="ios-paper-outline" style={ styles.icons }/>
                <Body>
                  <Text style={ styles.headerTitle }>Chi siamo</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={ styles.cardBodyText }>Lorem ipsum ecc ecc</Text>
                <ListItem icon style={{ marginLeft:0 }}>
                  <Left>
                    <Icon name="ios-phone-portrait" style={{ color:'#1a0dab'}}/>
                  </Left>
                  <Right>
                    <Text style={ styles.cardBodyText }>3337829111</Text>
                  </Right>
                </ListItem>
                <ListItem icon style={{ marginLeft:0}}>
                  <Left>
                    <Icon name="ios-mail-outline" style={ styles.icons }/>
                  </Left>
                  <Right>
                    <Text style={ styles.cardBodyText }>circolo@gmail.com</Text>
                  </Right>
                </ListItem>
              </Body>
            </CardItem>
          </Card>
            {/*<CardItem body>
             /* <FlatList
              horizontal
              data={album}
              renderItem={({ item: rowData }) => {
                return (
                { <Lightbox activeProps={activeProps} navigator={this.props.navigator}>
                //   <Image source={{ uri:rowData.uri }} style={{ height: 150 , width: 150,margin: 10 }}/>
                // </Lightbox>}
              )}}
              keyExtractor={(item, index) => index.toString()}
               />
               </CardItem>*/}
          <GalleryCarousel />
        </Content>
      </Container>
    );
  }
}

export default AboutUsScreen;
