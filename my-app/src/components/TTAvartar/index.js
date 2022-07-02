
const AvatarStyle = styled(Avatar)(({theme, ownerState})=>{

  const { palette, functions, typography, boxShadows } = theme;
  const { shadow, bgColor, size } = ownerState;

  const { gradients, transparent, white } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size: fontSize, fontWeightRegular } = typography;

  //backgroundImage value
  let backgroundValue = bgColor === "transparent"
    ?transparent.main
    :linearGradient(gradients[bgColor].main, gradients[bgColor].state);
  
    // size value
  let sizeValue;
  switch(size){
    case "xs":
      sizeValue = {
        width: pxToRem(24),
        height: pxToRem(24),
        fontSize: fontSize.xs,
      };
      break;
    case "sm":
      sizeValue = {
        width: pxToRem(36),
        height: pxToRem(36),
        fontSize: fontSize.sm,
      };
      break;
    case "lg":
      sizeValue = {
        width: pxToRem(58),
        height: pxToRem(58),
        fontSize: fontSize.sm,
      };
      break;
    case "xl":
      sizeValue = {
        width: pxToRem(74),
        height: pxToRem(74),
        fontSize: fontSize.md,
      };
      break;
    case "xxl":
      sizeValue = {
        width: pxToRem(110),
        height: pxToRem(110),
        fontSize: fontSize.md,
      };
      break;
    default: {
      sizeValue = {
        width: pxToRem(48),
        height: pxToRem(48),
        fontSize: fontSize.md,
      };
    }
  }
  return{
    color: white.main,
    fontWeight: fontWeightRegular,
    boxShadow: boxShadows[shadow],
    background: backgroundValue,
    ...sizeValue
  }
});
const TTAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <AvatarStyle 
    {...rest}
    ref={ref} 
    ownerState={{ shadow, bgColor, size }} 
  />
));

// Setting default values for the props of TTAvatar
TTAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Typechecking props for the TTAvatar
TTAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};
