// import React, { useState } from 'react';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const OrderScreen = ({ route, navigation }) => {
    const { item } = route.params;

    // Set default price if it's undefined
    const price = item.price || 0;

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const totalAmount = price * quantity;

    const handleOrder = () => {
        // Logic for placing an order
        alert(`Order placed for ${quantity} x ${item.title} - Total: GH₵${totalAmount.toFixed(2)}`);
        // Navigate to Order Tracking Screen
        navigation.navigate('OrderTracking', { order: { item, quantity, totalAmount } });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>Delicious {item.title}, freshly prepared just for you!</Text>
                <Text style={styles.price}>Price: GH₵{price.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityText}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.totalAmount}>Total: GH₵{totalAmount.toFixed(2)}</Text>
                <Button title="Place Order" onPress={handleOrder} color="#ff6347" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    quantityButton: {
        backgroundColor: '#ff6347',
        borderRadius: 5,
        padding: 10,
    },
    quantityText: {
        color: '#fff',
        fontSize: 18,
    },
    quantity: {
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default OrderScreen;
