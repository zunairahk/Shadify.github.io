import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';

const VendorScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Venue')}
                        style={styles.button}
                    >
                        <Image source={require('../assets/images/venue.jpg')} style={styles.image}></Image>
                        <View style={styles.view}>
                            <Text style={styles.buttonText}>VENUE</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Caterer')}
                        style={styles.button}
                    >
                        <Image source={require('../assets/images/caterer.jpg')} style={styles.image}></Image>
                        <View style={styles.view}>
                            <Text style={styles.buttonText}>CATERER</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Makeup')}
                        style={styles.button}
                    >
                        <Image source={require('../assets/images/makeup.jpg')} style={styles.image}></Image>
                        <View style={styles.view}>
                            <Text style={styles.buttonText}>MAKEUP</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('BridalDress')}
                        style={styles.button}
                    >
                        <Image source={require('../assets/images/bridaldress.jpg')} style={styles.image}></Image>
                        <View style={styles.view}>
                            <Text style={styles.buttonText}>BRIDAL DRESS</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Photographer')}
                        style={styles.button}
                    >
                        <Image source={require('../assets/images/photographer.jpg')} style={styles.image}></Image>
                        <View style={styles.view}>
                            <Text style={styles.buttonText}>PHOTOGRAPHER</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 10,
    },

    button: {
        alignItems: "center",
        width: "100%",
        height: 150,
        marginTop: 30,
        justifyContent: "center",
        borderRadius: 10,
    },

    view: {
        position: 'absolute',
        backgroundColor: 'transparent',
    },

    buttonText: {
        color: "black",
        fontSize: 30,
        fontWeight: 'bold',
    },

    image: {
        width: "100%",
        height: 150,
        opacity: 0.6,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "black",
    },
});

export default VendorScreen;