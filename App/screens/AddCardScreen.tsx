import * as React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AddCardScreen = () => {
    const route = useRoute();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        </View>
    );
}

export default AddCardScreen;