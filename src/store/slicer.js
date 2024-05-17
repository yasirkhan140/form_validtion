import { createSlice } from '@reduxjs/toolkit'
const initialStateReset = {
       email:"",
        phone:"",
        name:"",
        q1:"",
        q2:"",
        q3:"",
        q4:"",
}
const todosSlice = createSlice({
  name: 'error',
    initialState: {
        email:"",
        phone:"",
        name:"",
        q1:"",
        q2:"",
        q3:"",
        q4:"",
  },
  reducers: {
    addError:(state, action)=> {
      state[action.payload.name]=action.payload.value
    },
    resetErrors:(state) => initialStateReset,
  },
})

export const { addError, resetErrors} = todosSlice.actions
export default todosSlice.reducer