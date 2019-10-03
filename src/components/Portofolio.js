import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';

export default class Portofolio extends Component {
  render() {
    return (
      <View style={styles.appBackgound}>
        <View>
          <Image
            style={styles.appImage}
            source={require('../../assets/img/aristio.jpg')}
          />
          <Text style={styles.textName}>ARISTIO RIZKI PRATAMA PUTRA</Text>
          <Text style={styles.textName}>DIVISI IT SOLUTION</Text>

          <Text style={styles.textAlamat}>
            Jl. Keang Risin Rt. 007/01 Pisangan Ciputat Timur, Tangerang Selatan
            - Banten
          </Text>
          <Text style={styles.textHeading}>INFO</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBackgound: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#383838',
  },
  appImage: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  textName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  textAlamat: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    padding: 10,
  },
  textHeading: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
    padding: 10,
    fontFamily: 'Arial',
  },
});
