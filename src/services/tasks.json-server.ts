//generate rest api calls using axios
import axios from "axios";

const baseURL = "http://localhost:3001/tasks";

const getAll = async () => {
  const response = await axios.get(baseURL);
  console.log(response.data);
  return response.data;
}

const getById = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const create = async (data: any) => {
  try {
    const response = await axios.post(baseURL, data);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error; // Re-throw to allow the caller to handle it
  }
}

const update = async (id: string, data: any) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

const remove = async (id: string) => {
  const response = await axios.delete(`${baseURL}/${id}`);
  return response.data;
}

export { getAll, getById, create, update, remove }