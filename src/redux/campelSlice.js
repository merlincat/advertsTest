import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog } from './operations';


const campelsSlice = createSlice({
    name: "catalog",
    initialState:{
        items:[],
        loading: false,
        error:null
    },
extraReducers: builder => builder.addCase(fetchCatalog.pending, state =>{
    state.error = null;
    state.loading = true;
}).addCase(fetchCatalog.fulfilled, (state, action)=>{
    state.loading = false;
    state.items = action.payload;
}).addCase(fetchCatalog.rejected, (state, action)=>{
    state.loading = false;
        state.error = action.payload;
})
})
export default campelsSlice.reducer;