import { Link } from "react-router-dom";
import { useForm } from "../components/FormProvider";
import { useEffect, useState } from "react";

export default function AddNewBook() {
  const {
    bookTitle,
    setBookTitle,
    bookDescription,
    setBookDescription,
    bookPrice,
    setBookPrice,
    authorName,
    setAuthorName,
  } = useForm();
  const [imgUrl, setImgUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // setBookTitle("");
    // setBookDescription("");
    // setBookPrice("");
    // setAuthorName("");

    try {
      const res = await fetch("http://localhost:3001/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          img: imgUrl,
          title: bookTitle,
          description: bookDescription,
          price: bookPrice,
          author: authorName,
        }),
      });

      // const data = await res.json();
      // console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    async function getBookCover() {
      try {
        const res = await fetch(
          `https://bookcover.longitood.com/bookcover?book_title=${bookTitle}&author_name=${authorName}`
        );
        const data = await res.json();
        console.log(data.url);
        setImgUrl(data.url);
      } catch (err) {
        console.log(err.message);
      }
    }
    if (bookTitle && authorName) {
      getBookCover();
    }
  }, [bookTitle, authorName]);

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
            placeholder=" Comment/Description"
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
