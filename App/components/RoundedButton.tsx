import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';

const RoundedButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={ styles.submitButtonContainer } >
      <Text style={ styles.submitButtonText }>{ props.title }</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton;