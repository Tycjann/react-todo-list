import { createStore } from 'redux';
import initialState from './initialState'
import shortid from 'shortid';
import {strContains} from '../utils/strContains.js';

// * selectors
// export const getFilteredCards = (state, columnId) => state.cards
// .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));
// export const getFilteredCards = (state, columnId, regex) => state.cards
// destrukturyzacja: 
export const getFilteredCards = ({ cards }, columnId, searchString) => cards
  .filter(card => (card.columnId === columnId && strContains(searchString, card.title)));

export const getAllColumns = ({ columns }) => columns;

export const getColumnsByList = ({ columns }, listId) => columns
  .filter(column => (column.listId === listId));

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

// * action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updateSearchText = payload => ({ type: 'UPDATE_SEARCH_TEXT', payload });

const reducer = (state, action) => {
  // if (action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.newColumn] }
  switch (action.type) {
    case 'ADD_COLUMN': 
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]}
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { id: shortid(), ...action.payload }] }
    case 'UPDATE_SEARCH_TEXT':
      return { ...state, search: action.payload }
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;