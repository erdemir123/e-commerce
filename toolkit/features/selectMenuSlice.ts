import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface initial {
    menuSize: boolean;
}
const initialState: initial = {
  menuSize: false,
};

const selectMenuSlice = createSlice({
  name: "selectMenu",
  initialState,
  reducers: {
    isMenu: (state, action: PayloadAction<boolean>) => {
      state.menuSize = action.payload;
    },
  },
});

export const { isMenu } = selectMenuSlice.actions;

export default selectMenuSlice.reducer;
