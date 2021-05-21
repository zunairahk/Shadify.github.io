import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';

export default class CreateAWedding extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Create A New Wedding</Text>
        <Text>{"\n"}</Text>
        <TextInput
        placeholder="Enter Wedding Name"
          style={styles.input}
        />
        <Text>{"\n"}</Text>
        <TextInput
          placeholder="Enter Event Date"
          style={styles.input}
        />
        <Text>{"\n"}</Text>

        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#cecdcd",
    width: "60%"
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: 30,
    backgroundColor: "#980007",
  },

  buttonText: {
    color: "white",
  },
})