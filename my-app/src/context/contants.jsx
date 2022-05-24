import React from "react";

///materialprovider
import { createContext, useContext, useReducer } from "react";
import ContextReducer from "../reducer";

const MyMaterial = createContext();
MyMaterial.displayName = "MyMaterialContext";     //TODO: context (langue, theme, )
///constants
const ContextConstant = {
  MINI: "MINI_SIDENAV",
  TRANSPARENT_SIDENAV: "TRANSPARENT_SIDENAV",
  WHITE: "WHITE_SIDENAV",
  COLOR: "COLOR_SIDENAV",
  TRANSPARENT_NAVBAR: "TRANSPARENT_NAVBAR",
  FIXED: "FIXED_NAVBAR",
  OPEN_CONFIG: "OPEN_CONFIGURATOR",
  DIRECTION: "DIRECTION",
  LAYOUT: "LAYOUT",
  DARK_MODE: "DARK_MODE"
}
export default ContextConstant;
