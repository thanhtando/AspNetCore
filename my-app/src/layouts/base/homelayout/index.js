import PageLayout from "../pageLayout"
import FooterPage from '../../common/footer/footerPage/index';
import TTBox from "../../../components/TTBox";
import { Grid } from "@mui/material";
import DefaultNavbar from '../../topnav/default';

const HomeLayout = ({children}) => {
  return(
    <PageLayout>
      <DefaultNavbar 
                action={{
          type: "external",
          route: "http://www.google.com",
          label: "Learn Start",
          color: "dark",
        }}
        light={false}
      />
      <TTBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item >
            {children}
          </Grid>
        </Grid>
      </TTBox>
      <FooterPage />
    </PageLayout>
  )
}
export default HomeLayout;