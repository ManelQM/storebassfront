import axios from "axios";
const API_URL = "http://localhost:3001";


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

export let loginUser = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: body.email,
      password: body.password,
    });
    
    return response.data;
  } catch (error) {
    console.error(error);

  
  }
};

// export let getMyProfile = async (token) => {

//   try {
//     const getProfile = await axios.get(`${API_URL}/user/myprofile`,
   
//     { 
//        headers: 
//         {
//           Authorization: "Bearer" + token
//         }
//        }
//     );
//     return getProfile; 
//   }catch (error) {
//     console.error("No profile data:",error);
//   }
// };


export let getMyProfile = async () => {
  const config = {
    headers: {Authorization: `Bearer ${jwt}`},
  };   
  try {
    let res = await axios.get(`${API_URL}/user/myprofile`, config);
    let data = res.data.user;
    console.log(data, "pues los datos")
    return data;
  }catch (error) {
    console.error("No profile data:",error);
  }
};


export let updateProfile = async (editedProfile, token) => {
  let returnedMessage; 
  try{
    const updateUserProfile = await axios.patch
    (`${API_URL}/user/updatemyprofile`,
    editedProfile,
  
    {
      headers: {
        Authorization: "Bearer " + token 
      },
     }
    );
    console.log(updateUserProfile, editedProfile,"la update")
    return updateUserProfile;
  }catch (error) {
    returnedMessage = "Cant update User";
    return returnedMessage;
  }
}; 

