import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import VisaLogo from '../assets/visa_logo.svg';
import MasterCardLogo from '../assets/mastercard_logo.svg';
import JCBLogo from '../assets/jcb_logo.svg';
import CreditCardMask from '../assets/credit-card-mask.svg';
import Card from '../models/Card';
import styles from '../styles/styles';
import I18n from '../i18n/i18n';

const Logo = (props) => {
    return props.type == "Visa" ?
      (<VisaLogo width={ 68 } height={ 22 } />) :
      (props.type == "MasterCard" ?
        <MasterCardLogo width={ 51 } height={ 36 } /> :
        <JCBLogo width={ 47 } height={ 36 } />
      );
}

const CreditCard = (props) => {
    const card: Card = props.card ?? {
        lastDigits: "????",
        name: "????",
        expiryDate: "??/??",
        type: "Visa"
    }

    return (<TouchableOpacity onPress={() => { props.onPress(props.card) }}><View style={ styles.creditCardContainer }>
        <View style={styles.cardLogoContainer}>
            <Logo type={ card.type } />
        </View>
        <View style={styles.cardMaskContainer }>
          <CreditCardMask style={ styles.cardMask} />
          <CreditCardMask style={ styles.cardMask} />
          <CreditCardMask style={ styles.cardMask} />
          <Text style={styles.cardLastDigits}>{card.lastDigits}</Text>
        </View>
        <View style={styles.cardInfoContainer}>
            <View>
                <Text style={styles.cardInfoLabel}>{I18n.t('card_name_label')}</Text>
                <Text style={styles.cardInfoData}>{ card.name }</Text>
            </View>
            <View>
                <Text style={styles.cardInfoLabel}>{I18n.t('card_expires_label')}</Text>
                <Text style={styles.cardInfoData}>{ card.expiryDate }</Text>
            </View>
          </View>
    </View></TouchableOpacity>)
}

export default CreditCard;