import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Bg from "../assets/images/add_task.svg";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../Redux/actions/BookAction";

const AddBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.getbookReducers);
  const {  books } = bookList;
 
  const [disabled, setDisabled] = useState(false);
  const [valueInput, setValueInput] = useState({
    name: "",
    author: "",
    price: "",
  });
  const { name, author, price } = valueInput;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !author || !price) {
      toast.error("Bütün xanalar doldurulmalıdır!");
    } 
    else if( books.find(book=>book.name === name)){
       
        toast.error("Ad eyni ola bilməz!");
    }
    else {
        dispatch(addBook({ ...valueInput }));
        setTimeout(() => {
          navigate("/");
        }, 3000);
        setDisabled(true);
        toast.success("Uğurla əlavə olundu!");
      
    }
  };
  return (
    <div className="addBook-section">
      <ToastContainer autoClose={2000} />
      <h1>Kitab Əlavə et</h1>
      <div className="addBook">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Kitabın adı</label>
            <Input
              value={name}
              onChange={handleChange}
              name="name"
              className="form-control"
              type="text"
              placeholder="kitab adını daxil edin"
            />
          </div>
          <div className="form-group">
            <label>Kitabın yazarı</label>
            <Input
              value={author}
              onChange={handleChange}
              name="author"
              className="form-control"
              type="text"
              placeholder="kitab adını daxil edin"
            />
          </div>
          <div className="form-group">
            <label>Kitabın qiyməti</label>
            <Input
              value={price}
              onChange={handleChange}
              name="price"
              className="form-control"
              type="text"
              placeholder="kitab adını daxil edin"
            />
          </div>
          <div className="add-btn-div">
            <Button
              className={disabled ? "add-btn btn-disabled" : "add-btn"}
              disabled={disabled ? "disabled" : ""}
            >
              Əlavə et <FiSend />
            </Button>
          </div>
        </form>
        <div className="addBooks-img ">
          <img src={Bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddBook;
