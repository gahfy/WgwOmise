import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ListCardsNavigator from './ListCardsNavigator';
import AppTheme from '../styles/theme';

const RootNavigator = () => {
  return (
    <NavigationContainer theme={ AppTheme }>
      <ListCardsNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;