import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAllBook from "../../redux/book/thunk/fetchAllBook";
import AddNewBook from "../AddNewBook/AddNewBook";
import Card from "../Card/Card";

const BookList = () => {
  const books = useSelector((state) => state.book.books);
  const search = useSelector((state) => state.book.search);
  console.log(search);
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);

  useEffect(() => {
    dispatch(fetchAllBook);
  }, [dispatch]);

  let content;

  if (books.length === 0) {
    content = <p>No books found</p>;
  }

  if (books.length > 0) {
    content = books
      .filter((book) => book.name.toLowerCase().includes(search.toLowerCase()))
      .filter((book) => {
        if (book) {
          return active ? book : book.featured;
        }
        return book;
      })
      .map((book) => <Card key={book.id} book={book} />);
  }

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActive(true)}
                className={`filter-btn ${active && "active-filter"}`}
                id="lws-filterAll"
              >
                All
              </button>
              <button
                onClick={() => setActive(false)}
                className={`filter-btn ${!active && "active-filter"}`}
                id="lws-filterFeatured"
              >
                Featured
              </button>
            </div>
          </div>
          <div className="lws-bookContainer">
            {/* <!-- Card 1 --> */}
            {content}
          </div>
        </div>
        <div>
          <AddNewBook />
        </div>
      </div>
    </main>
  );
};

export default BookList;
