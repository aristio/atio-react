import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Ini Home</Text>
        <Button
          onPress={() => this.props.navigation.navigate('List')}
          title="Go To List"
        />
      </View>
    );
  }
}
