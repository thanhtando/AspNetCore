import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithPopup,
  signOut,
  onAuthStateChanged

} from 'firebase/auth';
import { auth } from "../../../connection/firebase";
import BasicLayout from "../../../layouts/base/basicLayout";
import { Card, Checkbox, Grid, Link, Switch } from "@mui/material";
import TTBox from "../../../components/TTBox";
import TTTypography from "../../../components/TTTypography";
import MuiLink from '@mui/material/Link';
import Facebook from "@mui/icons-material/Facebook";
import GitHub from "@mui/icons-material/GitHub";
import Google from "@mui/icons-material/Google";
import TTInput from "../../../components/TTInput";
import TTButton from "../../../components/TTButton";
import CoverLayout from "../../../layouts/base/coverLayout";
const bgImage = require("../../../assets/images/bg-sign-in-basic.jpeg");


const SignReset = () =>{
  return(
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <TTBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <TTTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </TTTypography>
          <TTTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </TTTypography>
        </TTBox>
        <TTBox pt={4} pb={3} px={3}>
          <TTBox component="form" role="form">
            <TTBox mb={4}>
              <TTInput type="email" label="Email" variant="standard" fullWidth />
            </TTBox>
            <TTBox mt={6} mb={1}>
              <TTButton variant="gradient" color="info" fullWidth>
                reset
              </TTButton>
            </TTBox>
          </TTBox>
        </TTBox>
      </Card>
    </CoverLayout>
  )
}
export default SignReset;