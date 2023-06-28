import Card from "../models/Card";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Database = {
  getCards: async(): Promise<Array<Card>> => {
    const cardsString = await AsyncStorage.getItem('cards');
    const result = cardsString ? JSON.parse(cardsString) : [];
    return result as Array<Card>;
  },

  insertCard: async(card: Card): Promise<Array<Card>> => {
    var cards: Array<Card> = await Database.getCards();
    cards = [card].concat(cards)
    const cardsString = JSON.stringify(cards);
    await AsyncStorage.setItem('cards', cardsString);
    return cards;
  }
}

export default Database;