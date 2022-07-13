import { Card } from "@mui/material";
import TTTypography from "../../components/TTTypography";
import TimeLineExample from '../../examples/timeline/index';
import HomeLayout from '../../layouts/base/homeLayout';
import Intro from "../intro";


const Home = () => {

  return(
    <HomeLayout>
      <Card>
      <TTTypography
          variant="button"
          fontWeight="medium"
          color={"primary"}
          textGradient = {false}
        >Home Page</TTTypography>
        <Intro />

        <TimeLineExample/>

      </Card>
    </HomeLayout>
  )
}
export default Home;

