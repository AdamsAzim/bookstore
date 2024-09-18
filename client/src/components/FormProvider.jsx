import { createContext, useContext, useState } from "react";
const Form = createContext();

function FormProvider({ children }) {
  const [bookTitle, setBookTitle] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [authorName, setAuthorName] = useState("");
  return (
    <Form.Provider
      value={{
        bookTitle,
        bookDescription,
        bookPrice,
        authorName,
        setBookTitle,
        setBookPrice,
        setBookDescription,
        setAuthorName,
      }}
    >
      {children}
    </Form.Provider>
  );
}
function useForm() {
  if (Form === null) {
    throw new Error("The context is not cosumed in the right directory");
  }
  return useContext(Form);
}
export { FormProvider, useForm };
