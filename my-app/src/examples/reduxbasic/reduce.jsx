
/// reducer
import AlertConstant from './constants';

const AlertReducer = (state={}, action) => {
  const {type, payload} = action;
  switch(type){
    case AlertConstant.SUCCESS:
      return{type:'alert-success', payload: payload}
    case AlertConstant.ERROR:
      return{type:'alert-danger', payload: payload}
    case AlertConstant.CLEAR:
      return{type: 'alert-dark'}
    default:
      return state
  }
}
export default AlertReducer;