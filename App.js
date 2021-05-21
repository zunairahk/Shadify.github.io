import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as Google from 'expo-google-app-auth';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';

import HomeScreen from './components/home.js';
import GuestListList from './components/guestlist.js';
import CreateGuest from './components/createguest.js';
import VendorScreen from './components/vendor.js';
import BridalDressList from './components/bridaldress.js';
import CatererList from './components/caterer.js';
import MakeupList from './components/makeup.js';
import PhotographerList from './components/photographer.js';
import VenueList from './components/venue.js';
import ChatScreen from './components/chat.js';
import UserScreen from './components/user.js';
import NotificationScreen from './components/notification.js';
import JoinAWedding from './components/joinawedding.js';
import CreateAWedding from './components/createawedding.js';
import Favourites from './components/favourites.js';
import VenueDetails from './components/venuedetails.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
    }
  }

  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        // iosClientId: IOS_CLIENT_ID,
        androidClientId: "438415341439-jh5gti51ltc9cmln7tosq6s78mhgbmt0.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.setState({
          signedIn: true,
        })
      }
      else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  render() {
    return (
      // <View>
      //   {this.state.signedIn ? (
      //     <PublicView />
      //   ) : (
      //     <PrivateView signIn={this.signIn} />
      //   )}
      // </View>
      <PublicView />
    )
  }
}

const PublicView = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: { backgroundColor: "#980007" }
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return <Ionicons name="home" size={32} color="white" />;
            }
            else if (route.name === 'Vendors') {
              return <Entypo name="shop" size={32} color="white" />
            }
            else if (route.name === 'Guest List') {
              return <FontAwesome name="list" size={32} color="white" />
            }
            else if (route.name === 'Chat') {
              return <Ionicons name="chatbox" size={32} color="white" />
            }
            else if (route.name === 'User') {
              return <Entypo name="user" size={32} color="white" />
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreens} />
        <Tab.Screen name="Vendors" component={VendorStackScreens} />
        <Tab.Screen name="Guest List" component={GuestListStackScreens} />
        <Tab.Screen name="Chat" component={ChatStackScreens} />
        <Tab.Screen name="User" component={UserStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const PrivateView = props => {
  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    marginTop: 50,

  },
})

function HomeStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="BridalDress"
        component={BridalDressList}
        options={{
          headerStyle: {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Venue"
        component={VenueList}
        options={{
          headerStyle: {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Vendors"
        component={VendorScreen}
        options={{
          headerStyle: {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  )
}

function VendorStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Vendors"
        component={VendorScreen}
        options={{
          headerStyle: {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="BridalDress"
        component={BridalDressList}
        options={{
          headerStyle: {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Caterer"
        component={CatererList}
        options={{
          headerStyle: {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Makeup"
        component={MakeupList}
        options={{
          headerStyle: {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Photographer"
        component={PhotographerList}
        options={{
          headerStyle: {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Venue"
        component={VenueList}
        options={{
          headerStyle: {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  )
}

function GuestListStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Guest List"
        component={GuestListList}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="CreateGuest"
        component={CreateGuest}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  )
}

function ChatStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  )
}

function NotificationStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  )
}

function UserStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="JoinAWedding"
        component={JoinAWedding}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="CreateAWedding"
        component={CreateAWedding}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerStyle:
          {
            backgroundColor: "#980007",
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  )
}