import * as React from 'react';
import RootNavigator from './navigation/RootNavigator';
import Omise from 'omise-react-native';
import OmiseConfig from './config/omise.config';
import { RootSiblingParent } from 'react-native-root-siblings';

function App() {

  Omise.config(OmiseConfig.publicKey, OmiseConfig.privateKey, '2017-11-12');
  return (<RootSiblingParent><RootNavigator /></RootSiblingParent>);
}

export default App;