//contextBasic
import React, { createContext } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useContext } from "react";

//値が変更するcontextを使う
const UserContext = createContext({
  userName: '',
  setUserName: ()=>{}
});
export const ContextChange = () => {
  const [userName, setUserName] = useState("tan tan");
  const value = useMemo(
    () => ({userName, setUserName}), 
    [userName]
  );
  return (
    <UserContext.Provider value={value}>
      <LayoutC >
        Main Content
      </LayoutC>
    </UserContext.Provider>
  )
}
const LayoutC = ({ children }) => {
  return (
    <div>
      <HeaderC />
      <main>
        {children}
      </main>
    </div>
  )
}
const HeaderC = () => {
  return (
    <header>
      <UserInfoC/>
      <UserNameInput />
    </header>
  );
}
const UserInfoC = () => {
  const name = useContext(UserContext);
  return (<span>{name.userName}</span>);
}
const UserNameInput = () => {
  const { userName, setUserName } = useContext(UserContext);
  const handlerEvent = event => setUserName(event.target.value);
  return(
    <input 
      type={"text"}
      value={userName}
      onChange={handlerEvent}
    />
  )
}

//基本的なcontextを使う
const MyContext = createContext("ContextName");
export const ContextBasic = () => {
  const userName = "Thanh Tan";
  return (
    <MyContext.Provider value={userName}>
      <LayoutB >
        Main Content
      </LayoutB>
    </MyContext.Provider>
  )
}
const LayoutB = ({ children }) => {
  return (
    <div>
      <HeaderB />
      <main>
        {children}
      </main>
    </div>
  )
}
const HeaderB = () => {
  return (
    <header>
      <UserInfoB/>
    </header>
  );
}
const UserInfoB = () => {
  const name = useContext(MyContext);
  return (<span>{name}</span>);
}

//もし contextをつかわなかったら、
export const ContextNone = () => {
  const UserName = "Do Thanh";
  return(
    <LayoutN userName={UserName}>
      Main Content
    </LayoutN>
  )
}
const LayoutN = ({ children, userName }) => {
  return (
    <div>
      <HeaderN userName={userName} />
      <main>
        {children}
      </main>
    </div>
  )
}
const HeaderN = ({ userName }) => {
  return (
    <header>
      <UserInfoN userName={userName} />
    </header>
  );
}
const UserInfoN = ({ userName }) => {
  return (<span>{userName}</span>);
}
