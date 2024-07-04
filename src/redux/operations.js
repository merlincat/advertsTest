import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = "https://6686eed883c983911b041d86.mockapi.io/api";

export const fetchCatalog = createAsyncThunk(
    'catalog/fetchAll',
    async (_, thunkAPI)=>{
        try {
            const resp = await axios.get('/advert');
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)