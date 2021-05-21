import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ViewGuestList = props => (
    <TouchableOpacity style={styles.button}>
        <View>
            <Text style={styles.name}>{props.var.name}</Text>
            <Text>{props.var.number}</Text>
            <Text>{props.var.address}</Text>
        </View>
    </TouchableOpacity>
)

export default class GuestListList extends Component {
    constructor(props) {
        super(props);

        this.state = { guestlists: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/guestlistModel')
            .then(response => {
                this.setState({ guestlists: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    guestListList() {
        return this.state.guestlists.map(currentguestlist => {
            return <ViewGuestList var={currentguestlist} key={currentguestlist._id} />;
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.searchView}>
                        <TextInput
                            placeholder="Search Guests"
                            style={styles.search}
                        />
                        <TouchableOpacity style={styles.searchButton}>
                            <Text style={styles.searchText}>
                                <Ionicons name="search-outline" size={20} color="white" />
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View >
                        {this.guestListList()}
                    </View>
                </ScrollView>
                <View style={styles.screenEnd}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('CreateGuest')}
                    >
                        <Entypo name="circle-with-plus" size={50} color="#980007" />
                    </TouchableOpacity>

                </View>
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

    button: {
        // alignItems: "left",
        width: "100%",
        height: 80,
        marginTop: 30,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    name: {
        fontSize: 20,
    },

    searchView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    search: {
        height: 40,
        width: "80%",
        borderColor: "transparent",
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#dddddd",
    },

    searchButton: {
        alignItems: "center",
        backgroundColor: "#980007",
        width: "15%",
        height: 40,
        justifyContent: "center",
    },

    searchText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },

    screenEnd: {
        flex: 1,
        justifyContent: "flex-end",
    },
});



