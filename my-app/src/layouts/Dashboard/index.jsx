import React, { useRef } from "react";
import BoxTT from "../../components/BoxTT";

const DashboardLayout = ({children}) => {
  const boxRef = useRef(null);
  return(
    <BoxTT ref={boxRef}>
      {children}
    </BoxTT>
  )
}
export default DashboardLayout;