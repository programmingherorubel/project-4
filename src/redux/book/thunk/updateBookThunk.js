import { updateBook } from "../actions/actions";

const updateBookThunk = (id, book) => {
  console.log(book);
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        thumbnail: book.thumbnail,
        price: book.price,
        rating: book.rating,
        featured: book.featured,
        id: book.id,
      }),
    });
    const data = await response.json();
    console.log("updateBookThunk", data);
    dispatch(updateBook(data.id, data));
  };
};

export default updateBookThunk;
