import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
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
        <Button title="Kategori Budaya" />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
