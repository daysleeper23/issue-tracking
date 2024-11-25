
import { Project } from '@/lib/types';
import data from '../data/projects.json';

const getProjects: () => Promise<Array<Project>> = async () => {
  const response = await data;
  console.log(response);
  return response;
}

const getProjectById = async (id: string) => {
  try {
    const response = await data.find((project: any) => project.id === id);
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

export default { getProjects, getProjectById, create, update, remove }