import React from "react";
import "./edit.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../features/contactSlice";
import { edittoggle } from "../features/editToggle";

const EditCard = () => {
    const dispatch = useDispatch();
    const toggleButton = useSelector((state) => state.edit.value);
    const selectedId = useSelector((state) => state.edit.selectedId);
    const { contacts } = useSelector((state) => state.contacts);
    const selectedContact = contacts.find(contact => contact._id === selectedId);

    const [editedGender, setEditedGender] = useState("");

    useEffect(() => {
        if (selectedContact) {
            setEditedGender(selectedContact.gender);
        }
    }, [selectedContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedContact = {
            id: selectedId,
            name: formData.get('name'),
            number: formData.get('number'),
            gender: editedGender,
            email: formData.get('email')
        };
        dispatch(updateContact(updatedContact));
    };
    const handleChange = (event) => {
        console.log(event.target.value)
        setEditedGender(event.target.value);
    }
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
                            onChange={handleChange}
                            checked={editedGender === "male"} />

                    </label>
                    <label>
                        Female
                        <input type="radio"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            checked={editedGender === "female"} />

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
                    <button type="button" onClick={() => dispatch(edittoggle())}>Cancel</button>
                </div>
            </div>
        </form>
    );
};
export default EditCard;
