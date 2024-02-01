import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/login',
    async (userCredentials) => {
        try {
            const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

            const response = await axios.post('http://127.0.0.1:8000/api/login', userCredentials, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
            });

            const data = response.data;
            const token = data.token;

            sessionStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', token);

            return data.user;
        } catch (error) {
            throw error;
        }
    }
);

export const registerUser = createAsyncThunk(
    'user/register',
    async (userCredentials) => {
        try {
            const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

            const response = await axios.post('http://127.0.0.1:8000/api/register', userCredentials, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
            });
            const data = response.data;



            console.log("Registration successful:", data);

            return data.user;
        } catch (error) {
            throw error;
        }
    }
);

const initialState = {
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null,
        isAuthenticated: false,
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
                if (action.error.code === 'ERR_BAD_REQUEST') {
                    state.error = 'Invalid request. Please check your credentials and try again.';
                } else {
                    state.error = action.error.message || 'Login failed. Please check your credentials and try again.';
                }
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
                if (action.error.code === 'ERR_BAD_REQUEST') {
                    state.error = 'Invalid request. Please check your registration details and try again.';
                } else {
                    state.error = action.error.message || 'Registration failed. Please check your details and try again.';
                }
            });
    },
});

export default userSlice.reducer;
