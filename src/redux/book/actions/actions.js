import {
  CREATE_BOOK,
  DELETE_BOOK,
  GET_ALL_BOOK,
  GET_BOOK_BY_ID,
  SEARCH_BOOK,
  UPDATE_BOOK,
} from "./actionType";

export const getAllBook = (book) => {
  return {
    type: GET_ALL_BOOK,
    payload: book,
  };
};

export const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    payload: book,
  };
};

export const updateBook = (id, book) => {
  return {
    type: UPDATE_BOOK,
    payload: { id, book },
  };
};

export const deleteBook = (book) => {
  return {
    type: DELETE_BOOK,
    payload: book,
  };
};

export const searchBook = (book) => {
  return {
    type: SEARCH_BOOK,
    payload: book,
  };
};

export const getBookById = (id) => {
  return {
    type: GET_BOOK_BY_ID,
    payload: id,
  };
};
