import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NotFound from "./components/404/NotFound";
import Layout from "./components/Layout/Layout";
import AddBook from "./Page/AddBook"
import Book from "./Page/Book"
import Edit from "./Page/Edit";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Book/>}/>
          <Route path="/addBook"  element={<AddBook/>}/>
          <Route path="/edit/:id"  element={<Edit/>}/>
          <Route path="*"  element={<NotFound/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
