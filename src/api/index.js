import axios from "axios";
const { REACT_APP_SERVER } = process.env;

const baseURL = axios.create({ baseURL: REACT_APP_SERVER });

export const callApi = async () => {
  try {
    const { data } = await baseURL.get();
    return data;
  } catch (error) {
    console.warn(error);
  }
};
export const callProtectedApi = async (getAccessToken) => {
  try {
    const token = await getAccessToken();
    console.log("token :", token);
    return token;
  } catch (error) {
    console.log(error);
  }
};
