import * as React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import I18n from '../i18n/i18n';
import Logo from '../assets/add_sign.svg';
import { useNavigation } from '@react-navigation/native';

const RightPlusIcon = (props) => {

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(I18n.t(props.screenTitle), {})}>
      <Logo width={23} height={23} />
    </TouchableWithoutFeedback>
  )
}

export default RightPlusIcon;