import React from 'react'
import { Link } from 'react-router-dom';
import add_book from "../../assets/images/add_book.svg"


const EmptyTable = () => {
  return (
    <div className="empty-table-div">
      <h3>Heç bir kitab əlavə edilməyib</h3>
      <div className="add-btn-div">
        <Link to="/addBook" className="add-btn">
          Kitab Əlavə et
        </Link>
      </div>
      <div className="add-book-img">
        <img src={add_book} alt="" />
      </div>
    </div>
  );
}

export default EmptyTable