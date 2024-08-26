import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from 'react-native-image-slider-box';

const pics = [
    require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/pic1.jpeg'),
    require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/pic2.jpeg'),
    require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/pic3.jpeg'),
];

const HomeScreen = ({ navigation }) => {
    const featuredItems = [
        { id: '1', title: 'Pizza Margherita', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/pizza.jpeg') },
        { id: '2', title: 'Classic Burger', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/Classic Burger.jpeg')},
        { id: '3', title: 'Sushi Platter', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/Sushi.jpeg')},
        { id: '4', title: 'Chocolate Cake', image: require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/Chocolate_cake.jpeg')},
    ];

    const renderFeaturedItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Order', { item: { ...item, price: item.price || 10 } })}>
            <View style={styles.featuredItem}>
                <Image source={item.image} style={styles.featuredImage} />
                <Text style={styles.featuredTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    
                    <Image source={require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/logo1.jpg')} style={styles.image} />
                    <Text style={styles.headerText}>Smart Start Delivery</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Categories</Text>
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={[styles.category, styles.sushi]} onPress={() => navigation.navigate('Sushi')}>
                            <Image 
                                source={require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/Sushi.jpeg')}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Sushi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.category, styles.fufu]} onPress={() => navigation.navigate('Fufu')}>
                            <Image 
                                source={require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/fufu.jpeg')}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Fufu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.category, styles.pizza]} onPress={() => navigation.navigate('Pizza')}>
                            <Image 
                                source={require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/pizza_icon.jpeg')}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Pizza</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.category, styles.rice]} onPress={() => navigation.navigate('Rice')}>
                            <Image 
                                source={require('C:/Users/gyebi/Desktop/FoodApp/Delivery/assets/rice.jpeg')}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Rice</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Featured</Text>
                    <FlatList 
                        data={featuredItems}
                        renderItem={renderFeaturedItem}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Promotions</Text>
                    <View style={styles.promotion}><Text style={styles.promotionText}>50% off on your first order!</Text></View>
                    <View style={styles.promotion}><Text style={styles.promotionText}>Free delivery for orders over GH₵30</Text></View>
                </View>
                <View style={styles.container}>
                    <Text style={{ textAlign: 'center' }}>TIPS</Text>
                    <SliderBox 
                        images={pics} 
                        sliderBoxHeight={400} 
                        autoplay={true} 
                        dotColor='green'
                        ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}  
                        circleLoop
                        resizeMethod={'resize'} 
                        resizeMode={'cover'} 
                        autoplayInterval={3000} 
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#FF8C00',
        padding: 20,
        alignItems: 'center',
        flexDirection:'row'
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        padding:20,
        marginTop:10
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
    },
    section: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '22%',
    },
    categoryImage: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    categoryText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    pizza: {
        backgroundColor: '#ff4500',
    },
    fufu: {
        backgroundColor: '#ffa500',
    },
    sushi: {
        backgroundColor: '#32cd32',
    },
    rice: {
        backgroundColor: '#ff69b4',
    },
    promotion: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        borderLeftWidth: 5,
        borderLeftColor: '#ff6347',
    },
    promotionText: {
        color: '#ff6347',
        fontWeight: 'bold',
    },
    featuredItem: {
        marginRight: 15,
        alignItems: 'center',
    },
    featuredImage: {
        width: 180,
        height: 250,
        borderRadius: 5,
    },
    featuredTitle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    image: {
        width: 80,
        height: 80,
        marginTop: 20,
      },
});

export default HomeScreen;
