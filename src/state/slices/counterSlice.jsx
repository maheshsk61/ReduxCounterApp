import { createSlice } from "@reduxjs/toolkit";
//Step3 -> Creating slices
const counterSlice = createSlice({
    name: 'counter',// Name of the slice
    initialState: {
        value: 0// Initial state of the slice
    },
    reducers: {
        // Reducer functions go here
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        incrementByValue: (state, action) => {
            state.value = state.value + action.payload
        },
        decrementByValue: (state, action) => {
            state.value -= action.payload
        }
    }
})
//Step4 -> .actions
export const { increment, decrement, incrementByValue, decrementByValue } = counterSlice.actions
//Step5 -> .reducer
export default counterSlice.reducer