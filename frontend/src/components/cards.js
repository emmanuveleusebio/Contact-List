import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addContact, updateContact } from "../features/contactSlice";
import "./edit.css"
import "./addContact.css"
import { editToggle } from "../features/combineToggle";
import { addToggle } from "../features/combineToggle";

const ShowCard = ({ mode }) => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        gender: "",
        email: ""
    })

    const toggleEdit = useSelector((state) => state.combine.edit.value)
    const toggleAdd = useSelector((state) => state.combine.add.value)
    const { contacts } = useSelector((state) => state.contacts)
    const selectedContact = useSelector((state) => state.combine.edit.selectedId)
    const editPerson = contacts.find((contact) => contact._id === selectedContact)


    useEffect(() => {
        if (mode === "edit" && editPerson) {
            setFormData({
                name: editPerson.name,
                number: editPerson.number,
                gender: editPerson.gender,
                email: editPerson.email,
            })
        }
    }, [mode, editPerson])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (mode === "edit") {
            const newData = {
                id: selectedContact,
                name: formData.name,
                number: formData.number,
                gender: formData.gender,
                email: formData.email
            }
            dispatch(updateContact(newData))
        } else {
            dispatch(addContact(formData))
        }
    }



    return (
        <form
            className={(mode === 'edit' ? toggleEdit : toggleAdd) ? 'showForm' : 'hideForm'}
            onSubmit={handleSubmit}
            method="post"
        >
            <div className="card">
                <h1>Add Contact</h1>
                <label>
                    Name
                    <input type="text" name="name" onChange={handleChange} value={formData.name} />
                </label>
                <label>
                    Number
                    <input type="text" name="number" onChange={handleChange} value={formData.number} />
                </label>
                <div className="gender">
                    <label>
                        Male
                        <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />
                    </label>
                    <label>
                        Female
                        <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />
                    </label>
                </div>
                <label>
                    Email
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </label>

                <div className="addButtons">
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={() => mode === 'edit' ? dispatch(editToggle()) : dispatch(addToggle())}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ShowCard;