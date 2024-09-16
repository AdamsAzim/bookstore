import { Link } from "react-router-dom";
export default function UpdateBook() {
  return (
    <>
      <main>
        <h1>Update book</h1>
        <form className="form" action="">
          <input type="text" placeholder=" Book title" />
          <textarea name="" id="" placeholder=" Book description" />
          <input type="number" placeholder=" Book price" />
          <input type="text" placeholder=" Author name" />
          <button className="add-new-btn submit" type="submit">
            Add
          </button>
        </form>
      </main>
      <footer>
        <Link to="/">See all books</Link>
      </footer>
    </>
  );
}
