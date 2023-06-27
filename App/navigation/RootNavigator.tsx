import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ListCardsNavigator from './ListCardsNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ListCardsNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;