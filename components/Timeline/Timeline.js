import React from 'react';
import { View } from 'react-native';
import Timeline from 'react-native-timeline-listview';

const TimelineComp = (props) => (
  <Timeline
     style={styles.list}
     data={props.data}
     circleSize={20}
     circleColor='#1a0dab'
     lineColor='#1a0dab'
     timeContainerStyle={{minWidth:52}}
     timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13, marginBottom: 80}}
     descriptionStyle={{color:'gray'}}
     options={{
       style:{paddingTop:60}
     }}
     innerCircle={'dot'}
     detailContainerStyle={{ backgroundColor: '#d9d9d9', borderRadius: 13}}
     titleStyle={{ fontSize: 18, textAlign: 'center'}}
     columnFormat='single-column-right'
     />
);

export default TimelineComp;
