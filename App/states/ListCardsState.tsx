import Card from "../models/Card";

interface ListCardState {
  isLoading: boolean;
  cards: Array<Card>;
  onAddNewCardClicked: () => void;
  onCardPressed: (card: Card) => void;
}

export default ListCardState;