// import React from 'react';
// import { SafeAreaView, Text, FlatList, Image, StyleSheet, View } from 'react-native';

// const pizzaItems = [
//     { id: '1', title: 'Pepperoni Pizza', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/pepperoni_pizza.jpeg') },
//     { id: '2', title: 'Vegetarian Pizza', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/vegetarian_pizza.jpeg') },
//     { id: '3', title: 'BBQ Chicken Pizza', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/bbq_chicken_pizza.jpeg') },
// ];

// const PizzaScreen = () => {
//     const renderItem = ({ item }) => (
//         <View style={styles.item}>
//             <Image source={item.image} style={styles.image} />
//             <Text style={styles.title}>{item.title}</Text>
//         </View>
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={pizzaItems}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//             />
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#fff',
//     },
//     item: {
//         flexDirection: 'row',
//         marginBottom: 20,
//         alignItems: 'center',
//     },
//     image: {
//         width: 80,
//         height: 80,
//         marginRight: 15,
//         borderRadius: 5,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default PizzaScreen;
import React from 'react';
import { SafeAreaView, Text, FlatList, Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';

const pizzaItems = [
    { id: '1', title: 'Pepperoni Pizza', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/pepperoni_pizza.jpeg'), price: 12.99 },
    { id: '2', title: 'Vegetarian Pizza', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/vegetarian_pizza.jpeg'), price: 10.99 },
    { id: '3', title: 'BBQ Chicken Pizza', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/bbq_chicken_pizza.jpeg'), price: 14.99 },
];

const PizzaScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Order', { item })}
        >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pizzaItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} // Display items in a grid with 2 columns
                columnWrapperStyle={styles.row} // Style for each row
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
    row: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    item: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#f8f8f8',
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: Dimensions.get('window').width / 2.5, // Adjust image size based on screen width
        height: Dimensions.get('window').width / 2.5, // Keep the image square
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default PizzaScreen;

