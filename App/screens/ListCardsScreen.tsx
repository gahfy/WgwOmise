import * as React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListCardState from '../states/ListCardsState';
import ListCardController from '../controller/ListCardController'
import TextButton from '../components/TextButton'
import CreditCard from '../components/CreditCard'
import styles from '../styles/styles';
import Card from '../models/Card';
import I18n from '../i18n/i18n';

const LoadingState = () => {
  return (<View />)
}

const LoadedState = (state: ListCardState) => {
  if(state.cards.length == 0) {
    return EmptyState(state)
  }
  return ListState(state)
}

const ListState = (state: ListCardState) => {
  return(<View>
    <FlatList
        data={state.cards}
        renderItem={({item}) => (<CreditCard card={ item } onPress={ (card: Card) => {console.log("pressed from props"); state.onCardPressed(card) }} />)}
      />
  </View>)
}

const EmptyState = (state: ListCardState) => {
  return (
    <View style={ styles.emptyStateScreen }>
      <Image source={ require('../assets/card_icon.png') } style={ styles.emptyStateCard } />
      <Text style={ styles.emptyStateTitle }>{ I18n.t('empty_state_no_card_found') }</Text>
      <Text style={ styles.emptyStateSubtitle }>{ I18n.t('empty_state_recommend_adding') }</Text>
      <TextButton title={ I18n.t('empty_state_add_new_card') } onPress={ state.onAddNewCardClicked } />
    </View>
  )
}

const ListCardsScreen = () => {
  const navigation = useNavigation();
  const [viewState, setViewState] = React.useState<ListCardState>({
    isLoading: false,
    cards: [],
    onAddNewCardClicked: () => { navigation.navigate(I18n.t('add_card_title'), {}) },
    onCardPressed: (card: Card) => { ListCardController.onCardPressed(card) }
    
  })
  const controller = new ListCardController(setViewState, viewState)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      controller.fetchCards()
    }
  );

    return unsubscribe;
  }, [navigation]);
  
  return viewState.isLoading ? LoadingState() : LoadedState(viewState);
}

export default ListCardsScreen;