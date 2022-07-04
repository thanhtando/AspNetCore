const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const AvatarExampleStyle = styled(Avatar)(({theme})=>{

  const {palette, transitions} = theme;
  return{
    cursor: "pointer",
    backgroundColor: palette.info.main,
    transition: transitions.create(
      ["backgroundColor","transform"],
      {duration: 500}
    ),
    "&:hover":{
      backgroundColor: palette.success.main,
      transform: "scale(1.3)",
    }
  }
})
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <TTProgress variant="gradient" {...props} color={"info"}/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

 function LinearWithValueLabel() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
const TransitionEx = () => {

  return(
    <TTBox>

      <AvatarExampleStyle>TT</AvatarExampleStyle>
      <Avatar src={logoAtlassian} sx={{ width: 24, height: 24 }}/>
      <Avatar src={logoGithub} sx={{ width: 24, height: 24 }}/>
      <Avatar src={LogoAsana} sx={{ width: 24, height: 24 }}/>
      <Avatar src={logoSpotify} sx={{ width: 24, height: 24 }}/>
      <Avatar src={require("../assets/images/avatar/2.jpg")} sx={{ width: 24, height: 24 }}/>

      <LinearWithValueLabel />
      <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      <TTAvatar
        alt="Remy Sharp"
        src="/static/images/avatar/3.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
    </TTBox>
  )
}
