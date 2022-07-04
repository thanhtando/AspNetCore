import { Stack, Step, StepLabel, Stepper } from "@mui/material"
import TTBox from "../../components/TTBox"

const stepData = [
  {
    id: 1,
    title: "select campaign setting",
  },
  {
    id: 1,
    title: "Create an ad group",
  },
  {
    id: 3,
    title: "Crate an ad",
  },
  {
    id: 4,
    title: "complete",
  },
]
const IntroStepper = () => {

  return(
    <Stack sx={{width: "100%"}} spacing={4}>
      <Stepper>
        {stepData.map((item, idx)=>(
          <Step key={item.title}>
            <StepLabel>{item.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
const Intro = () => {

  return(
    <TTBox>
      {/* stepper intro */}
      <IntroStepper/>
    </TTBox>
  )
}
export default Intro;


