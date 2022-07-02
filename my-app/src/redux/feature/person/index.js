
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
const initPerson = {
  name: "tan dep trai",
  age: 30,
}
const DecrementAge = (state) => {
  state.age--
}
const PersonSlice = createSlice({
  name: "person",
  initialState: initPerson,
  reducers:{//reducer + action
    incrementAge(state){state.age++},
    de: DecrementAge,
    changeName: (state, action)=>{
      state.name = action.payload
    }
  }
})

const {incrementAge, changeName, de} = PersonSlice.actions;
const PersonReducer = PersonSlice.reducer;
//redux: store
const RootState = {
  person: initPerson,
  human: initPerson,
}
const reducerRoot = {
  person: PersonReducer
}
const storeRedux = configureStore({
  reducer: reducerRoot
});
const Person = () => {
  //get state from store
  const person = useSelector((state)=> state.person);
  //dispathc
  const dispatch = useDispatch();
  const [name, setName] = useState(person.name);
  return(
    <div>
        <p>name: {person.name}</p>
        <p>age: {person.age}</p>

        {/* incrementAgeのdispatch */}
        <button onClick={() => dispatch(incrementAge())}>age + 1</button>
        <button onClick={() => dispatch(de(5))}>age - 1</button>

        {/* changeNameのdispatch */}
        <input  value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => dispatch(changeName(name))}>change name</button>
    </div>
  )
}