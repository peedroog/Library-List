import axios from 'axios'

const API_URL = "https://localhost:8080";

const getAllUsers = () => {
    return axios.get(`${API_URL}/user/getAllUsers`);
};

const getUserByUsername = (username) => {
    return axios.get(`${API_URL}/user/getUser/${username}`);
};

const saveUser = (user) => {
    return axios.get(`${API_URL}/user/saveUser/${user}`);
};

const deleteUser = (id) => {
    return axios.get(`${API_URL}/user/deleteUser/${id}`);
};

export {getAllUsers, getUserByUsername, saveUser, deleteUser};