import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const CartScreen = ({ route }) => {
    console.log(route);

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cart</Text>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Text>{item.title}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                        <Text>Price: {item.price * item.quantity}Rs</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <Text style={styles.total}>Total: {totalPrice}Rs</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartItem: {
        marginBottom: 10,
    },
    total: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CartScreen;
