const TTSnackbarIconStyle = styled(Icon)(({theme, ownerState})=>{

  const { palette, functions, typography } = theme;
  const { color, bgWhite } = ownerState;

  const { white, transparent, gradients } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size } = typography;

  // backgroundImage value
  let backgroundImageValue;
  if(bgWhite){
    backgroundImageValue = gradients[color]
    ?linearGradient(gradients[color].main, gradients[color].state)
    :linearGradient(gradients.info.main, gradients.info.state);
  }else if(color === "light"){
    backgroundImageValue = linearGradient(gradients.dark.main, gradients.dark.state);
  }
  return{
    backgroundImage: backgroundImageValue,
    marginRight: pxToRem(8),
    WebkitTextFillColor: bgWhite || color === "light" ? transparent.main : white.main,
    WebkitBackgroundClip: "text",
    fontSize: size.lg,
    transform: `translateY(${pxToRem(-2)})`,
  }
})
const TTSnackbar = ({
  color, icon, title, dateTime, 
  content, close, bgWhite, ...rest
}) => {

  const [controller] = useMaterialUIController();
  const {darkMode} = controller;

  let titleColor;
  let dateTimeColor;
  let dividerColor;

  if(bgWhite){
    titleColor = color;
    dateTimeColor = "dark";
    dividerColor = false;
  } else if (color === "light") {
    titleColor = darkMode ? "inherit" : "dark";
    dateTimeColor = darkMode ? "inherit" : "text";
    dividerColor = false;
  } else {
    titleColor = "white";
    dateTimeColor = "white";
    dividerColor = true;
  }

  return(
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...rest}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <TTBox
        maxWidth = "100%"
        minWidth = "21.875rem"
        bgColor={bgWhite?"white":color}
        variant = {bgWhite?"contained":"gradient"}
        shadow = "md"
        borderRadius = "md"
        p = {1}
        sx ={{
          backgroundColor: ({palette})=>darkMode?palette.background.card:palette[color]||palette.white.main,
        }}
      >
        {/* header */}
        <TTBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          {/* string title */}
          <TTBox display="flex" alignItems="center" lineHeight={0}>
            <TTSnackbarIconStyle fontSize="small" ownerState={{ color, bgWhite }}>
              {icon}
            </TTSnackbarIconStyle>
            <TTTypography
              variant="button"
              fontWeight="medium"
              color={titleColor}
              textGradient={bgWhite}
            >
              {title}
            </TTTypography>
          </TTBox>
          {/* icon title */}
          <TTBox display="flex" alignItems="center" lineHeight={0}>
            <TTTypography variant="caption" color={dateTimeColor}>
              {dateTime}
            </TTTypography>
            <Icon
              sx={{
                color: ({ palette: { dark, white } }) =>
                  (bgWhite && !darkMode) || color === "light" ? dark.main : white.main,
                fontWeight: ({ typography: { fontWeightBold } }) => fontWeightBold,
                cursor: "pointer",
                marginLeft: 2,
                transform: "translateY(-1px)",
              }}
              onClick={close}
            >
              close
            </Icon>
          </TTBox>
        </TTBox>
        <Divider sx={{ margin: 0 }} light={dividerColor} />
        {/* content */}
        <TTBox
          p={1.5}
          sx={{
            fontSize: ({ typography: { size } }) => size.sm,
            color: ({ palette: { white, text } }) => {
              let colorValue = bgWhite || color === "light" ? text.main : white.main;

              if (darkMode) {
                colorValue = color === "light" ? "inherit" : white.main;
              }

              return colorValue;
            },
          }}
        >
          {content}
        </TTBox>
      </TTBox>
    </Snackbar>
  )
}
// Setting default values for the props of MDSnackbar
TTSnackbar.defaultProps = {
  bgWhite: false,
  color: "info",
};

TTSnackbar.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  bgWhite: PropTypes.bool,
};