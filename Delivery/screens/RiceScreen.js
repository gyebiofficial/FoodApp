// import React from 'react';
import { SafeAreaView, Text, FlatList, Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';

const riceItems = [
    { id: '1', title: 'Jollof Rice', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/jollof.jpeg'), price: 8.99 },
    { id: '2', title: 'Fried Rice', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/fried_rice.jpeg'), price: 7.99 },
    { id: '3', title: 'Angwamo', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/Angwamo.jpeg'), price: 6.99 },
];

const RiceScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate('Order', { item })}  // Navigate to Order screen with the selected item
        >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);

        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }

        return data;
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={formatData(riceItems, 2)}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}  // Display items in a grid with 2 columns
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#f8f8f8',
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: Dimensions.get('window').width / 2.5,
        height: Dimensions.get('window').width / 2.5,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default RiceScreen;
