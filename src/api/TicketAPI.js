import API from './index';

const BASE_URL = 'http://localhost:8888/api';

const getCustomers = () => {
    return API.get(BASE_URL + "/customers");
}


const remove = (id) => {
    return API.delete(`/customers/${id}`)
}

const update = (id, contact) => {
    return API.put(`/customers/${id}`, contact)
}

const create = (data) => {
    return API.post(BASE_URL + `/customers`, data)
}

export {
    getCustomers, remove, update, getOne, create
};