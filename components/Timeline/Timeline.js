import React from 'react';
import { View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import styles from './style';

const TimelineComp = (props) => (
  <View>
    <Timeline
      style={ styles.list }
      data={ props.data }
      circleSize={ 20 }
      circleColor='rgb(45,156,219)'
      lineColor='rgb(45,156,219)'
      timeContainerStyle={ styles.timeContainerStyle }
      timeStyle={ styles.timeStyle }
      descriptionStyle={ styles.descriptionStyle }
      options={ styles.options }
      innerCircle={ 'dot' }
    />
  </View>
);

export default TimelineComp;
