import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
const initialState = {
  state: "loading",
  isLoading: true,
  count: 0,
};
function Reducer(state, action) {
  return state;
}

export default function Home() {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [{ state, isLoading }, dispatch] = useReducer(Reducer, initialState);

  //
  useEffect(() => {
    async function getBooks() {
      try {
        const url = await fetch("http://localhost:3001/books");
        const res = await url.json();
        const books = res.book;
        setListOfBooks(books);
        console.log(books);
      } catch (err) {
        console.log(err.message);
      }
    }
    getBooks();
  }, []);
  return (
    <>
      <header>
        <h1>Book Shop</h1>
      </header>
      <div className="wrapper">
        {listOfBooks.map((elt) => (
          <Book key={elt.title} book={elt} />
        ))}
      </div>
      <AddNewBook />
    </>
  );
}
function Book({ book }) {
  return (
    <div className="book">
      <img src="" alt="" />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>
        <b>$ {book.price}</b>
      </p>
      <button className="outline-btn mini-delete">Delete</button>
      <Link to="/update_book/:id">
        <button className="outline-btn mini-update">Update</button>
      </Link>
    </div>
  );
}
function AddNewBook() {
  return (
    <Link to="new_book">
      <button className="add-new-btn">Add new book</button>
    </Link>
  );
}
