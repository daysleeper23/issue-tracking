import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import tasksReducer from './reducers/tasksReducer';
import usersReducer from './reducers/usersReducer';
import projectsReducer from './reducers/projectsReducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    projects: projectsReducer,
    users: usersReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector = useSelector.withTypes<RootState>()

export default store