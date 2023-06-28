import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  screen: {
    paddingStart: 22,
    paddingEnd: 22,
    marginTop: 16,
    backgroundColor: colors.defaultBackground,
    color: colors.defaultText,
    flex: 1,
  },

  formContainer: {
    flex: 1
  },

  submitButtonContainer: {
    marginBottom: 16,
    backgroundColor: colors.buttonBackground,
    borderRadius: 22.5,
    minHeight: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },

  submitButtonText: {
    color: colors.buttonText,
    fontWeight: '700'
  },

  textButtonText: {
    color: colors.buttonBackground,
    fontWeight: '500',
    fontSize: 18,
    marginTop: 16
  },

  labeledInput :{
    marginTop: 2,
  },

  inputComponent :{
    flexDirection: 'row',
    marginTop: 8
  },

  inputDefaultBorder :{
    borderColor: colors.inputBorder,
    borderWidth: 2,
    borderRadius: 5,
  },

  inputErrorBorder :{
    borderColor: colors.errorBorder,
    borderWidth: 2,
    borderRadius: 5,
  },

  inputError :{
    color: colors.errorText,
    fontWeight: '500',
    height: 20,
    fontStyle: 'italic',
    fontSize: 12
  },

  input: {
    fontWeight: '500',
    color: colors.defaultText,
    padding: 16,
    fontSize: 16,
    flexGrow: 1
  },

  inputLabel: {
    fontWeight: '500',
    color: colors.defaultText
  },

  inputCardLogosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 8
  },

  inputCardLogo: {
    marginStart: 5
  },

  inputCardCvvDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputCardDate: {
    paddingEnd: 10,
  },

  inputCardCvv: {
    paddingStart: 10,
  },

  inputCardCvvDate: {
    width: '50%'
  },

  cardsLogoContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  cardLogo: {
    marginHorizontal: 10,
  },

  emptyStateScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 66,
    height: '100%'
  },

  emptyStateCard: {
    width:40,
    height: 40
  },

  emptyStateTitle: {
    fontSize: 18,
    marginTop: 16,
    color: colors.defaultText
  },

  emptyStateSubtitle: {
    fontSize: 18,
    marginTop: 14,
    textAlign: 'center',
    color: colors.defaultText
  },

  creditCardContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 32,
    borderRadius: 13,
    marginHorizontal:24,
    marginVertical: 8
  },

  cardLogoContainer: {
    marginTop: 0,
    marginHorizontal: 0,
    padding: 0,
    height: 36,
    marginBottom: 8,
  },

  cardMaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30
  },

  cardMask: {
    marginEnd: 30,
  },

  cardLastDigits: {
    color: colors.creditCardText,
    fontSize: 15,
    fontWeight: '500',
  },

  cardInfoContainer: {
    flexDirection: 'row',
    marginRight: 36,
    justifyContent: 'space-between',
    marginTop: 16
  },

  cardInfoLabel: {
    fontWeight: '500',
    fontSize: 10,
    color: colors.creditCardLabel
  },

  cardInfoData: {
    marginTop: 14,
    fontWeight: 500,
    fontSize: 13,
    color: colors.defaultText
  }
})

export default styles;