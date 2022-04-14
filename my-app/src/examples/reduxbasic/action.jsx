
/// action
import AlertConstant from '../constant/alert.constant';

export const AlertActions = {
  success,
  error,
  clear,
}
function success(message){
  return{type: AlertConstant.SUCCESS, payload: message}
}
function error(message){
  return{type: AlertConstant.ERROR, payload: message}
}
function clear(){
  return{type: AlertConstant.CLEAR, payload: ""}
}

import { AlertActions } from './alert.actions';


const AllActions = {
  AlertActions, 
}
export default AllActions;