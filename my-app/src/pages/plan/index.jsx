import { Card, Grid, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import TTBox from "../../components/TTBox";
import TTTypography from "../../components/TTTypography";
import TTInput from '../../components/TTInput';
import TTButton from "../../components/TTButton";

const bgImage = require("../../assets/images/bg/bg_boat_2.jpeg");

function CardLayout({cardHeight, cardWidth, image, children }) {

  // console.log("Basic layout");
  return (
    <TTBox
      width={cardWidth}
      height={cardHeight}
      sx={{ overflowX: "hidden" }}
    >
      <TTBox
        position="absolute"
        width={cardWidth}
        minHeight={cardHeight}
        zIndex={-1}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.info.main, 0.5),
              rgba(gradients.info.state, 0.5)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <TTBox px={1} width="100%" height="100%" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </TTBox>
    </TTBox>
  );
}
export const PlanUp = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //
  const handleSubmit = (event) => {
      event.preventDefault();
      //firebase
      const { email, password } = event.target.elements;

  }
  return (
    <CardLayout image={bgImage} cardWidth={550} cardHeight={550}>
    {/* <BasicLayout image={bgTest2}> */}
      <Card sx={{mt: 5, }}>
        <TTBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <TTTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Plan
          </TTTypography>
          {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <TTTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" fontSize="small"/>
              </TTTypography>
            </Grid>
            <Grid item xs={2}>
              <TTTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" fontSize="small"/>
              </TTTypography>
            </Grid>
            <Grid item xs={2}>
              <TTTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" fontSize="small"/>
              </TTTypography>
            </Grid>
          </Grid> */}
        </TTBox>
        <TTBox pt={4} pb={3} px={3}>
          <TTBox component="form" role="form" onSubmit={handleSubmit}>
            <Grid container justifyContent={"center"} spacing={2}>
              <Grid item xs={10}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Level"
                    value={age}
                    onChange={handleChange}
                    helperText="Please select your currency"
                    fullWidth
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  {/* {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))} */}
                  </TextField>
                  {/* <TextField
                    type="select"
                    value={age}
                    label="Age"
                    name='Age'
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </TextField> */}
              </Grid>
              <Grid item xs={10}>
                <TTInput 
                  type="combobox" 
                  name="name plan" 
                  label=""
                  fullWidth
                  // disabled 
                  // error
                  // success
                />
              </Grid>              
              <Grid item>
                <TTInput type="list" label="" name="password" fullWidth />
              </Grid>
              <Grid item display="flex" flexDirection={"row"}>
                <TTInput type="date" label="date start" name="dateStart" mr={2} fullWidth />
                <TTInput type="date" label="date end" name="dateEnd" fullWidth />
              </Grid>
              <Grid item>
              
              </Grid>
            </Grid>
            {/* <TTBox mb={2}>
            <TTInput 
                  type="combobox" 
                  name="name plan" 
                  label=""
                  fullWidth
                  // disabled 
                  // error
                  // success
                />
            </TTBox>
            <TTBox mb={2}>
              <TTInput type="text" label="" name="password" fullWidth />
            </TTBox>
            <TTBox mb={2} display="flex" flexDirection="row">
            <TTInput type="date" label="date start" name="dateStart" mr={2} fullWidth />
            <TTInput type="date" label="date end" name="dateEnd" fullWidth />
            </TTBox> */}
            <TTBox mt={2} mb={1}>
              <TTButton 
                variant="gradient" 
                color="info" 
                fullWidth = {true}
                type="submit"
                // onClick={handleSubmit}
              >
                Create Plan
              </TTButton>
            </TTBox>
          </TTBox>
        </TTBox>
      </Card>
    </CardLayout>
  );
}
export default PlanUp;