import { getBookById } from "../actions/actions";

const fetchBook = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/books/${id}`);
  const data = await response.json();
  dispatch(getBookById(data));
};

export default fetchBook;
