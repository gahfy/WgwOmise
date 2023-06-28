import I18n from '../i18n/i18n';
import NumericUtils from '../utils/NumericUtils'
import AddCardState from '../states/AddCardState';
import Omise from 'omise-react-native';
import Card from '../models/Card';
import Database from '../database/Database';


const AddCardController = {
  submitFormLocally : (
    creditCardNumber,
    creditCardName,
    creditCardExpiry,
    creditCardCvv
  ) => {
    var result: AddCardState = {
      hasError: false,
      creditCardNumberError: undefined,
      creditCardNameError: undefined,
      creditCardExpiryError: undefined,
      creditCardCvvError: undefined,
    }

    if(creditCardNumber.length != 16) {
      result.hasError = true;
      result.creditCardNumberError = I18n.t('credit_card_error_incomplete_number')
    } else {
      result.hasError = NumericUtils.checkCreditCardNumber(creditCardNumber) != undefined;
      result.creditCardNumberError = NumericUtils.checkCreditCardNumber(creditCardNumber)
    }

    if(creditCardName.length == 0) {
      result.hasError = true;
      result.creditCardNameError = I18n.t('credit_card_error_name_not_set')
    }

    if(creditCardExpiry.length != 5) {
      result.hasError = true;
      result.creditCardExpiryError = I18n.t('credit_card_error_incomplete_expiry')
    } else {
      result.hasError = NumericUtils.checkExpiryDate(creditCardExpiry) != undefined;
      result.creditCardNumberError = NumericUtils.checkExpiryDate(creditCardExpiry)
    }

    if(creditCardCvv.length != 3) {
      result.hasError = true;
      result.creditCardCvvError = I18n.t('credit_card_error_invalid_cvv')
    }
    return result;
  },

  getToken: async (creditCardNumber: string,
    creditCardName: string,
    creditCardExpiry: string,
    creditCardCvv: string) => {
      const expiryMonth = creditCardExpiry.substring(0, 2);
      const expiryYear = 2000 + parseInt(creditCardExpiry.substring(3, 5));
      try { 
        const omiseResult = await Omise.createToken({
          card: {
              name: creditCardName,
              city: 'Bangkok',
              postal_code: 10320,
              number: creditCardNumber,
              expiration_month: expiryMonth,
              expiration_year: expiryYear,
              security_code: creditCardCvv
          }
        });
        console.log(omiseResult);
        const cards: Array<Card> = await Database.insertCard({
          type: omiseResult.card.brand,
          lastDigits: creditCardNumber.substring(12),
          expiryDate: creditCardExpiry,
          name: creditCardName,
          id: omiseResult.id
        });
        return cards;
      } catch(error) {
        console.log(error);
        throw error;
      }
      
  }
}

export default AddCardController;