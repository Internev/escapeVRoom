import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere,
  PointLight,
  Model
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
            backgroundColor: '#78b3ee',
            color: 'rgb(89, 0, 255)',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          escApe
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
          <Model
            source={{
              obj: asset('Tree.obj'),
            }}
            style={{
              color:'rgba(218, 254, 0, 1)',
              transform: [{translate: [3, -2, -5]},
                          {rotateY: 90},
            ],
            }}
            lit
            />
        <Model
          source={{
            obj: asset('note.obj'),
          }}
          style={{
            color:'rgba(122, 231, 255, 1)',
            transform: [{translate: [3, 0, 15]},
                        {rotateY: 90},
          ],
          }}
          wireframe
          />
          <Model
            source={{
              obj: asset('note.obj'),
            }}
            style={{
              color:'rgba(255, 206, 122, 1)',
              transform: [{translate: [-3, 0, 15]},
                          {rotateY: 90},
            ],
            }}
            wireframe
            />
            <Model
              source={{
                obj: asset('note.obj'),
              }}
              style={{
                color:'rgba(193, 122, 255, 1)',
                transform: [{translate: [-9, 0, 15]},
                            {rotateY: 90},
              ],
              }}
              wireframe
              />
      </View>
    );
  }
};

AppRegistry.registerComponent('escapeVRoom', () => escapeVRoom);
