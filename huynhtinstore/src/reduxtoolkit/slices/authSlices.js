import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const login = createAsyncThunk('login', async (data) => {
    const response = await fetch('http://localhost/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',        
        },
        body: JSON.stringify(data)
    });
    return response.json();
});

const intialState = {
    currentUser: null,
    status: 'idle',
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: intialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentUser = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});
export default authSlice.reducer