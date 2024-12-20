
import data from '../data/tasks.json';

const getTasks = async () => {
  const response = await data;
  // console.log(response);
  return response;
}

const getTaskById = async (id: string) => {
  try {
    const response = await data.find((task: any) => task.id === id);
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

export default { getTasks, getTaskById, create, update, remove }