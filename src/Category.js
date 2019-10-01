import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';
const axios = require('axios');

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategori: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://mhs.rey1024.com/apibudaya/getListCategory.php')
      .then(res => {
        const kategori = res.data;
        this.setState({kategori});
      });
  }
  keyExtractor = (item, index) => index.toString();
  renderItem = ({item}) => (
    <ListItem
      title={item.nama}
      leftAvatar={{
        source: {
          uri: 'http://wadaya.rey1024.com/upload/kategori/' + item.gambar,
        },
      }}
      bottomDivider
      chevron
    />
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtHeader}> Kategori Budaya </Text>
        </View>
        <FlatList
          data={this.state.kategori}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
