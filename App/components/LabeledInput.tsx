import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/styles';
import colors from '../styles/colors';
import VisaLogo from '../assets/visa_logo.svg';
import MastercardLogo from '../assets/mastercard_logo.svg';
import JcbLogo from '../assets/jcb_logo.svg';
import NumericUtils from '../utils/NumericUtils';

const CardIcons = (props) => {
    return props.isCardNumber ? (
      <View style={styles.inputCardLogosContainer}>
        <VisaLogo style={styles.inputCardLogo} width={25} height={8} />
        <MastercardLogo style={styles.inputCardLogo} width={21} height={14} />
        <JcbLogo style={styles.inputCardLogo} width={19} height={15} />
      </View>
    ) : (<View />)
}

const LabeledInput = (props) => {
    var rawInput = ''
    const [formattedInput, setFormattedInput] = React.useState("");
    const [selection, setSelection] = React.useState({
        start: 0,
        end: 0
    })
    const [borderStyle, setBorderStyle] = React.useState(styles.inputDefaultBorder)
    const [errorText, setErrorText] = React.useState('')

    const setRawInput = (newInput: string) : void => {
        if(props.onRawValueChanged) {
          rawInput = newInput;
          props.onRawValueChanged(newInput);
        }
    }

    const setError = (error: string|undefined) : void => {
      if(error != errorText) {
        if(error) {
          setBorderStyle(styles.inputErrorBorder);
          setErrorText(error);
        } else if(!error) {
          setBorderStyle(styles.inputDefaultBorder);
          setErrorText('');
        }
      }
    }

    const handleInput = e => {
      const currentValue = e.nativeEvent.text;
      if(props.extractRaw) {
        setRawInput(props.extractRaw(currentValue));
      } else {
        setRawInput(currentValue);
      }

      if(props.format) {
        setFormattedInput(props.format(currentValue));
      } else {
        setFormattedInput(currentValue);
      }

      if(props.errorOnType) {
        const error = props.errorOnType(rawInput)
        setError(error);
      } else {
        setError(undefined)
      }
    };

    if(props.errorStatus) {
      setError(props.errorStatus);
    }

    // Disable selection
    const handleSelectionChange = e => {
      if(props.removeSelection) {
        setSelection({
          start: formattedInput.length,
          end: formattedInput.length
        })
      } else {
        setSelection(e.nativeEvent.selection);
      }
    }

    return (<View style={props.style}>
      <Text style={styles.inputLabel} >{ props.label ?? "" }</Text>
      <View style={[styles.inputComponent, borderStyle]} >
          <TextInput
            style={styles.input}
            onChange = { handleInput }
            placeholder={ props.placeHolder }
            keyboardType={ props.keyboardType }
            defaultValue={ formattedInput }
            inputMode={ props.inputMode }
            selection={ selection }
            maxLength= { props.maxLength }
            onSelectionChange={handleSelectionChange}
            placeholderTextColor={colors.inputPlaceHolder} />
          <CardIcons isCardNumber={props.isCardNumber} />
      </View>
      <Text style={styles.inputError} >{errorText}</Text>
    </View>)
}

export default LabeledInput;