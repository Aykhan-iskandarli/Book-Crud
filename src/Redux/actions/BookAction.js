import { ADD_BOOK, DELETE_BOOK, GET_BOOK, GET_BOOK_REQUEST, GET_BOOK_SINLGE, UPDATE_BOOK } from "./actionTypes";
import axios from "axios";



export const getBookList = () => async (dispatch) => {
    dispatch({ type: GET_BOOK_REQUEST});
  try {
    const {data}= await axios.get("http://localhost:5000/data")
    dispatch({ type: GET_BOOK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addBook = (book) => async (dispatch) => {
  dispatch({ type: GET_BOOK_REQUEST});
try {
  const {data}= await axios.post("http://localhost:5000/data",book)
  dispatch({ type: ADD_BOOK, payload: data });
} catch (error) {
  console.log(error);
}
};

  export const deleteBook = (id) => async (dispatch) => {
   dispatch({ type: GET_BOOK_REQUEST});
 try {
   const {data}= await axios.delete(`http://localhost:5000/data/${id}`,id)
   dispatch({ type: DELETE_BOOK, payload: data });
 } catch (error) {
   console.log(error);
 }
 };
 

 export const updateBook = (book,id) => async (dispatch) => {
   dispatch({ type: GET_BOOK_REQUEST});
 try {
   const {data}= await axios.put(`http://localhost:5000/data/${id}`,book)
   dispatch({ type: UPDATE_BOOK, payload: data });
 } catch (error) {
  console.log(error,"update error");
 }
 };



export const getSingleBook = (id) =>async (dispatch)=> {
  dispatch({ type: GET_BOOK_REQUEST});
try {
  const {data}= await axios.get(`http://localhost:5000/data/${id}`)
  dispatch({ type: GET_BOOK_SINLGE, payload: data });
} catch (error) {
  console.log(error,"single error");
}

};


