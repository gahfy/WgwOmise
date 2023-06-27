import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListCardsScreen from '../screens/ListCardsScreen';
import AddCardScreen from '../screens/AddCardScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="ListCardsScreen" component={ListCardsScreen} />
      <HomeStack.Screen name="AddCardScreen" component={AddCardScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;