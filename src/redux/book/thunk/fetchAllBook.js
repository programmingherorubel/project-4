import { getAllBook } from "../actions/actions";

const fetchAllBook = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const data = await response.json();
  dispatch(getAllBook(data));
};

export default fetchAllBook;
