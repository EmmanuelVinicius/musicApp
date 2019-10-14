import React, { Component } from "react";
import { Animated, StyleSheet, View, Image, Text } from "react-native";
import { Icon, Button } from "react-native-elements";
import styles from './styles'

const Images = [
  { uri: "https://images.reverb.com/image/upload/s--kowfE9WC--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1479145764/edez28ss7iay7anqv1iw.jpg" },
  { uri: "https://images.reverb.com/image/upload/s--I6hgS6zy--/f_auto,t_supersize/v1566933366/phgfda6whodnmkuyhtln.jpg" },
  { uri: "https://images.reverb.com/image/upload/s--vibcLrbb--/f_auto,t_supersize/v1557129594/l8x5qrcqecq7ylngbnh2.jpg" },
  { uri: "https://images.reverb.com/image/upload/s--BC9WM4FR--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1466705457/kbk4kaenfzt0mj3jlsee.jpg" }
];

export default class RolagemLateral extends Component {
  state = {
    markers: []
  }
  async componentDidMount() {
    const result = await [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817,
        },
        title: "Guitar Place",
        description: "This is the best guitar seller place in Portland",
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507,
        },
        title: "Bass Best Place",
        description: "This is the best bass seller place in Portland",
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034,
        },
        title: "Piano Best Place",
        description: "This is the best piano seller place in Portland",
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917,
        },
        title: "Sax Best Place",
        description: "This is the best sax seller place in Portland",
        image: Images[3],
      },
    ];
    this.setState({ markers: result })
  }

  render() {
    const { width, animation } = this.props;
    return (
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: animation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        style={styles.scrollView}
        contentContainerStyle={styles.endPadding}
      >
        {this.state.markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                {marker.description}
              </Text>
            </View>
          </View>
        ))}
        <View style={styles.iconCard}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Button
          icon={<Icon
              raised
              size={30}
              name='arrow-forward'
              type='material'
              color='#1a281f'
          onPress={() => this.props.navigation.navigate('Search')} />}

              
              type="clear"
              />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Visualizar todos</Text>
          </View>
        </View>

      </Animated.ScrollView>
    )
  }
}
