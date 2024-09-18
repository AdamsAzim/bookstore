import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNewBook from "./pages/AddNewBook";
import UpdateBook from "./pages/UpdateBook";
import { FormProvider } from "./components/FormProvider";
function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/new_book" element={<AddNewBook />} />
          <Route path="/update_book/:id" index element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;
