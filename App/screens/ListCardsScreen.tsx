import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import I18n from '../i18n/i18n';
import Omise from 'omise-react-native';
import OmiseConfig from '../config/omise.config'

Omise.config(OmiseConfig.publicKey, OmiseConfig.privateKey, '2017-11-12');

const getOmiseTest = async() => {
  const data = await Omise.createToken({
    card: {
        name: 'JOHN DOE',
        city: 'Bangkok',
        postal_code: 10320,
        number: '4242424242424242',
        expiration_month: 10,
        expiration_year: 2023,
        security_code: 123
    }
  });
  
  return data;
}

const ListCardsScreen = () => {
  const navigation = useNavigation();

  getOmiseTest().then(function(data) {
    console.log('data', JSON.stringify(data));
  }).catch(function(error) {console.error(error)});
  
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