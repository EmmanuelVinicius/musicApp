// import React, { Component } from "react";
// import { Icon } from 'react-native-elements'
// import {
//   StyleSheet,
//   Text,
//   View,
//   Animated,
//   Image,
//   Dimensions,
// } from "react-native";
// import MapView from "react-native-maps";
// import Search from "./pages/searchPage";
// import RolagemLateral from "./components/rolagemLateral";
// import Routes from './routes/routes';

// const Images = [
//   { uri: "https://images.reverb.com/image/upload/s--kowfE9WC--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1479145764/edez28ss7iay7anqv1iw.jpg" },
//   { uri: "https://images.reverb.com/image/upload/s--I6hgS6zy--/f_auto,t_supersize/v1566933366/phgfda6whodnmkuyhtln.jpg" },
//   { uri: "https://images.reverb.com/image/upload/s--vibcLrbb--/f_auto,t_supersize/v1557129594/l8x5qrcqecq7ylngbnh2.jpg" },
//   { uri: "https://images.reverb.com/image/upload/s--BC9WM4FR--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1466705457/kbk4kaenfzt0mj3jlsee.jpg" }
// ]

// const { width, height } = Dimensions.get("window");

// const CARD_HEIGHT = height / 2.5;
// const CARD_WIDTH = CARD_HEIGHT + 50;

// export default class App extends Component {
//   state = {
//     markers: [
//       {
//         coordinate: {
//           latitude: 45.524548,
//           longitude: -122.6749817,
//         },
//         title: "Guitar Place",
//         description: "This is the best guitar seller place in Portland",
//         image: Images[0],
//       },
//       {
//         coordinate: {
//           latitude: 45.524698,
//           longitude: -122.6655507,
//         },
//         title: "Bass Best Place",
//         description: "This is the best bass seller place in Portland",
//         image: Images[1],
//       },
//       {
//         coordinate: {
//           latitude: 45.5230786,
//           longitude: -122.6701034,
//         },
//         title: "Piano Best Place",
//         description: "This is the best piano seller place in Portland",
//         image: Images[2],
//       },
//       {
//         coordinate: {
//           latitude: 45.521016,
//           longitude: -122.6561917,
//         },
//         title: "Sax Best Place",
//         description: "This is the best sax seller place in Portland",
//         image: Images[3],
//       },
//     ],
//     region: {
//       latitude: 45.52220671242907,
//       longitude: -122.6653281029795,
//       latitudeDelta: 0.04864195044303443,
//       longitudeDelta: 0.040142817690068,
//     },
//   };

//   componentWillMount() {
//     this.index = 0;
//     this.animation = new Animated.Value(0);
//   }
//   componentDidMount() {
//     // We should detect when scrolling has stopped then animate
//     // We should just debounce the event listener here
//     this.animation.addListener(({ value }) => {
//       let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
//       if (index >= this.state.markers.length) {
//         index = this.state.markers.length - 1;
//       }
//       if (index <= 0) {
//         index = 0;
//       }

//       clearTimeout(this.regionTimeout);
//       this.regionTimeout = setTimeout(() => {
//         if (this.index !== index) {
//           this.index = index;
//           const { coordinate } = this.state.markers[index];
//           this.map.animateToRegion(
//             {
//               ...coordinate,
//               latitudeDelta: this.state.region.latitudeDelta,
//               longitudeDelta: this.state.region.longitudeDelta,
//             },
//             350
//           );
//         }
//       }, 10);
//     });
//   }

//   render() {
//     const interpolations = this.state.markers.map((marker, index) => {
//       const inputRange = [
//         (index - 1) * CARD_WIDTH,
//         index * CARD_WIDTH,
//         ((index + 1) * CARD_WIDTH),
//       ];
//       const scale = this.animation.interpolate({
//         inputRange,
//         outputRange: [1, 2.5, 1],
//         extrapolate: "clamp",
//       });
//       const opacity = this.animation.interpolate({
//         inputRange,
//         outputRange: [0.35, 1, 0.35],
//         extrapolate: "clamp",
//       });
//       return { scale, opacity };
//     });

//     return (
//       <View style={styles.container}>
//         <Icon
//           containerStyle={styles.icon}
//           raised
//           size={30}
//           name='search'
//           type='material'
//           color='#1a281f'
//           onPress={() => <Search />} />
//         <MapView
//           ref={map => this.map = map}
//           initialRegion={this.state.region}
//           style={styles.container}
//         >
//           {this.state.markers.map((marker, index) => {
//             const scaleStyle = {
//               transform: [
//                 {
//                   scale: interpolations[index].scale,
//                 },
//               ],
//             };
//             const opacityStyle = {
//               opacity: interpolations[index].opacity,
//             };
//             return (
//               <MapView.Marker key={index} coordinate={marker.coordinate}>
//                 <Animated.View style={[styles.markerWrap, opacityStyle]}>
//                   <Animated.View style={[styles.ring, scaleStyle]} />
//                   <View style={styles.marker} />
//                 </Animated.View>
//               </MapView.Marker>
//             );
//           })}
//         </MapView>
//         <RolagemLateral
//           width={CARD_WIDTH}
//           animation={this.animation}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   icon: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   markerWrap: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   marker: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "rgba(130,4,150, 0.9)",
//   },
//   ring: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: "rgba(130,4,150, 0.3)",
//     position: "absolute",
//     borderWidth: 1,
//     borderColor: "rgba(130,4,150, 0.5)",
//   },
// });

import React from 'react';
import Routes from './routes/routes';

export default function App() {
  return <Routes />
}
