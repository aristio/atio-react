import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {TabNavigationBottom} from './src/config/routes';

const NavPageTabNavigationBottom = createAppContainer(TabNavigationBottom);

export default class APP extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavPageTabNavigationBottom />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
