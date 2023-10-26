import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const SearchSlice = createSlice({
    name:"search",
initialState:{

},

reducers : {
     casheResults: (state,action) =>{
        state = Object.assign(state, action.payload)
     }
}
})

export const {casheResults} = SearchSlice.actions;

export default SearchSlice.reducer;