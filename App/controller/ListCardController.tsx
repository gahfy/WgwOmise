import * as React from 'react';
const base64 = require("base-64");
import ListCardState from '../states/ListCardsState';
import Database from '../database/Database';
import Card from '../models/Card';
import Omise from 'omise-react-native';
import Config from '../config/omise.config';

//TODO: Fork repo and add this inside
const createCharge = function(data){
  
}

class ListCardController {
  state: ListCardState;
  setState: (state: ListCardState) => void;

  constructor(setState: (state: ListCardState) => void, initialState: ListCardState) {
    this.setState = setState;
    this.state = initialState;
  }

  fetchCards() {
    console.log("Start fetch");
    this.setState({...this.state, isLoading: true});
    Database.getCards().then((cards: Array<Card>) => {
      this.setState({
        ...this.state, isLoading: false, cards: cards
      })
      console.log("Finished fetch");
    })
  }

  static onCardPressed(card: Card) {
    console.log("onCardPressed static");
    // Random amount up to 10,000 bahts
    const amount = Math.floor(Math.random() * 1000000);

    const chargeEndpoint = "https://api.omise.co/charges"
    console.log(base64.encode(Config.privateKey + ":"));
    let headers = {
      'Authorization': 'Basic ' + base64.encode(Config.privateKey + ":"),
      'User-Agent': "curl/7.88.1",
      'Content-Type': 'application/x-www-form-urlencoded',
  };

    console.log("Will be sent: ");
    var requestContent = "amount="+amount+"&currency=thb&card="+card.id;
    console.log(requestContent);
    
    fetch(chargeEndpoint, {
        method: 'POST',
        headers: headers,
        body: requestContent,
    }).then((response) => {
        if (response.ok && response.status === 200) {
          console.log(response.json());
        } else {
          console.error(response);
          console.error(response.json());
        }
    }).catch((error) => console.error(error));
  }
};

export default ListCardController;