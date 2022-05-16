import shortid from 'shortid';

// selectors
export const getAllColumns = ({ columns }) => columns;

export const getColumnsByList = ({ columns }, listId) => columns
  .filter(column => (column.listId === listId));

// actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default columnsReducer;