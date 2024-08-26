// import React from 'react';
import { SafeAreaView, Text, FlatList, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

const fufuItems = [
    { id: '1', title: 'Light Soup with Fufu', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/light_soup_fufu.jpeg') ,price: 12.99 },
    { id: '2', title: 'Palm Nut Soup with Fufu', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/palmnut_soup_fufu.jpeg'), price: 10.99 },
    { id: '3', title: 'Groundnut Soup with Fufu', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/groundnut_soup_fufu.jpeg'), price: 14.99 },
];

const FufuScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('Order', { item })}  // Navigate to Order screen with the selected item
        >
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={fufuItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
});

export default FufuScreen;


