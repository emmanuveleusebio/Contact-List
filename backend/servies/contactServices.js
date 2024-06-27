const contactModel = require('../models/contact')

const addService = async (data) => {
    try {
        const postData = await contactModel.create(data)
        return postData;
    } catch (error) {
        console.error('Error in addService:', error);
        throw new Error('Service error');
    }
}
const getService = async (currentPage, limit, search) => {
    search = search == "undefined" ? null : search
    const page = currentPage || 1;
    const pageSize = limit || 5;
    const skip = (currentPage - 1) * pageSize;
    const matchCondition = search
        ? { name: { $regex: new RegExp(search, "i") } }
        : {};

    try {
        const datas = await contactModel.aggregate([
            { $match: matchCondition },
            { $sort: { createdAt: -1 } },
            {
                $facet: {
                    totalCount: [{ $count: "total" }],
                    data: [{ $skip: skip }, { $limit: pageSize }],
                },
            },
        ])
        const totalUsers = datas[0].totalCount[0] ? datas[0].totalCount[0].total : 0;
        const contacts = datas[0].data;
        return ({
            contacts,
            totalUsers,
        })
    } catch (error) {
        console.error('Error in getService:', error);
        throw new Error('Service error');
    }
}
const editService = async (editedData) => {
    try {
        const updateDetails = await contactModel.findByIdAndUpdate(
            editedData.id,
            editedData,
            { new: true, runValidators: true } // options: return the updated document and run validation
        );
        return updateDetails;
    } catch (error) {
        console.error('Error in editService:', error);
        throw new Error('Service error');
    }
}
const deleteService = async (id) => {
    try {
        const deleteContact = await contactModel.findByIdAndDelete(id);
        return deleteContact
    } catch (error) {
        console.log(error)
    }
}

module.exports =
{
    addService,
    getService,
    editService,
    deleteService,
};