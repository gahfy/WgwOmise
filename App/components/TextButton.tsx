import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';

const TextButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} >
      <Text style={ styles.textButtonText }>{ props.title }</Text>
    </TouchableOpacity>
  )
}

export default TextButton;