
const StepperStyle = styled(Stepper)(({theme, ownerState})=>{

  return{
    backgroundColor: "inherit",
  }
});
const TTStepper = forwardRef(({color, bgColor, children, ...rest}, ref)=>{

  return(
    <StepperStyle
      {...rest}
      ref={ref}
      ownerState={{ color, bgColor }}
    >
    {children}
    </StepperStyle>
  )
})
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