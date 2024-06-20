import React from "react";
import "./deleteContact.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../features/contactSlice";

const DeletePop = () => {
    const dispatch =  useDispatch();
  const toggleButton = useSelector((state) => state.delete.value);
  const selectedId = useSelector((state) => state.delete.selectedId);

  const deleteData = () => {
    dispatch(deleteContact(selectedId));
  };
  return (
    <div className={toggleButton ? "deletePopup" : "hideDelete"}>
      <p>Confirm Delete</p>
      <div>
        <button className="deleteButton">Cancel</button>
        <button className="deleteButton" onClick={deleteData}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeletePop;
