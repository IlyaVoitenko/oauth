import axios from "axios";

const instance = axios.create({ baseURL: process.env.REACT_APP_SERVER });

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const callApi = async () => {
  try {
    const { data } = await instance.get("/");
    return data;
  } catch (error) {
    console.warn(error);
  }
};
export const callProtectedApi = async (getAccessToken) => {
  try {
    const token = await getAccessToken();
    console.log(token);
    setToken(token);
    const { data } = await instance.get("/protected");
    return data;
  } catch (error) {
    console.log(error);
  }
};
