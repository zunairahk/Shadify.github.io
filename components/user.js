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

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.row}>
          <Image source={require('../assets/images/venue.jpg')} style={styles.image}></Image>
            <Text style={styles.name}>User Name</Text>
          </View>

<TouchableOpacity style={styles.row}>
          <Ionicons name="share-outline" size={24} color="black" style={styles.logo} />
            <Text>Invite Link</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.row}
          onPress={() => this.props.navigation.navigate('CreateAWedding')}
          >
          <Ionicons name="md-create-outline" size={24} color="black" style={styles.logo}  />
            <Text>Create A Wedding</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.row}
            onPress={() => this.props.navigation.navigate('JoinAWedding')}
            >
          <Feather name="user-plus" size={24} color="black" style={styles.logo}  />
            <Text>Join A Wedding</Text>
            </TouchableOpacity>

          <TouchableOpacity 
          style={styles.row}
          onPress={() => this.props.navigation.navigate('NotificationScreen')}
          >
          <Entypo name="notification" size={24} color="black" style={styles.logo} />
            <Text>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity 
          style={styles.row}
          onPress={() => this.props.navigation.navigate('Favourites')}
          >
          <Entypo name="notification" size={24} color="black" style={styles.logo} />
            <Text>Favourites</Text>
            </TouchableOpacity>

          <TouchableOpacity style={styles.row}>
          <AntDesign name="logout" size={24} color="black" style={styles.logo} />
            <Text>Logout</Text>
            </TouchableOpacity>
       
      </View>
    )
  }
}