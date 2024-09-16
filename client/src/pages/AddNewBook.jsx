import { useState } from "react";
import { Link } from "react-router-dom";
export default function AddNewBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [authorName, setAuthorName] = useState("");
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:3001/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: bookTitle,
          description: bookDescription,
          price: bookPrice,
          author: authorName,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
    // try {
    //   e.preventDefault();
    //   alert("sucessfully submited");

    //   //

    //   const res = await fetch("http://localhost:3001/books", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       title: bookTitle,
    //       description: bookDescription,
    //       price: bookPrice,
    //       author: authorName,
    //     }),
    //   });

    //   // console.log({
    //   //   title: bookTitle,
    //   //   description: bookDescription,
    //   //   price: bookPrice,
    //   //   author: authorName,
    //   // });
    //   setBookTitle("");
    //   setBookDescription("");
    //   setBookPrice("");
    //   setAuthorName("");
    // } catch (err) {
    //   console.log(err.message);
    // }
  }
  return (
    <>
      <main>
        <h1>Add new book</h1>
        <form className="form" action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder=" Book title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <textarea
            name=""
            id=""
            placeholder=" Book description"
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder=" Book price"
            value={bookPrice}
            onChange={(e) => setBookPrice(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder=" Author name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
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
