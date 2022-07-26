import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    name: string,
    role: string,
    id: string,
    online: number
}

const initialState: AuthState = {
    name: '',
    role: '',
    id: '',
    online: 0
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: '',
        role: '',
        id: '',
        online: 0
    },
    reducers: {
        usersLogged: (state) => {
            state.online += 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        multipleUsersLogged: (state, action: PayloadAction<number>) => {
        state.online += action.payload
      },
    }
});

export const { usersLogged, multipleUsersLogged } = authSlice.actions;

export default authSlice.reducer;