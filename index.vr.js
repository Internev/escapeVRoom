import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere,
  PointLight,
} from 'react-vr';

export default class escapeVRoom extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <PointLight
          intensity={1}
          style={{
            transform: [{translate: [0, 700, 700]}]
          }}
          />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
        <Sphere
          style={{
            color:'hotpink',
            transform: [{translate: [-1, 0, -3]}],
          }}
          lit
          widthSegments={20}
          heightSegments={20}
          />
      </View>
    );
  }
};

AppRegistry.registerComponent('escapeVRoom', () => escapeVRoom);
