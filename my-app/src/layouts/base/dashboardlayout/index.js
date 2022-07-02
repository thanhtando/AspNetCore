const DashboardLayout = ({children}) => {

  const [controller, dispatch] = useMaterialUIController();
  const {miniSidenav} = controller;
  const {pathname} = useLocation();

  useEffect(()=>{
    setLayout(dispatch, "dashboard");
  },[pathname, dispatch]);

  return(
    <TTBox sx={({breakpoints, transitions, functions:{pxToRem}})=>({
      p: 3,
      position: "relative",
      [breakpoints.up("xl")]:{              //[breakpoints.up("xs")]:{
        marginLeft: miniSidenav?pxToRem(120):pxToRem(274),
        transitions: transitions.create(["margin-left", "margin-right"],{
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        })
      }
    })}>
      {/* navibar */}
      <DashboardNavbar />
      {/* content */}
      {children}
      {/* <Footer /> */}
      <FooterDash/>
    </TTBox>
  )
}
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};