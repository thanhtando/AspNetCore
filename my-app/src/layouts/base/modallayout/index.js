const ModalLayout = ({title, children, open, handleClose}) => {

  return(
    <TTBox
    >
      {/* modal header */}
      <TTBox>{title}</TTBox>
      {/* modal content */}
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
          {children}
        </Grid>
      </Grid>
      {/* modal footer */}
    </TTBox>
  )
}