import React, { useEffect } from "react";
import Button from "../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook, getBookList } from "../Redux/actions/BookAction";
import Loading from "../components/Loading/Loading";
import EmptyTable from "../components/EmptyTable/EmptyTable";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast } from 'react-toastify';

const Book = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.getbookReducers);
  const { loading, books } = bookList;

  useEffect(() => {
    dispatch(getBookList());
  }, [dispatch]);




  const deleteHandler = (id)=>{
    if(window.confirm("Silmək istədiyinizdən əminsiniz?"))
     dispatch(deleteBook(id))
    setTimeout(()=>{
      dispatch(getBookList());
    },100)
    toast.success("Kitab siyahıdan silindi!")
  }

  const updateHandler = (id)=> {
    navigate(`/edit/${id}`)
  }
  return (
    <div className="table-div">
        <ToastContainer autoClose={1000}/>
      {
        loading ? <Loading/> :
       books && books.length>0 ?  (
          <table>
          <thead>
            <tr>
              <th>Kitabın adı</th>
              <th>Kitabın yazarı</th>
              <th>Kitabın qiyməti</th>
              <th>SİL / YENİLƏ</th>
            </tr>
          </thead>
          <tbody>
            { books && books.map((list) => (
              <tr key={list.id}>
                <td>{list.name}</td>
                <td>{list.author}</td>
                <td>{list.price} AZN</td>
                <td>
                  <Button className="danger-btn" onClick={()=>deleteHandler(list.id)}>SİL</Button>{" "}
                  <Button className="warning-btn" onClick={()=>updateHandler(list.id)}>YENİLƏ</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )
        : <EmptyTable/>
      }
      
    </div>
  );
};

export default Book;
