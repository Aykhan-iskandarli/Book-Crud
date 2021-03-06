import {
  ADD_BOOK,
  DELETE_BOOK,
  GET_BOOK,
  GET_BOOK_REQUEST,
  GET_BOOK_SINLGE,
  UPDATE_BOOK,
} from "../actions/actionTypes";

const initialState = {
  books: [],
  loading: true,
};

export const getbookReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_REQUEST:
      return {
        loading: true,
       
      };
    case GET_BOOK:
      return {
        ...state,
        books:  action.payload,
        loading: false,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: action.payload.id,
        loading: false,
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: action.payload.id, 
        loading: false,
      };
    case GET_BOOK_SINLGE:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
