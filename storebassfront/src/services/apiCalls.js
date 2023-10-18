import axios from "axios";
const API_URL = "http://localhost:3001";

export let loginUser = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: body.email,
      password: body.password,
    });
    console.log(response, "la respuesta del backend");

    return response.data;
  } catch (error) {
    console.error("Error in loginUser:", error);

    return "Invalid Email or Password";
  }
};

export let registerUser = async(body) => {
  try{
    await axios.post( `${API_URL}/auth/register`, {
      name: body.name,
      email: body.email,
      password: body.password, 
    })
    .them((response) => {
      returnedMessage = response.data.message; 
    });
    return returnedMessage;
  } catch (error) {
    returnedMessage = "Registered email, please try another one";
    return returnedMessage;
  }
};
