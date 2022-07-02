// export default AuthProvider;
export const PrivateRoute = ({children}) => {
  const location = useLocation();
  console.log("location:", location.pathname, location.state)
  const {user, loading} = useAuthContext();

  if(loading){
      return(<p>Checking Authentication</p>)
  }
  // if(user){
  //     return<Navigate to={"/login"} state={{from: location}}/>
  // }
  return user?children:<Navigate to={"/login"} state={{from: location}}/>;
}
export const PublicRoute = () => {
  return(
     <Route path="/" element={<Home/>}/> 
  )
}
export const ProtectRoute = ({children}) => {

  return(
    <Route path="/" element={<Home/>}/> 
 )
}