import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  token: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { id, token, email } = action.payload;
      state.id = id;
      state.token = token;
      state.email = email;
    },
    removeUser(state) {
      state.id = null;
      state.token = null;
      state.email = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
