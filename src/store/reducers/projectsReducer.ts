import { createSlice } from '@reduxjs/toolkit'
import projectsService from '../../services/projects';
import { Project } from '@/lib/types';
import { ProjectState } from '../types/projectTypes';
import { AppDispatch } from '..';

const initialState: ProjectState = {
  data: new Array<Project>()
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action) {
      state.data = action.payload;
    }
  }
});

export const initializeProjects = () => {
  return async (dispatch: AppDispatch) => {
    const projects = await projectsService.getProjects();
    console.log('projects in reducers:', projects);
    dispatch(setProjects(projects))
  }
}

export const { setProjects } = projectsSlice.actions
export default projectsSlice.reducer