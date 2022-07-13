import TTBox from "../../../components/TTBox";
import DefaultNavbarLink from "../navlink";
import  MenuCom from '@mui/material/Menu';
import PropTypes from 'prop-types';

function DefaultNavbarMobile({ open, close }) {
  const { width } = open && open.getBoundingClientRect();

  return (
    <MenuCom
    // getContentAnchorEl={null}
    getcontentanchorel={null}
    anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <TTBox px={0.5}>
        <DefaultNavbarLink icon={"donut_large"} name="dashboard" route="/dashboard" light={false}/>
        <DefaultNavbarLink icon={"person"} name="profile" route="/profile" light={false}/>
        <DefaultNavbarLink icon={"account_circle"} name="sign up" route="/signup" light={false}/>
        <DefaultNavbarLink icon={"key"} name="sign in" route="/signin" light={false}/>
      </TTBox>
    </MenuCom>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};
export default DefaultNavbarMobile;