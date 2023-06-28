import * as React from 'react';
import { View } from 'react-native';
import styles from '../styles/styles'
import LabeledInput from '../components/LabeledInput';
import I18n from '../i18n/i18n';
import NumericUtils from '../utils/NumericUtils';
import OmiseLogo from '../assets/omise.svg';
import MasterCardSecureCode from '../assets/mastercard-securedcode.svg';
import VerifiedByVisa from '../assets/verified-by-visa.svg';
import RoundedButton from '../components/RoundedButton'
import AddCardController from '../controller/AddCardController';
import AddCardState from '../states/AddCardState';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';

const AddCardScreen = () => {
  const navigation = useNavigation();
  const [creditCardNumber, setCreditCardNumber] = React.useState("");
  const [creditCardName, setCreditCardName] = React.useState("");
  const [creditCardExpiry, setCreditCardExpiry] = React.useState("");
  const [creditCardCvv, setCreditCardCvv] = React.useState("");
  const [errors, setErrors] = React.useState<AddCardState>({
    hasError: false,
    creditCardNumberError: undefined,
    creditCardNameError: undefined,
    creditCardExpiryError: undefined,
    creditCardCvvError: undefined
  });

    return (
      <View style={styles.screen} >
        <View style={styles.formContainer}>
          <LabeledInput
            isCardNumber={ true }
            format={ NumericUtils.formatCreditCardNumber }
            extractRaw={ (value) => NumericUtils.extractDigits(value, 16) }
            errorOnType={ NumericUtils.checkCreditCardNumber }
            maxLength={ 19 }
            errorStatus={errors.creditCardNumberError}
            removeSelection={ true }
            placeHolder="0000 0000 0000 0000"
            keyboardType='numeric'
            inputMode='numeric'
            onRawValueChanged={ (rawValue) => {setErrors({...errors, creditCardNumberError: undefined}); setCreditCardNumber(rawValue)}}
            label={ I18n.t('credit_card_number_label')} />
          <LabeledInput
            onRawValueChanged={ (rawValue) => {setErrors({...errors, creditCardNameError: undefined}); setCreditCardName(rawValue)}}
            errorStatus={errors.creditCardNameError}
            style={ styles.labeledInput }
            placeHolder={ I18n.t('credit_card_name_placeholder')}
            label={ I18n.t('credit_card_name_label')} />
          <View style={ styles.inputCardCvvDateContainer }>
              <View style={ [styles.inputCardCvvDate, styles.inputCardDate ]}>
                <LabeledInput
                    style={ styles.labeledInput }
                    errorStatus={errors.creditCardExpiryError}
                    format={NumericUtils.formatDate}
                    extractRaw={NumericUtils.formatDate}
                    errorOnType={ NumericUtils.checkExpiryDate }
                    maxLength={5}
                    removeSelection={true}
                    keyboardType='numeric'
                    inputMode='numeric'
                    onRawValueChanged={ (rawValue) => {setErrors({...errors, creditCardExpiryError: undefined}); setCreditCardExpiry(rawValue)}}
                    placeHolder={ I18n.t('credit_card_expiry_placeholder')}
                    label={ I18n.t('credit_card_expiry_label')} />
              </View>
              <View style={ [styles.inputCardCvvDate, styles.inputCardCvv ]}>
                <LabeledInput
                    format={ (value) => NumericUtils.extractDigits(value, 3) }
                    extractRaw={ (value) => NumericUtils.extractDigits(value, 3) }
                    errorStatus={errors.creditCardCvvError}
                    maxLength={3}
                    removeSelection={true}
                    keyboardType='numeric'
                    inputMode='numeric'
                    onRawValueChanged={ (rawValue) => {setErrors({...errors, creditCardCvvError: undefined}); setCreditCardCvv(rawValue)}}
                    style={ styles.labeledInput }
                    label={ I18n.t('credit_card_cvv_label')} />
              </View>
          </View>
          <View style={ styles.cardsLogoContainer} >
            <VerifiedByVisa style={ styles.cardLogo} width={ 46 } height={ 20 } />
            <MasterCardSecureCode style={ styles.cardLogo} width={ 55 } height={ 20 } />
            <OmiseLogo style={ styles.cardLogo} width={ 71 } height={ 20 } />
          </View>
        </View>
        <RoundedButton
          title={ I18n.t('credit_card_submit_button')}
          onPress={ () => {
            console.log("onPress called");
            const errorStatus = AddCardController.submitFormLocally(creditCardNumber, creditCardName, creditCardExpiry, creditCardCvv)
            setErrors(errorStatus);
            if(!errorStatus.hasError) {
              AddCardController.getToken(creditCardNumber, creditCardName, creditCardExpiry, creditCardCvv).then(() => {
                navigation.goBack();
              }).catch(() => {
                Toast.show(I18n.t('credit_card_api_error'), {
                  duration: Toast.durations.SHORT,
                });
              })
            }
          } } />
      </View>
    );
}

export default AddCardScreen;