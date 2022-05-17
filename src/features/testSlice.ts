import { createSlice } from '@reduxjs/toolkit'
import { TestState } from 'types'

const initialState = {
    msg: 'hello world',
    user: {
        name: 'Younes Alturkey',
        email: 'hi@younes.ninja',
        dob: '1995',
    },
} as TestState

export const selectedSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setMsg: (state, action) => {
            state.msg = action.payload
        },
    },
})

export const { setMsg } = selectedSlice.actions

export default selectedSlice.reducer
