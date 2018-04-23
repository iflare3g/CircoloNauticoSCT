import React, {Component} from 'react';
import moment from 'moment';
import localization from 'moment/locale/it';
import { Icon } from 'native-base';
import { Text, View } from 'react-native';
import styles from './styles';

class CurrentDate extends Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Icon name="calendar-today" type="MaterialCommunityIcons" style={{ fontSize: 40 }} />
        <Text style={ styles.date }>
          { moment().locale("it", localization).format('dddd DD MMMM YYYY')}
        </Text>
      </View>
    );
  }
}

export default CurrentDate;
