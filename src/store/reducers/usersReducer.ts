import { createSlice } from '@reduxjs/toolkit'
import usersService from '../../services/users';
import { User } from '@/lib/types';
import { UserState } from '../types/userTypes';
import { AppDispatch } from '..';

const initialState: UserState = {
  data: new Array<{
    value: string;
    label: string;
    url: string;
    status: string;
  }>()
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.data = action.payload;
    }
  }
});

export const initializeUsers = () => {
  return async (dispatch: AppDispatch) => {
    const users = (await usersService.getUsers()).map((user: User) => {
      return {
        value: user.id,
        label: user.name,
        url: user.avatarUrl,
        status: user.onlineStatus
      }
    });
    console.log('users in reducers:', users);
    dispatch(setUsers(users))
  }
}

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer