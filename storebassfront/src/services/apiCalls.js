import axios from "axios";
const API_URL = "http://localhost:3001";

let returnedMessage = ""; 

export let loginUser  = async (values) => {
    try {
        await axios 
        .post(`${API_URL}/auth/login`, {
            email: values.email,
            password: values.password,
        })
        .then ((response) => {
            returnedMessage = response.data;
        });
        return returnedMessage; 
    } catch(error) {
        returnedMessage = "Invalid Email or Password";
        return returnedMessage;
    }      
};