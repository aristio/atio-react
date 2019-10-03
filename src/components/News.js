import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

export default class News extends Component {
  render() {
    return (
      <View style={style.viewbackground}>
        <Text style={style.titleText}>DAROSI MANUSIA AJAIB</Text>
        <Image
          style={style.imageStyle}
          source={require('../../assets/img/darosy.jpeg')}
        />
        <Text style={style.baseText}>
          <Text style={style.colorBlue}>Darosy Syaiful Imam </Text>
          adalah manusia ajaib pemakan segalanya. Dari yang nampak dan yang
          tidak nampak alias makhluk HALUS.
        </Text>

        <Text style={style.baseText}>
          tidak hanya itu dengan tampang yang menyeramkan iya mempunyai julukan
          <Text style={style.colorBlue}> MR. G__. </Text>
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Portofolio')}
          title="Go To Portofolio"
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  viewbackground: {
    backgroundColor: '#f4def4',
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15,
  },
  baseText: {
    fontSize: 15,
    padding: 15,
  },
  colorBlue: {
    color: '#2600ff',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
});
