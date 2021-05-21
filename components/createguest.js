import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';

export default class CreateGuest extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      number: "",
      address: ""
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const createguest = {
      name: this.state.name,
      number: this.state.number,
      address: this.state.address
    }

    console.log(createguest);

    axios.post('http://localhost:3000/api/guestlistModel', createguest)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add a new guest:</Text>
        <Text>{"\n"}</Text>
        <Text>Enter name:</Text>
        <TextInput
          value={this.state.name}
          onChange={this.onChangeName}
          style={styles.input}
        />
        <Text>{"\n"}</Text>
        <Text>Enter number:</Text>
        <TextInput
          value={this.state.number}
          onChange={this.onChangeNumber}
          style={styles.input}
        />
        <Text>{"\n"}</Text>
        <Text>Enter address:</Text>
        <TextInput
          value={this.state.address}
          onChange={this.onChangeAddress}
          style={styles.input}
        />
        <Text>{"\n"}</Text>

        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Save</Text>
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
  },

  input: {
    borderWidth: 2,
    borderColor: "black",
    width: "60%"
  },

  button: {
    // alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: 30,
    backgroundColor: "#980007",
  },

  buttonText: {
    color: "white",
  },
})