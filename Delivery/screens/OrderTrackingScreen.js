// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';

// const OrderTrackingScreen = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch orders from an API
//     axios.get('https://api.example.com/orders')
//       .then(response => setOrders(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const renderOrder = ({ item }) => (
//     <View style={styles.orderItem}>
//       <Text>Status: {item.status}</Text>
//       <Text>Date: {item.date}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Tracking</Text>
//       <FlatList
//         data={orders}
//         renderItem={renderOrder}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   orderItem: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
// });

// export default OrderTrackingScreen;
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const OrderTrackingScreen = ({ route }) => {
//     const { order } = route.params;

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Order Tracking</Text>
//             <Text style={styles.info}>Item: {order.item.title}</Text>
//             <Text style={styles.info}>Quantity: {order.quantity}</Text>
//             <Text style={styles.info}>Total Amount: GH₵{order.totalAmount.toFixed(2)}</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#fff',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     info: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
// });

// export default OrderTrackingScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const OrderTrackingScreen = ({ route }) => {
    const { orders } = route.params;

    // Set initial region to KNUST, Kumasi, Ghana
    const initialRegion = {
        latitude: 6.6746,
        longitude: -1.5714,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order Tracking</Text>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                {orders && orders.map((order, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: order.location.latitude,
                            longitude: order.location.longitude,
                        }}
                        title={`Order ${index + 1}`}
                        description={order.item.title}
                    />
                ))}
            </MapView>
            {orders && orders.map((order, index) => (
                <View key={index} style={styles.orderInfo}>
                    <Text style={styles.info}>Item: {order.item.title}</Text>
                    <Text style={styles.info}>Quantity: {order.quantity}</Text>
                    <Text style={styles.info}>Total Amount: GH₵{order.totalAmount.toFixed(2)}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    map: {
        width: '100%',
        height: 300,
        marginBottom: 20,
    },
    orderInfo: {
        marginBottom: 20,
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default OrderTrackingScreen;

