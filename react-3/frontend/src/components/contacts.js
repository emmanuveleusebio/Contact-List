import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPagination } from "../features/contactSlice";
import { edittoggle } from "../features/editToggle";
import { deleteToggle } from "../features/deleteToggle";
import "./contacts.css";
import MyComponent from "./pagination";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, status, error } = useSelector((state) => state.contacts);

  // useEffect(() => {
  //   dispatch(searchPagination());
  // }, [dispatch]);


  let content;
  if (status === "loading") {
    content = <tr><td><p>Loading...</p></td></tr>;
  } else if (status === "succeeded") {
    content = contacts.map((contact, index) => (
      <tr key={contact._id}>
        <td>{index + 1}</td>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td>{contact.email}</td>
        <td>{contact.gender}</td>
        <td>
          <button onClick={() => dispatch(edittoggle(contact._id))}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => dispatch(deleteToggle(contact._id))}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    ));
  } else if (status === "failed") {
    content = (
      <tr>
        <td colSpan="6">
          {error}
        </td>
      </tr>
    );
  }
  return (
    <div className="contactCard">
      <table className="table contactTable">
        <thead>
          <tr>
            <th scope="col">#Sl</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {content}
        </tbody>
      </table>
      <MyComponent />
    </div>
  );
};

export default Contacts;
