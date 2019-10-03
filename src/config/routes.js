import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

// ------------------ IMPORT COMPONENT ------------------
// import Home from '../components/Home';
// import List from '../components/List';
import News from '../components/News';
import Portofolio from '../components/Portofolio';

// export const Drawer = createDrawerNavigator({
//   Home: Home,
//   List: List,
// });

// export const TabNavigationTop = createMaterialTopTabNavigator({
//   Home: News,
//   List: List,
// });

// export const TabNavigationBottom = createBottomTabNavigator({
//   News: News,
//   Portofolio: Portofolio,
// });

export const TabNavigationBottom = createMaterialBottomTabNavigator({
  News: {
    screen: News,
    navigationOptions: {
      tabBarLabel: 'Home',
      focused: true,
      tabBarIcon: ({tintColor}) => (
        <Icon
          style={[{color: tintColor}]}
          size={25}
          name={'book'}
          color="#FFFFFF"
        />
      ),
    },
  },
  Portofolio: {
    screen: Portofolio,
    navigationOptions: {
      tabBarLabel: 'Portofolio',
      focused: true,
      tabBarIcon: ({tintColor}) => (
        <Icon
          style={[{color: tintColor}]}
          size={25}
          name={'home'}
          color="#FFFFFF"
        />
      ),
    },
  },
});
