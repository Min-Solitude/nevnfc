import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    
}

const reducer = createSlice({
    name: 'ticket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
    }
})

export const TicketAction = reducer.actions
export const TicketReducer = reducer.reducer
