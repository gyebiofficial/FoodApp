// import React from 'react';
// import { SafeAreaView, Text, FlatList, Image, StyleSheet, View } from 'react-native';

// const sushiItems = [
//     { id: '1', title: 'Salmon Nigiri', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/Salmon_Nigiri.jpeg') },
//     { id: '2', title: 'Tuna Sashimi', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/tuna_Sashimi.jpeg') },
//     { id: '3', title: 'California Roll', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/California_Sushi.jpeg') },
// ];

// const SushiScreen = () => {
//     const renderItem = ({ item }) => (
//         <View style={styles.item}>
//             <Image source={item.image} style={styles.image} />
//             <Text style={styles.title}>{item.title}</Text>
//         </View>
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={sushiItems}
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
//         width: 200,
//         height: 250,
//         marginRight: 15,
//         borderRadius: 5,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default SushiScreen;
import React from 'react';
import { SafeAreaView, Text, FlatList, Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';

// Import Dimensions API
const { width } = Dimensions.get('window');

const sushiItems = [
    { id: '1', title: 'Salmon Nigiri', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/Salmon_Nigiri.jpeg'), price: 8.99 },
    { id: '2', title: 'Tuna Sashimi', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/tuna_Sashimi.jpeg'), price: 12.99 },
    { id: '3', title: 'California Roll', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/California_Sushi.jpeg'), price: 7.99 },
];

const SushiScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Order', { item })}>
            <View style={styles.item}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={sushiItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },
    image: {
        width: width / 2.5,
        height: width / 2.5,
        marginBottom: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    price: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginTop: 5,
    },
});

export default SushiScreen;



