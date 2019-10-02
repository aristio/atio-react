import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {Drawer} from './src/config/routes';
import {View, StyleSheet} from 'react-native';

const NavPage = createAppContainer(Drawer);

export default class APP extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavPage />
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
