import { createStore, combineReducers } from 'redux';
import initialState from './initialState'
import listsReducer from './listsReducer'
import columnsReducer from './columnsReducer'
import cardsReducer from './cardsReducer'
import searchStringReducer from './searchStringReducer'

// * Reducer
const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  search: searchStringReducer
}
const reducer = combineReducers(subreducers);

// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     searchString: searchStringReducer(state.searchString, action)
//   };
//   return newState;
//   // if (action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.newColumn] }
//   // switch (action.type) {
//   //   case 'ADD_LIST': 
//   //     return { ...state, lists: [...state.lists, { id: shortid(), ...action.payload }]}
//   //   case 'ADD_COLUMN':
//   //     return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }] }
//   //   case 'ADD_CARD':
//   //     return { ...state, cards: [...state.cards, { id: shortid(), isFavorite: false, ...action.payload }] }
//   //   case 'UPDATE_SEARCH_TEXT':
//   //     return { ...state, search: action.payload }
//   //   case 'TOGGLE_CARD_FAVORITE':
//   //     return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
//   //   default:
//   //     return state;
//   // }
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;