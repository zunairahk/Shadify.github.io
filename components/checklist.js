import React, {useState, Component} from 'react';
import { Image, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },

  image: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 100,
    borderColor: "black",
    width: 50,
    height: 50,
  },

  row: {
    flexDirection: 'row',
    borderBottomColor: "#cecdcd",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  name: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15
  },

  logo: {
    paddingRight: 20,
  },
});

export default class Checklist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
          <Checkbox/>
       
      </View>
    )
  }
}