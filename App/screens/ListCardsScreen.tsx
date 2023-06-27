import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import I18n from '../i18n/i18n';

const ListCardsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to AddCardScreen"
      onPress={() => navigation.navigate(I18n.t('add_card_title'), {})}
    />
    </View>
  );
}

  export default ListCardsScreen;