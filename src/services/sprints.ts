
import data from '../data/sprints.json';

const getAll = async () => {
  const response = await data;
  console.log(response);
  return response;
}

const getById = async (id: string) => {
  try {
    const response = await data.find((sprint: any) => sprint.id === id);
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

export { getAll, getById, create, update, remove }