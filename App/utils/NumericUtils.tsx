import I18n from '../i18n/i18n';

const NumericUtils = {
  extractDigits: (value: string, maxLength: number): string => {
    var result = '';
    var currentLength = 0;
    for(var i=0; i<value.length && currentLength < maxLength; i++) {
      if(value[i] >= '0' && value[i] <= '9') {
        result += value[i];
        currentLength++;
      }
    }
    return result;
  },

  formatCreditCardNumber: (unformatted: string): string => {
    var result = '';
    var digitsValue = NumericUtils.extractDigits(unformatted, 16);
    for(var i=0; i<digitsValue.length; i++) {
      if(i != 0 && i%4 == 0) {
        result += ' ';
      }
      result += digitsValue[i];
    }
    return result;
  },

  checkCreditCardNumber: (rawNumber: string): string|undefined => {
    var sum = 0;
    if(rawNumber.length != 16) {
      return undefined;
    }
    for(var i=0; i<rawNumber.length; i++) {
      var currentDigit = rawNumber.charCodeAt(i) - 48;
      if(i%2 == 0) {
        currentDigit *= 2;
      }
      if(currentDigit > 9) {
        currentDigit -= 9;
      }
      sum += currentDigit;
    }
    if(sum%10 == 0) {
      return undefined;
    } else {
      return I18n.t('credit_card_error_wrong_number')
    }
  },

  formatDate: (unformatted: string): string => {
    var result = '';
    var digitsValue = NumericUtils.extractDigits(unformatted, 4);
    // If first digit is greater than 1, we prepend the value with a leading 0
    if(digitsValue.length > 0 && digitsValue[0] > '1') {
      digitsValue = '0' + digitsValue;
    }
    for(var i=0; i<digitsValue.length && i < 4; i++) {
      if(i == 2) {
        result += '/';
      }
      if(i == 1 && digitsValue[0] == '1' && digitsValue[1] > '2') {
        break;
      }
      result += digitsValue[i];
    }
    return result;
  },

  checkExpiryDate: (rawDate: string): string|undefined => {
    var month = 0;
    var year = 2000;
    const currentDate = new Date();
    if(rawDate.length < 5) {
      return undefined;
    }
    for(var i=0; i<rawDate.length; i++) {
      var digit = rawDate.charCodeAt(i) - 48;
      switch(i) {
        case 0:
          month += digit*10;
          break;
        case 1:
          month += digit;
          break;
        case 3:
          year += digit*10;
          break;
        case 4:
          year += digit;
          break;
      }
    }
    if(year > currentDate.getFullYear()) {
      return undefined;
    }
    if(year == currentDate.getFullYear()) {
      // getMonth() will return -1 compared to formatted month, so no need to check for equality
      if(month > currentDate.getMonth()) {
        return undefined;
      }
    }
    return I18n.t('credit_card_error_expired')
  }
}

export default NumericUtils;