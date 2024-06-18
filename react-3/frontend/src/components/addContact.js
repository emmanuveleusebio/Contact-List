import React from "react";
import "./addContact.css";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../features/contactSlice";

const AddCard = () => {
  const dispatch = useDispatch()
  const toggleButton = useSelector((state) => state.counter.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = {
      name:formData.get('name'),
      number:formData.get('number'),
      gender:formData.get('gender'),
      email:formData.get('email')
    }
    dispatch(addContact(newContact))
  }

  return (
    <form
      className={toggleButton ? "showForm" : "hideForm"}
      onSubmit={handleSubmit}
      method="post"
    >
      <div className="card">
        <h1>Add Contact</h1>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Number
          <input type="text" name="number" />
        </label>
        <div className="gender">
          <label>
            Male
            <input type="radio" name="gender" value="male" />
          </label>
          <label>
            Female
            <input type="radio" name="gender" value="female" />
          </label>
        </div>
        <label>
          Email
          <input type="text" name="email" />
        </label>

        <div className="addButtons">
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </div>
    </form>
  );
};
export default AddCard;
