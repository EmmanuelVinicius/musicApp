import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InitialMap from './../pages/initalMapPage';
import Search from './../pages/searchPage';

const Routes = createAppContainer(
  createStackNavigator({
    InitialMap,
    Search,
  },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    })
);

export default Routes;