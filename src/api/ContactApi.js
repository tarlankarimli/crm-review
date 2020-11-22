import API from './index';

const getCustomer = () => {
    return API.get("/customers");
}

const remove = (id) => {
    return API.delete(`/contacts/${id}`)
}

const update = (id, contact) => {
    return API.put(`/contacts/${id}`, contact)
}

const getOne = (id) => {
    return API.get(`/contacts/${id}`)
}

export {getCustomer, remove, update, getOne};