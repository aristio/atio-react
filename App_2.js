import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import ListItem, {Separator} from './src/ListItem';
// import Category from './src/Category';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={goods}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ListItem
              {...item}
              onSwipeFromLeft={() => alert('swiped from left!')}
              onRightPress={() => alert('pressed right!')}
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    );
  }
}

const goods = [
  {id: '0', text: 'Soap'},
  {id: '1', text: 'Shampoo'},
  {id: '2', text: 'Conditioner'},
  {id: '3', text: 'Toothpaste'},
  {id: '4', text: 'Toot Brus'},
];
