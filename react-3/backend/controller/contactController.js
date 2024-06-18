const  {addService, getService, editService, deleteService}  = require('../servies/contactServices')

const addContact = async (req, res) => {
    try {
        const data = req.body;
        const postContact = await addService(data);
        res.status(200).json(postContact)
    } catch (error) {
        res.status(400)
        console.log(error,'error while posting data')
    }
}

const getContacts = async (req, res) => {
    try {
        console.log(req.query.page,"this is the current page")
        const currentPage = req.query.page;
        const limit = 2;
        const search = req.query.search
        const getDetails = await getService(currentPage, limit, search)
        res.status(200).json(getDetails)
    } catch (error) {
        console.log('this is not working')
        console.log(error)
    }
}
const editContact = async (req, res) => {
    try {
       const editedData = req.body;
       const updateEdit = await editService(editedData)
       res.status(200).json(updateEdit);
    } catch (error) {
        console.log(error)
    }
}
const deleteContact = async (req, res) => {
    try {
        const id = req.params.id
        const deleteData = await deleteService(id)
        res.status(200).json(deleteData)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
     addContact,
     getContacts,
     editContact,
     deleteContact,
    };