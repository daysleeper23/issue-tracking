
import data from '../data/users.json';

const getUsers = async () => {
  const response = await data;
  return response;
}

const getUserById = async (id: string) => {
  try {
    const response = await data.find((user: any) => user.id === id);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const create = async (data: any) => {
  console.log('create', data);
}

const update = async (id: string, data: any) => {
  console.log('update', id, data);
}

const remove = async (id: string) => {
  console.log('remove', id);
}

export default { getUsers, getUserById, create, update, remove }