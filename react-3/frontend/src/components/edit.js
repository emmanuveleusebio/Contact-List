import React from "react";
import "./edit.css";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../features/contactSlice";

const EditCard = () => {
    const dispatch = useDispatch();
    const toggleButton = useSelector((state) => state.edit.value);
    const selectedId = useSelector((state) => state.edit.selectedId);
    const { contacts } = useSelector((state) => state.contacts);
    const selectedContact = contacts.find(contact => contact._id === selectedId);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedContact = {
            id: selectedId,
            name: formData.get('name'),
            number: formData.get('number'),
            gender: formData.get('gender'),
            email: formData.get('email')
        };
        dispatch(updateContact(updatedContact));
    };
    return (
        <form
            className={toggleButton ? "showForm" : "hideForm"}
            onSubmit={handleSubmit}
        >
            <div className="card">
                <h1>Edit Contact</h1>
                <label>
                    Name
                    <input type="text"
                        name="name"
                        defaultValue={selectedContact?.name} />
                </label>
                <label>
                    Number
                    <input type="text"
                        name="number"
                        defaultValue={selectedContact?.number} />
                </label>
                <div className="gender">
                    <label>
                        Male
                        <input type="radio"
                            name="gender"
                            value="male"
                            checked={selectedContact?.gender === "male"} />
                    </label>
                    <label>
                        Female
                        <input type="radio"
                            name="gender"
                            value="female"
                            checked={selectedContact?.gender === "female"} />
                    </label>
                </div>
                <label>
                    Email
                    <input type="text"
                        name="email"
                        defaultValue={selectedContact?.email} />
                </label>

                <div className="addButtons">
                    <button type="submit">Submit</button>
                    <button type="button">Cancel</button>
                </div>
            </div>
        </form>
    );
};
export default EditCard;
