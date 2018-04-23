import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  TouchableHighlight,
} from 'react-native';
import { Tile } from 'react-native-elements';
import Gallery from 'react-native-image-gallery';
import styles from './style'

class GalleryCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  openViewer(){
    this.setState({
      modalVisible: true,
    });
  }

  render() {
    return (
        // {this.props.urls.map((url, index) => {
        //   return (
        //     <TouchableOpacity
        //       key={index}
        //       activeOpacity={1}
        //       onPress={this.openViewer.bind(this, index)}>
        //       <Image source={{ uri: url }} style={styles.img} />
        //     </TouchableOpacity>
        //   );
        // })}
        <Tile
          imageSrc={{ uri: 'https://circolonauticofrisullo.files.wordpress.com/2015/09/circolo-nautico-11.jpg' }}
          title="Sfoglia la galleria"
          titleStyle={{ fontSize: 22 }}
          icon={{ name: 'play-circle', type: 'font-awesome', color: 'white', size: 34 }} // optional
          contentContainerStyle={{ height: 50 }}
          onPress={ this.openViewer.bind(this)}
          >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}>
          <View style={{ paddingTop:20 ,backgroundColor: 'black'}}>
            <TouchableHighlight
              onPress={() => {
                this.setState({ modalVisible: false });
              }}>
              <Text style={{ color: 'white' ,fontWeight: 'bold', fontSize: 20, alignSelf: 'flex-end', margin: 20 }}>X</Text>
            </TouchableHighlight>
          </View>
          <Gallery
                style={{ flex: 1, backgroundColor: 'black' }}
                images={[
                  { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                  { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                  { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                  { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } },
                ]}
              />
        </Modal>
      </Tile>
    );
  }
}

export default GalleryCarousel;
