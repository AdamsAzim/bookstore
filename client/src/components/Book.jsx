import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "./FormProvider";
export default function Book({ book }) {
  return (
    <div className="book">
      <img src={book.img} alt="" />
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
