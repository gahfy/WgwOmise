import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListCardsScreen from '../screens/ListCardsScreen';
import AddCardScreen from '../screens/AddCardScreen';
import I18n from '../i18n/i18n';
import RightPlusIcon from '../components/RightPlusIcon';

const ListCardsStack = createNativeStackNavigator();
ListCardsStack

const ListCardsNavigator = () => {
  return (
    <ListCardsStack.Navigator screenOptions={{ headerBackTitleVisible: false, headerTintColor: 'black' }}>
      <ListCardsStack.Screen options={{ headerRight: () => (<RightPlusIcon screenTitle={ 'add_card_title' } />) }} name={I18n.t('cards_title')}  component={ListCardsScreen} />
      <ListCardsStack.Screen options={{ headerTitle: '' }} name={I18n.t('add_card_title')} component={AddCardScreen} />
    </ListCardsStack.Navigator>
  );
};

export default ListCardsNavigator;