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

export let registerUser = async(values) => {
  
  try{
    await axios.post( `${API_URL}/auth/register`, {
      name: values.name,
      email: values.email,
      password: values.password, 
    })
    .then((response) => {
      console.log(response, "el res data");
      returnedMessage = response.data.message; 
    });
    
    
    return returnedMessage;
  } catch (error) {
    returnedMessage = "Registered email, please try another one";
    return returnedMessage;
  }
};
