
import data from '../../db.json';

const getAll = async () => {
  const response = await data.tasks;
  console.log(response);
  return response;
}

const getById = async (id: string) => {
  try {
    const response = await data.tasks.find((task: any) => task.id === id);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const create = async (data: any) => {
  console.log('create');
}

const update = async (id: string, data: any) => {
  console.log('update');
}

const remove = async (id: string) => {
  console.log('remove');
}

export { getAll, getById, create, update, remove }