import React from "react";
import "./deleteContact.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../features/contactSlice";
import { deleteToggle } from "../features/combineToggle";

const DeletePop = () => {
  const dispatch = useDispatch();
  const toggleButton = useSelector((state) => state.combine.delete.value);
  const selectedId = useSelector((state) => state.combine.delete.selectedId);
  const deleteData = () => {
    dispatch(deleteContact(selectedId));
  };
  const cancel = () => {
    dispatch(deleteToggle());
  };
  return (
    <div className={toggleButton ? "deletePopup" : "hideDelete"}>
      <p className="popMessage">Confirm Delete</p>
      <div>
        <button className="cancelDel" onClick={cancel}>
          Cancel
        </button>
        <button className="deleteButton" onClick={deleteData}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeletePop;
