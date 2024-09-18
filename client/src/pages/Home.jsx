import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import { useForm } from "../components/FormProvider";
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
        const res = await fetch("http://localhost:3001/books");
        const books = await res.json();
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
        <h1>Books Library</h1>
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

function AddNewBook() {
  return (
    <Link to="new_book">
      <button className="add-new-btn">Add new book</button>
    </Link>
  );
}
