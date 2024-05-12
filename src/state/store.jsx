import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../state/slices/counterSlice'
//Step1 -> Creating store
const globalStore = configureStore({
    reducer: {
        // Step6 ->importing .reducer 
        counterStore: counterReducer
    }
})
export default globalStore