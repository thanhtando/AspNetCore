
//reduex
import React from "react";
import './styles.scss';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AllAction from '../reduxbasic/action';

const ReduxExample = () => {

  //call reducer
  const alertEx = useSelector((state) => state.AlertReducer);
  const dispatch = useDispatch();
  //call action
  useEffect(()=>{
    dispatch(AllAction.AlertActions.success("abc"));
  },[dispatch]);

  return(
    <div className="container">
      <div className={`alert ${alertEx.type}`} role={"alert"}>{alertEx.payload}</div>
      <label>thanh tan</label>

    </div>
  )
}
export default ReduxExample;
