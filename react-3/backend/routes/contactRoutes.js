const routes = require('express').Router()
const { addContact, getContacts, editContact, deleteContact } = require('../controller/contactController')

routes.post('/', addContact);
routes.get('/', getContacts)
routes.put('/contacts/:id', editContact)
routes.delete('/:id', deleteContact)
module.exports = routes;