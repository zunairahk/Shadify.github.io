import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';

export default class JoinAWedding extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.heading}>Join A Wedding</Text>
          <Text>{"\n"}</Text>
          <TextInput
            placeholder="Enter invite code here"
            style={styles.input}
          >
          </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 10,
    alignItems: "center"
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#cecdcd",
    width: "60%",
  },
})