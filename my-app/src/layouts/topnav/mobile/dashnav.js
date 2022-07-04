
const navbarMobileMenu = ({breakpoints}) => ({
  display: "inline-block",
  lineHeight: 0,
  [breakpoints.up("xl")]:{
    display: "none"
  }
})
export default navbarMobileMenu;
