import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../api';

const SLICE_NAME = 'user';

const createUser = createAsyncThunk(
  `${SLICE_NAME}/createUser`,
  async (userData, thunkAPI) => {
    try {
      const { data: {data: user}} = await API.createUser(userData);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  users: [],
  isLoading: false,
  error: null
}

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    });

    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // те що кинули у rejectWithValue
    })
  }
})

const { reducer: userReducer } = userSlice;

export { createUser }

export default userReducer;