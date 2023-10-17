import axios from "axios";
const API_URL = "http://localhost:3001";

export let loginUser = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: body.email,
      password: body.password,
    });
    console.log(response.data, "la respuesta del backend");

    return response.data;
  } catch (error) {
    console.error("Error in loginUser:", error);

    return "Invalid Email or Password";
  }
};

// export const loginUser = async (body, res) => {

//   try {
//       let resp = await axios.post(
//           "http://localhost:3001/auth/login",
//           body
//       );

//       if (resp.data === "Password or email is incorrect") {
//           return "El email o la contraseña son incorrectos"

//       } else if (resp.data.message === "Login successful") {
//           return resp
//       }
//   } catch (error) {

//       return error.response
//   }

// };

// let returnedMessage = "";

// export let loginUser  = async (values) => {
//     try {
//         await axios
//         .post(`${API_URL}/auth/login`, {
//             email: values.email,
//             password: values.password,
//         })
//         .then ((response) => {
//             returnedMessage = response.data;
//         });
//         return returnedMessage;
//     } catch(error) {
//         returnedMessage = "Invalid Email or Password";
//         return returnedMessage;
//     }
// };

// import axios from "axios"; // Asegúrate de importar axios si no lo has hecho
