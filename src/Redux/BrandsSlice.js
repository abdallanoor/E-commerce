import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios } from 'axios';
let getBrands = createAsyncThunk('brandsSlice/getBrands',
async ()=>{
  let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
}
)
let initialState = { brands: [], isLoading: false, isError: null };
let brandsSlice = createSlice({
  name: "brandsSlice",
  initialState,
  reducers: {},
});
