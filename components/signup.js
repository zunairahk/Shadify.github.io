import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userName: "",
      email: "",
      password: ""
    }
  }

  onChangeUserName(e) {
    this.setState({
      userName: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const signup = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    }

    console.log(signup);

    axios.post('http://localhost:3000/api/signupModel', signup)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.userName}
          onChange={this.onChangeUserName}
          placeholder="Username"
          style={styles.input}
        />
        <Text>{"\n"}</Text>

        <TextInput
          value={this.state.email}
          onChange={this.onChangeEmail}
          placeholder="Email"
          style={styles.input}
        />
        <Text>{"\n"}</Text>

        <TextInput
          secureTextEntry
          value={this.state.password}
          onChange={this.onChangePassword}
          placeholder="Password"
          style={styles.input}
        />
        <Text>{"\n"}</Text>

        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 10,
    flex: 1
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#980007",
  },

  buttonText: {
    color: "white",
  },

  input: {
    height: 50,
    width: "90%",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#dddddd",
  },
})