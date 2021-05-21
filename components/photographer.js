import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ViewPhotographer = props => (
    <TouchableOpacity style={styles.button}>
        <View>
            <Text style={styles.name}>{props.var.name}</Text>
            <Text>{props.var.address}</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.number}>{props.var.number}</Text>
            <Text>{"\n"}</Text>
            <Text>Starting from:</Text>
            <Text style={styles.price}>Rs. {props.var.minPrice}</Text>

            <View style={styles.rows}>
                <TouchableOpacity>
                    <Entypo name="star-outlined" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="heart-outlined" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
)

export default class PhotographerList extends Component {
    constructor(props) {
        super(props);

        this.state = { photographers: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/photographerModel')
            .then(response => {
                this.setState({ photographers: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    photographerList() {
        return this.state.photographers.map(currentphotographer => {
            return <ViewPhotographer var={currentphotographer} key={currentphotographer._id} />;
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.searchView}>
                        <TextInput
                            placeholder="Search Photographers..."
                            style={styles.search}
                        />
                        <TouchableOpacity style={styles.searchButton}>
                            <Text style={styles.searchText}>
                                <Ionicons name="search-outline" size={20} color="white" />
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View >
                        {this.photographerList()}
                    </View>
                </ScrollView>
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

    rows: {
        marginTop: 20,
        flexDirection: 'row',
        flex: 1,
    },

    button: {
        // alignItems: "left",
        width: "100%",
        height: 250,
        marginTop: 30,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    name: {
        fontSize: 30,
    },

    number: {
        fontSize: 20,
    },

    price: {
        fontSize: 30,
        fontWeight: "bold",
    },

    searchView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        // alignItems: "center",
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
        // alignItems: "center",
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
});



