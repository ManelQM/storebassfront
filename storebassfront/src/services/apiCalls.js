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

export let registerUser = async (values) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      name: values.name,
      email: values.email,
      password: values.password,
    });

    return { status: "success", message: "User registered" };
  } catch (error) {
    console.error("Error en la solicitud de registro:", error);
    return { status: "error", message: "Error al registrar el usuario" };
  }
};
