//context
//react custom hook for using context
export function useMyMaterial(){

  const context = useContext(MyMaterial);
  if(!context){
    throw new Error(
      "useMyMaterialController should be used inside the MyMaterial"
    )
  }
  return context;
}