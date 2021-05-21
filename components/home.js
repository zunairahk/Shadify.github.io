import React, { useState, Component } from 'react';
import { Image, View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 5,
  },

  view1: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: "#cecdcd",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  view2: {
    borderWidth: 1,
    borderColor: "#cecdcd",
    paddingHorizontal: 20,
    marginBottom: 5,
    width: "90%",
  },

  heading: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left"
  },

  review: {
    height: 100,
    width: "90%",
    borderColor: "transparent",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#dddddd",
    marginBottom: 10,
  },

  button: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 100,
    borderColor: "black",
    width: 90,
    height: 90,
    // alignItems: "center",
    justifyContent: "center"
  },

  pink: {
    backgroundColor: "#ee6aa7"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  image: {
    width: "80%",
    height: 150,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "black",
    marginBottom: 10,
  },
  imageCircle: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderColor: "black",
    marginBottom: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerRight: (
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('User')}
    >
      <Entypo name="user" size={32} color="black" />
    </TouchableOpacity>
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.view1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Venue')}
              style={[styles.button, styles.pink]}
            >
              <View>

                <Text style={styles.buttonText}>Venue</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('BridalDress')}
              style={[styles.button, styles.pink]}
            >
              <View>
                <Text style={styles.buttonText}>Bridal</Text>
                <Text style={styles.buttonText}>Dress</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Vendors')}
              style={[styles.button, styles.pink]}
            >
              <View>
                <Text style={styles.buttonText}>+3</Text>
                <Text style={styles.buttonText}>more</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.view1}>
            <Text style={styles.heading}>Wedding Ideas</Text>
            <Text>{"\n"}</Text>
            <Image source={require('../assets/images/venue.jpg')} style={styles.image}></Image>
            <Image source={require('../assets/images/caterer.jpg')} style={styles.image}></Image>
            <Image source={require('../assets/images/makeup.jpg')} style={styles.image}></Image>
            <Image source={require('../assets/images/photographer.jpg')} style={styles.image}></Image>
          </View>

          <View style={styles.view1}>
            <Text style={styles.heading}>Reviews</Text>
            <Text>{"\n"}</Text>
            <TextInput
              placeholder="Write a review..."
              style={styles.review}
            />

            <View style={styles.view2}>
              <Text style={styles.heading}>A</Text>
              <Text>This is a very hepful app </Text>
            </View>

            <View style={styles.view2}>
              <Text style={styles.heading}>B</Text>
              <Text>This is a very hepful app </Text>
            </View>

            <View style={styles.view2}>
              <Text style={styles.heading}>C</Text>
              <Text>This is a very hepful app </Text>
            </View>

            <View style={styles.view2}>
              <Text style={styles.heading}>D</Text>
              <Text>This is a very hepful app </Text>
            </View>
          </View>


        </ScrollView>
      </View>
    )
  }
}