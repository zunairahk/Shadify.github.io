// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import App from '../App.js';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: false,
//     }
//   }

//     abc(){
//       // this.setState = {
//       //   loggedIn: true,
//       // }
//     }

//     // this.onChangeName = this.onChangeName.bind(this);
//     // this.onChangeNumber = this.onChangeNumber.bind(this);
//     // this.onChangeAddress = this.onChangeAddress.bind(this);
//     // this.onSubmit = this.onSubmit.bind(this);

//     // this.state = {
//     //   name: "",
//     //   number: "",
//     //   address: ""
//     // }
//   // }

//   //   onChangeName(e) {
//   //     this.setState({
//   //       name: e.target.value
//   //     })
//   //   }

//   //   onChangeNumber(e) {
//   //     this.setState({
//   //       number: e.target.value
//   //     })
//   //   }

//   //   onChangeAddress(e) {
//   //     this.setState({
//   //       address: e.target.value
//   //     })
//   //   }

//   //   onSubmit(e) {
//   //     e.preventDefault();

//   //     const login = {
//   //       name: this.state.name,
//   //       number: this.state.number,
//   //       address: this.state.address
//   //     }

//   //     console.log(login);

//   //     axios.post('http://localhost:3000/api/guestlistModel', createguest)
//   //       .then(res => console.log(res.data));

//   //     window.location = '/';
//   //   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           placeholder="Username"
//           style={styles.input}
//         />
//         <Text>{"\n"}</Text>
//         <TextInput
//           secureTextEntry
//           placeholder="Password"
//           style={styles.input}
//         />
//         <Text>{"\n"}</Text>

//         <TouchableOpacity
//           // onPress={() => this.props.navigation.navigate('App', {abc:loggedIn})}
//           onPress={() => this.props.navigation.navigate('Home')}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <Text>{"\n"}</Text>
//         <Text>{"\n"}</Text>
//         <Text>{"\n"}</Text>
//         <Text>{"\n"}</Text>
//         <Text>{"\n"}</Text>
//         <Text>{"\n"}</Text>
//         <Text>{"\n"}</Text>
//         <Text>{"\n"}</Text>

//         <TouchableOpacity
//           onPress={() => this.props.navigation.navigate('Signup')}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>Don't have an account? Signup</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 200,
//     paddingBottom: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#980007",
//     flex: 1
//   },

//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: "90%",
//     height: 50,
//     borderRadius: 20,
//     backgroundColor: 'rgba(52, 52, 52, 0.8)'
//   },

//   buttonText: {
//     color: "white",
//   },

//   input: {
//     height: 50,
//     width: "90%",
//     borderColor: "transparent",
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     backgroundColor: "#dddddd",
//   },
// })

import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Google from 'expo-google-app-auth'
import { IOS_CLIENT_ID, AND_CLIENT_ID } from 'react-native-dotenv';


export default function Login () {

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        // iosClientId: IOS_CLIENT_ID,
        androidClientId: 438415341439-jh5gti51ltc9cmln7tosq6s78mhgbmt0.apps.googleusercontent.com,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  const signInWithGoogle = () => {
    signInWithGoogleAsync()
    }

    return (
      <View style={styles.container}>
        <Button onPress={() => signInWithGoogle()} title="Sign in with Google" />
      </View>
    )
}