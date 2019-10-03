import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: '#4a4a4a',
    fontSize: 15,
  },
  seperator: {
    flex: 1,
    height: 1,
    backgroundColor: '#e4e4e4',
    marginLeft: 10,
  },
  buttonText: {
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    height: 60,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export const Separator = () => <View style={styles.seperator} />;

const ListItem = ({text, onSwipeFromLeft, onRightPress}) => (
  //   <Swipeable>
  //     <View style={styles.container}>
  //       <Text style={styles.text}>{text}</Text>
  //     </View>
  //   </Swipeable>
  <Button
    style={styles.button}
    onPress={() => {
      alert('You tapped the button!');
    }}
    title={text}
  />
);

export default ListItem;
