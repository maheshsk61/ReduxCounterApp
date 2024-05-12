import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByValue, decrementByValue } from '../state/slices/counterSlice'

function Counter() {
    //Step7 -> useSelector
    const count = useSelector((state) => state.counterStore.value)
    //Step8 -> useDispatch
    const dispatch = useDispatch()
    return (
        <div>
            {/* Step9 */}
            <h1>Count={count}</h1>
            <button onClick={() => { dispatch(increment()) }}>Increment</button>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button onClick={() => { dispatch(incrementByValue(10)) }}>IncrementByValue</button>
            <button onClick={() => { dispatch(decrementByValue(10)) }}>DecrementByValue</button>
        </div>
    )
}
export default Counter