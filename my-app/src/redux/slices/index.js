import { createSlice } from "@reduxjs/toolkit";

const AlertSlices = createSlice({
  name: "alertRedux",
  initialState:{
    type: "Alert_Success",
    payLoad: "success"
  },
  reducers:{
    alertText: (state, action)=>{
      state.payLoad = "tan dep trai"
    }
  }
});
export const { alertText } = AlertSlices.actions;
export default AlertSlices.reducer;