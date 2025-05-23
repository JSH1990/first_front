import axios from "axios";

const API_URL = 'http://localhost:8080/First';

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {email, password});
    console.log(response);
    return response.data;
}