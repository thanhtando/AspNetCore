
const ProgressStyle = styled(LinearProgress)(({theme, ownerState})=>{

  const { palette, functions } = theme;
  const { color, value, variant } = ownerState;
  // const { text, gradients } = palette;
  const { gradients } = palette;
  const { linearGradient } = functions;

  // console.log("color:", color)
  let backgroundValue;
  if(variant === "gradient"){backgroundValue = gradients[color]
    ?linearGradient(gradients[color].main, gradients[color].state)
    :linearGradient(gradients.info.main, gradients.info.state);
  }else{
    backgroundValue = palette[color] ? palette[color].main : palette.info.main;
  }
  // console.log(palette[color].main)
  return{
    "& .MuiLinearProgress-bar":{
      backgroundColor: backgroundValue,
      width: `${value}%`,
      color: palette[color].main,
    }
  }
})
const TTProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <TTTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </TTTypography>
    )}
    <ProgressStyle
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of TTProgress
TTProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the TTProgress
TTProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
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
  value: PropTypes.number,
  label: PropTypes.bool,
};