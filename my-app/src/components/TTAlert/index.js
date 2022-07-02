
// alert
const TTAlert = ({
  color, dismissible, children, ...rest
})=>{

  const [alertStatus, setAlerStatus] = useState("mount");
  const handleAlertStatus =()=> setAlerStatus("fadeOut");

  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <AlertStyle ownerState={{color}}{...rest}>
        <TTBox display="flex" alignItems="center" color="white">
          {children}
        </TTBox>
        {dismissible?(
          <AlertIconStyle onClick={mount?handleAlertStatus:null}>
            &times;
          </AlertIconStyle>):null
        }
      </AlertStyle>
    </Fade>
  )
  // useEffect(()=>{
  //   let moutn = false
  //   return()=>moutn = true;
  // },[alertStatus]);
  //the template for the alert

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlerStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  // return(
  //   <AlertStyle ownerState={{color}} {...rest}>
  //     <TTBox display="flex" alignItems="center" color="white">
  //     {children}
  //     </TTBox>
  //     {dismissible?(
  //       <AlertIconStyle>
  //         &times;
  //       </AlertIconStyle>):null
  //     }
  //   </AlertStyle>
  // )
};
// Setting default values for the props of TTAlert
TTAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the TTAlert
TTAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
const  AlertStyle = styled(Box)(({theme, ownerState})=>{
  
  const {palette, typography, borders, functions} = theme;
  const { color } = ownerState;

  const { white, gradients} = palette;
  const { fontSizeRegular, fontWeightMedium} = typography;
  const { borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  let backgroundImageValue = gradients[color]
    ?linearGradient(gradients[color].main, gradients[color].state)
    :linearGradient(gradients.info.main, gradients.info.state)
  return{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: pxToRem(60),
    backgroundImage: backgroundImageValue,
    color: white.main,
    position: "relative",
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    borderRadius: borderRadius.md,
    fontSize: fontSizeRegular,
    fontWeight: fontWeightMedium,
  }
})
const AlertIconStyle = styled("span")(({theme, ownerState})=>{

  const { palette, typography, functions } = theme;

  const { white } = palette;
  const { size, fontWeightMedium } = typography;
  const { pxToRem } = functions;

  return {
    color: white.main,
    fontSize: size.xl,
    padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
    marginLeft: pxToRem(40),
    fontWeight: fontWeightMedium,
    cursor: "pointer",
    lineHeight: 0,
  };
})