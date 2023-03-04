import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import addBookThunk from "../../redux/book/thunk/addBookThunk";
import updateBookThunk from "../../redux/book/thunk/updateBookThunk";

const AddNewBook = () => {
  const book = useSelector((state) => state.book.book);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);
  const [id] = useState(uuidv4());

  const isTrue = book.length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
      id,
    };

    dispatch(addBookThunk(data));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const author = e.target.author.value;
    const thumbnail = e.target.thumbnail.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const featured = e.target.featured.checked;
    const id = book.id;

    const data = {
      name,
      author,
      thumbnail,
      price,
      rating: +rating,
      featured,
      id,
    };

    console.log(data);

    dispatch(updateBookThunk(id, data));
  };
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form
        onSubmit={isTrue ? handleSubmit : handleUpdate}
        className="book-htmlForm"
      >
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            defaultValue={book?.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
            defaultValue={book?.author}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            defaultValue={book?.thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              defaultValue={book?.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              defaultValue={book?.rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            defaultChecked={book?.featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {isTrue ? "Add Book" : "Update Book"}
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
