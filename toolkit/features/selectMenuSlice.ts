import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface initial {
    menuSize: "smallMenu" | "bigMenu";
}
const initialState: initial = {
  menuSize: "smallMenu",
};

const selectMenuSlice = createSlice({
  name: "selectMenu",
  initialState,
  reducers: {
    smallMenu: (state, action: PayloadAction<"smallMenu" | "bigMenu">) => {
      state.menuSize = action.payload;
    },
  },
});

export const { smallMenu } = selectMenuSlice.actions;

export default selectMenuSlice.reducer;
