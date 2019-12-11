import React, {Component} from 'react';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import PopularPage from './PopularPage';
// import TrendingPage from './TrendingPage';
// import FavoritePage from './FavoritePage';
// import MePage from './MePage';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from '../navigator/NavigationUtil'

import DynamicTabNavigator from '../navigator/DynamicTabNavigator'

export default class HomePage extends Component {
  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}
