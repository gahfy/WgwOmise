import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListCardsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to AddCardScreen"
      onPress={() => navigation.navigate('AddCardScreen', {})}
    />
    </View>
  );
}

  export default ListCardsScreen;