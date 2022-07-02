import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../connection/firebase';
//
const AuthContext = createContext();
AuthContext.displayName = "Authorization";

export function useAuthContext() {
    return useContext(AuthContext);
  }
const AuthProvider = ({children}) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const value = { user, loading };

  useEffect(()=>{
    const unsubscribed = auth.onAuthStateChanged((user)=>{
      // console.log("user: ", user)
      setUser(user);
      setLoading(false);
    });
    return()=>{
      unsubscribed();
    };
  }, []);

  // const value = useMemo(()=>[],[])
  return(
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
export default AuthProvider