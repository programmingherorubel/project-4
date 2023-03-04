import {
  CREATE_BOOK,
  DELETE_BOOK,
  GET_ALL_BOOK,
  GET_BOOK_BY_ID,
  SEARCH_BOOK,
  UPDATE_BOOK,
} from "../actions/actionType";

const initialState = {
  books: [],
  book: [],
  search: "",
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOK:
      return {
        ...state,
        books: action.payload,
      };

    case GET_BOOK_BY_ID:
      return {
        ...state,
        book: action.payload,
      };
    case CREATE_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload.book : book
        ),
      };

    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case SEARCH_BOOK:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default bookReducer;
