import { createSlice } from '@reduxjs/toolkit'
import tasksService from '../../services/tasks';
import { ITask } from '@/lib/types';
import { TaskAction, TaskState, SET_TASKS } from '../types/taskTypes';
import { AppDispatch } from '..';

const initialState: TaskState = {
  tasks: new Array<ITask>()
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    }
  }
});

export const initializeTasks = () => {
  return async (dispatch: AppDispatch) => {
    const tasks = await tasksService.getTasks();
    console.log('tasks in reducers:', tasks);
    dispatch(setTasks(tasks))
  }
}

export const { setTasks } = tasksSlice.actions
export default tasksSlice.reducer