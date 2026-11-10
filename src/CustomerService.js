import axios from "axios";

const API_URL="http://localhost:7788/api/customer";

export const insertCustomer = (customer) => axios.post(`${API_URL}/create`,customer);
export const getCustomers = () => axios.get(`${API_URL}/getCustomers`);
export const deleteCustomerById = (cid) => axios.delete(`${API_URL}/delete/${cid}`);
export const getCustomerById = (cid) => axios.get(`${API_URL}/getCus/${cid}`);
export const updateCustomerById = (cid,customer) => axios.put(`${API_URL}/update/${cid}`,customer);