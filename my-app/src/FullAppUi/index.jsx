//https://nordiccoder.com/blog/meo-va-thu-thuat-vs-code/
//https://viblo.asia/p/code-nhanh-va-hieu-qua-hon-voi-vscode-tips-tricks-LzD5dJvOZjY
//https://dynonguyen.com/toi-uu-visual-studio-code-30-extension-visual-code/
// add vao public/index.html
/* 
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
  href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
  rel="stylesheet"
  /> 
*/

// react import
import React from "react";
import { 
  createContext, 
  useContext, 
  useMemo, 
  useReducer,
  useState,
  useEffect,
  forwardRef,
} from "react";

// router import
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

import { 
  BrowserRouter, 
  NavLink, 
  Route, 
  Routes,
  useLocation,
  // Navigate,
} from "react-router-dom";

// @mui material components import
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles"
// import Icon from "@mui/material/Icon";
import { 
  Box, Button, Card, CssBaseline, Grid, Breadcrumbs,
  Link, alpha, LinearProgress, 
  styled, Typography, Switch, TextField, Checkbox, 
  AppBar, Drawer, Divider, AlertTitle, Fade,
  Avatar, List, ListItem, ListItemIcon, ListItemText, 
  Alert, TableContainer, Table, TableRow, 
  TableBody,
  Tooltip, Autocomplete, Stack, Snackbar, Tab, Tabs, CardMedia,
  // useTheme
} from "@mui/material";
import MenuCom from "@mui/material/Menu"
// prop-types is a library for typechecking of props
// chroma-js is a library for all kinds of color conversions and color scales.
import chroma from "chroma-js";
import GitHubButton from "react-github-btn";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
// import Favorite from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
// react-router-dom components
// import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter"
// import {
//   AccountCircle, DonutLarge, Key, Person, Menu, Close
// } from "@mui/icons-material";
import PropTypes from "prop-types";
import Icon from '@mui/material/Icon';
// import { green } from "@mui/material/colors";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
//test
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close'
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import InstagramIcon from "@mui/icons-material/Instagram";
import { 
  useTable, 
  useGlobalFilter, 
  useSortBy, 
  usePagination,
  useAsyncDebounce,
} from "react-table";
//resources
//image
import logoSpotify from "../assets/images/small-logos/logo-spotify.svg";
import LogoAsana from "../assets/images/small-logos/logo-asana.svg";
import logoGithub from "../assets/images/small-logos/github.svg";
import logoAtlassian from "../assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "../assets/images/small-logos/logo-slack.svg";
import logoInvesion from "../assets/images/small-logos/logo-invision.svg";

// Images
import kal from "../assets/images/kal-visuals-square.jpg";
import marie from "../assets/images/marie.jpg";
import ivana from "../assets/images/ivana-square.jpg";
// import team3 from "../assets/images/team-3.jpg";
// import team4 from "../assets/images/team-4.jpg";
// import burceMars from "../assets/images/bruce-mars.jpg";
import taurus from "../assets/images/avatar/taurus.jpg";
import backgroundProfile from "../assets/images/bg-profile.jpeg";
import logoXD from "../assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "../assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "../assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "../assets/images/small-logos/logo-spotify.svg";
import logoJira from "../assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "../assets/images/small-logos/logo-invision.svg";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
// Images
import homeDecor1 from "../assets/images/home-decor-1.jpg";
import homeDecor2 from "../assets/images/home-decor-2.jpg";
import homeDecor3 from "../assets/images/home-decor-3.jpg";
import homeDecor4 from "../assets/images/home-decor-4.jpeg";
// import team1 from "../assets/images/team-1.jpg";
// import team2 from "../assets/images/team-2.jpg";
// import team3 from "../assets/images/team-3.jpg";
// import team4 from "../assets/images/team-4.jpg";
// const bgImage = require("../assets/images/bg/bg_boat_2.jpeg");
// const bgImage_su = require("../assets/images/bg/bg_lake.jpeg");
// const bgTest1 = require("../assets/images/bg/background_.png");
// const bgTest2 = require("../assets/images/bg/lake_boat.png");

// Images
import pattern from "../assets/images/illustrations/pattern-tree.svg";
import masterCardLogo from "../assets/images/logos/mastercard.png";
// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "../assets/images/logos/visa.png";
// const LogoAsana = require("../assets/images/small-logos/logo-asana.svg");
// const logoGithub = require("../assets/images/small-logos/github.svg");
// const logoAtlassian = require("../assets/images/small-logos/logo-atlassian.svg");
// const logoSlack = require("../assets/images/small-logos/logo-slack.svg");
// const logoSpotify = require("../assets/images/small-logos/logo-spotify.svg");
const bgImage = require("../assets/images/bg-sign-in-basic.jpeg");
const bgImage_su = require("../assets/images/bg-sign-up-cover.jpeg");
const brandWhite = require("../assets/images/logo-ct.png");
const brandDark =  require("../assets/images/logo-ct-dark.png");
// const team2 = require("../assets/images/team-2.jpg");
// const team3 = require("../assets/images/team-3.jpg");
// const team4 = require("../assets/images/team-4.jpg");
Chart.register(...registerables);
const TimeLineExample = () => {

  return(
    <Timeline position="alternate">

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
const Home = () => {

  // console.log("home: test start")
  return(
    <TTBox>
      
      <TTTypography
        variant="button"
        fontWeight="medium"
        color={"primary"}
        textGradient = {false}
      >Home Page</TTTypography>
      <TimeLineExample/>
    </TTBox>
  )
}
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
const TestMaterial = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <TransitionEx />
    </Box>
  );
}
// input
const TTInput = forwardRef(({
  error, success, disabled, ...rest
}, ref)=>{
  
  return(
    <InputStyle
      {...rest}
      ref={ref}
      ownerState={{
        error, success, disabled
      }}
    />
  )
});
TTInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
}
TTInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
}
const InputStyle = styled(TextField)(({theme, ownerState})=>{

  const { palette, functions} = theme;
  const { error, success, disabled } = ownerState;

  const { grey, transparent, error: colorError, success: colorSuccess} = palette;
  const { pxToRem } = functions;

  //style input with error = true
  const errorStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23F44335' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23F44335' stroke='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline, &:after": {
        borderColor: colorError.main,
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: colorError.main,
    },
  });

  //style input with success = true
  const successStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%234CAF50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline, &:after": {
        borderColor: colorSuccess.main,
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: colorSuccess.main,
    },
  });

  return{
    backgroundColor: disabled?`${grey[200]} !important`:transparent.main,
    pointerEvents: disabled?"none":"auto",   //TODO: pointerEvents( vohieu hoa btn)
    ...(error && errorStyles()),
    ...(success && successStyles()),
  }
})
//button 
const TTButton = forwardRef(({
  children,
  color, variant, size, circular, iconOnly, ...rest
}, ref)=>{

  const [controller] = useMaterialUIController();
  const {darkMod} = controller;
  return(
    <ButtonStyle
      {...rest}
      ref={ref}
      color="primary"
      variant={variant==="gradient"?"contained":variant}
      size={size}
      ownerState={{
        color, variant, size, circular, iconOnly, darkMod
      }}
    >
      {children}
    </ButtonStyle>
  )
})
// Setting default values
TTButton.defaultProps={
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false,
}
//typechecking 
TTButton.propTypes={
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  color: PropTypes.oneOf([
    "white",
    "primary", "secondary", "info", "success", "warning", "error",
    "light", "dark"
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
const ButtonStyle = styled(Button)(({theme, ownerState})=>{

  //theme of 
  const { palette, functions, borders, boxShadows } = theme;
  const { white, text, transparent, gradients, grey} = palette;
  const { boxShadow, linearGradient, pxToRem, rgba} = functions;
  const { borderRadius } = borders;
  const { colored } = boxShadows;

  //ownerState of
  const { color, variant, size, circular, iconOnly, darkMode } = ownerState;
  
  // style btn with variant = contained
  const containedStyles = ()=>{
    // background color value
    const backgroundValue = palette[color] ? palette[color].main : white.main;

    // backgroundColor value when button is focused
    const focusedBackgroundValue = palette[color] ? palette[color].focus : white.focus;

    // boxShadow value
    const boxShadowValue = colored[color]
      ? `${boxShadow([0, 3], [3, 0], palette[color].main, 0.15)}, ${boxShadow(
          [0, 3],
          [1, -2],
          palette[color].main,
          0.2
        )}, ${boxShadow([0, 1], [5, 0], palette[color].main, 0.15)}`
      : "none";

    // boxShadow value when button is hovered
    const hoveredBoxShadowValue = colored[color]
      ? `${boxShadow([0, 14], [26, -12], palette[color].main, 0.4)}, ${boxShadow(
          [0, 4],
          [23, 0],
          palette[color].main,
          0.15
        )}, ${boxShadow([0, 8], [10, -5], palette[color].main, 0.2)}`
      : "none";

    // color value
    let colorValue = white.main;

    if (!darkMode && (color === "white" || color === "light" || !palette[color])) {
      colorValue = text.main;
    } else if (darkMode && (color === "white" || color === "light" || !palette[color])) {
      colorValue = grey[600];
    }

    // color value when button is focused
    let focusedColorValue = white.main;

    if (color === "white") {
      focusedColorValue = text.main;
    } else if (color === "primary" || color === "error" || color === "dark") {
      focusedColorValue = white.main;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,

      "&:hover": {
        backgroundColor: backgroundValue,
        boxShadow: hoveredBoxShadowValue,
      },

      "&:focus:not(:hover)": {
        backgroundColor: focusedBackgroundValue,
        boxShadow: palette[color]
          ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
          : boxShadow([0, 0], [0, 3.2], white.main, 0.5),
      },

      "&:disabled": {
        backgroundColor: backgroundValue,
        color: focusedColorValue,
      },
    };
  }
  // style btn with variant = outlined
  const outlinedStyles = () => {
    // background color value
    const backgroundValue = color === "white" ? rgba(white.main, 0.1) : transparent.main;

    // color value
    const colorValue = palette[color] ? palette[color].main : white.main;

    // boxShadow value
    const boxShadowValue = palette[color]
      ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
      : boxShadow([0, 0], [0, 3.2], white.main, 0.5);

    // border color value
    let borderColorValue = palette[color] ? palette[color].main : rgba(white.main, 0.75);

    if (color === "white") {
      borderColorValue = rgba(white.main, 0.75);
    }

    return {
      background: backgroundValue,
      color: colorValue,
      borderColor: borderColorValue,

      "&:hover": {
        background: transparent.main,
        borderColor: colorValue,
      },

      "&:focus:not(:hover)": {
        background: transparent.main,
        boxShadow: boxShadowValue,
      },

      "&:active:not(:hover)": {
        backgroundColor: colorValue,
        color: white.main,
        opacity: 0.85,
      },

      "&:disabled": {
        color: colorValue,
        borderColor: colorValue,
      },
    };
  }
  // styled btn with variant = gradient
  const gradientStyles = () => {

    //background value
    const backgroundValue = color==="white" || !gradients[color]
      ?white.main
      :linearGradient(gradients[color].main, gradients[color].state);
    //boxShadow value
    // boxShadow value
    const boxShadowValue = colored[color]
      ? `${boxShadow([0, 3], [3, 0], palette[color].main, 0.15)}, ${boxShadow(
          [0, 3],
          [1, -2],
          palette[color].main,
          0.2
        )}, ${boxShadow([0, 1], [5, 0], palette[color].main, 0.15)}`
      : "none";

    // boxShadow value when button is hovered
    const hoveredBoxShadowValue = colored[color]
      ? `${boxShadow([0, 14], [26, -12], palette[color].main, 0.4)}, ${boxShadow(
          [0, 4],
          [23, 0],
          palette[color].main,
          0.15
        )}, ${boxShadow([0, 8], [10, -5], palette[color].main, 0.2)}`
      : "none";
    
    //color value
    let colorValue = white.main;
    if(color==="white"){ colorValue = text.main}
    else if(color==="light"){ colorValue = gradients.dark.state;}
    // console.log(color.main)
    return{
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,

      "&:hover":{ boxShadow: hoveredBoxShadowValue},

      "&:focus:not(:hover)":{ boxShadow: boxShadowValue},

      "&:disabled":{
        background: backgroundValue,
        color: colorValue,
      }
    }
  }
  // style btn with variant = text
  const textStyles = () => {
    // color value
    const colorValue = palette[color] ? palette[color].main : white.main;

    // color value when button is focused
    const focusedColorValue = palette[color] ? palette[color].focus : white.focus;

    return {
      color: colorValue,

      "&:hover": {
        color: focusedColorValue,
      },

      "&:focus:not(:hover)": {
        color: focusedColorValue,
      },
    };
  }
  // style btn with circular = true
  const circularStyles = () => ({
    borderRadius: borderRadius.section,
  });
  // style btn with iconOnly = true
  const iconOnlyStyles = () => {
    // width, height, minWidth and minHeight values
    let sizeValue = pxToRem(38);

    if (size === "small") {
      sizeValue = pxToRem(25.4);
    } else if (size === "large") {
      sizeValue = pxToRem(52);
    }

    // padding value
    let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

    if (size === "small") {
      paddingValue = pxToRem(4.5);
    } else if (size === "large") {
      paddingValue = pxToRem(16);
    }

    return {
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,

      "& .material-icons": {
        marginTop: 0,
      },

      "&:hover, &:focus, &:active": {
        transform: "none",
      },
    };
  }
  return{
    ...(variant==="contained" && containedStyles()),
    ...(variant==="outlined" && outlinedStyles()),
    ...(variant==="gradient" && gradientStyles()),
    ...(variant==="text" && textStyles()),
    ...(circular && circularStyles()),
    ...(iconOnly && iconOnlyStyles()),
  }



})
const BoxStyle = styled(Box)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;

  const { gradients, grey, white } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;
  const { colored } = boxShadows;

  const greyColors = {
    "grey-100": grey[100],
    "grey-200": grey[200],
    "grey-300": grey[300],
    "grey-400": grey[400],
    "grey-500": grey[500],
    "grey-600": grey[600],
    "grey-700": grey[700],
    "grey-800": grey[800],
    "grey-900": grey[900],
  };

  const validGradients = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ];

  const validColors = [
    "transparent",
    "white",
    "black",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "grey-100",
    "grey-200",
    "grey-300",
    "grey-400",
    "grey-500",
    "grey-600",
    "grey-700",
    "grey-800",
    "grey-900",
  ];

  const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
  const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

  // background value
  let backgroundValue = bgColor;

  if (variant === "gradient") {
    backgroundValue = validGradients.find((el) => el === bgColor)
      ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
      : white.main;
  } else if (validColors.find((el) => el === bgColor)) {
    backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
  } else {
    backgroundValue = bgColor;
  }

  // color value
  let colorValue = color;

  if (validColors.find((el) => el === color)) {
    colorValue = palette[color] ? palette[color].main : greyColors[color];
  }

  // borderRadius value
  let borderRadiusValue = borderRadius;

  if (validBorderRadius.find((el) => el === borderRadius)) {
    borderRadiusValue = radius[borderRadius];
  }

  // boxShadow value
  let boxShadowValue = "none";

  if (validBoxShadows.find((el) => el === shadow)) {
    boxShadowValue = boxShadows[shadow];
  } else if (coloredShadow) {
    boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : "none";
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});
const TTBox = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
    <BoxStyle
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

// Setting default values for the props of TTBox
TTBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
};

// Typechecking props for the TTBox
TTBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  coloredShadow: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "none",
  ]),
};

const TTTypography = forwardRef((
  {color, opacity, textGradient,
  fontWeight, textTransform, verticalAlign,
  children, ...rest}, ref
)=>{

  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return(
    <TypographyStyle 
      {...rest}
      ref = {ref}
      ownerState ={{
        color, opacity, textGradient,
        textTransform, verticalAlign, fontWeight, darkMode
      }}
    >
    {children}
    </TypographyStyle>
  )
})
const TypographyStyle = styled(Typography)(({theme, ownerState})=>{

  const {palette, functions, typography} = theme;
  const {color, textTransform, verticalAlign, fontWeight, opacity, textGradient, darkMode } = ownerState;
  
  const { gradients, transparent, white} = palette;
  const { linearGradient } = functions;
  const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;


  let opacityValue = opacity;
  let textTransformValue = textTransform;
  let verticalAlignValue = verticalAlign;

  //style for the typography with textGradient={true}
  const gradientStyles = () => ({
    display: "inline-block",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
    backgroundImage: 
    color !== "inherit" && color !== "text" && color !== "white" && gradients[color]
      ?linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.dark.main, gradients.dark.state),
    position: "relative",
    zIndex: 1,
  })
  //color value
  let colorValue = color==="inherit" || !palette[color]?"inherit":palette[color].main;
  if (darkMode && (color === "inherit" || !palette[color])) {
    colorValue = "inherit";
  } else if (darkMode && color === "dark") colorValue = white.main;

  // fontWeight styles
  const fontWeights = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold,
  };
  let fontWeightValue = fontWeights[fontWeight] && fontWeights[fontWeight]
  // console.log(gradientStyles());
  return{
    opacity: opacityValue,
    textTransform: textTransformValue,
    verticalAlign: verticalAlignValue,
    textDecoration: "none",
    color: colorValue,
    fontWeight: fontWeightValue,
    ...(textGradient && gradientStyles()),
  }
});
// Setting default values for the props
TTTypography.defaultProps={
  color: "dark",
  fontWeight: false,
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1
}
// Typechecking props for the Typography
TTTypography.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "white",
  ]),
  fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
  textTransform: PropTypes.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  verticalAlign: PropTypes.oneOf([
    "unset",
    "baseline",
    "sub",
    "super",
    "text-top",
    "text-bottom",
    "middle",
    "top",
    "bottom",
  ]),
  textGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
};

function PageLayout({ background, children }) {

  const [, dispatch] = useMaterialUIController();
  const location= useLocation();
  // console.log(location.pathname, location.state);

  // console.log("pageLayout");

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [location.pathname, dispatch]);

  return (
    <TTBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </TTBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
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
      label: PropTypes.string.isRequired,
    }),
  ]),
};

//page of footer
function Footer({ light }) {
  const { size } = typography;

  return (
    <TTBox position="absolute" width="100%" bottom={0} py={4}>
      <Container>
        <TTBox
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", xl: "row" }}
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
        >
          <TTBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "white" : "text"}
            fontSize={size.sm}
          >
            &copy; {new Date().getFullYear()}, made with
            <TTBox fontSize={size.md} color={light ? "white" : "dark"} mb={-0.5} mx={0.25}>
              <Icon color="inherit" fontSize="inherit">
                favorite
              </Icon>
              {/* <Favorite color="inherit" fontSize="inherit"/> */}
            </TTBox>
            by
            <Link to="https://www.google.com" target="_blank">
              <TTTypography
                variant="button" 
                fontWeight="medium" 
                color={light ? "white" : "dark"}
              >
                &nbsp;Tan Tan&nbsp;
              </TTTypography>
            </Link>
            for a better web.
          </TTBox>
          <TTBox
            component="ul"
            sx={({ breakpoints }) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 3,
              mb: 0,
              p: 0,

              [breakpoints.up("lg")]: {
                mt: 0,
              },
            })}
          >
            <TTBox component="li" pr={2} lineHeight={1}>
              <Link href="/signup" target="_blank">
                <TTTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Tan Tan
                </TTTypography>
              </Link>
            </TTBox>
            <TTBox component="li" px={2} lineHeight={1}>
              <Link href="https://www.google.com" target="_blank">
                <TTTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  About Us
                </TTTypography>
              </Link>
            </TTBox>
            <TTBox component="li" px={2} lineHeight={1}>
              <Link href="https://www.google.com" target="_blank">
                <TTTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Blog
                </TTTypography>
              </Link>
            </TTBox>
            <TTBox component="li" pl={2} lineHeight={1}>
              <Link href="https://www.google.com" target="_blank">
                <TTTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  License
                </TTTypography>
              </Link>
            </TTBox>
          </TTBox>
        </TTBox>
      </Container>
    </TTBox>
  );
}
// Setting default props for the Footer
Footer.defaultProps = {
  light: false,
};
// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};
function BreadcrumbsTT({icon, title, route, light}){

  const routes = route.slice(0, -1); 

  return(
    <TTBox mr={{ xs: 0, xl: 8 }}>
      <Breadcrumbs sx={{
        "& .MuiBreadcrumbs-separator": {
          color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
        }
      }}>
        {/* link */}
        <Link href="/">
          <TTTypography
            component="span"
            variant="body2"
            color={light ? "white" : "dark"}
            opacity={light ? 0.8 : 0.5}
            sx={{ lineHeight: 0 }}
          >
            <Icon>{icon}</Icon>
          </TTTypography>
        </Link>
        {/* route */}
        {routes.map((el)=>(
          <Link href={`/${el}`} key={el}>
            <TTTypography
              component="span"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              color={light ? "white" : "dark"}
              opacity={light ? 0.8 : 0.5}
              sx={{ lineHeight: 0 }}
            >{el}</TTTypography>
          </Link>
        ))}
        {/* title */}
        <TTTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{ lineHeight: 0 }}
        >
          {title.replace("-", " ")}
        </TTTypography>
      </Breadcrumbs>
      {/* title */}
      <TTTypography     
        fontWeight="bold"
        textTransform="capitalize"
        variant="h6"
        color={light ? "white" : "dark"}
        noWrap
      >
        {title.replace("-"," ")}
      </TTTypography>
    </TTBox>
  )
}
// Setting default values for the props of Breadcrumbs
BreadcrumbsTT.defaultProps = {
  light: false,
};

// Typechecking props for the Breadcrumbs
BreadcrumbsTT.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  light: PropTypes.bool,
}
const navbarContainer = ({ breakpoints }) => ({
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  pt: 0.5,
  pb: 0.5,

  [breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "0",
    paddingBottom: "0",
  },
});
const navbarRow = ({breakpoints},{isMini})=>({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  [breakpoints.up("md")]:{
    justifyContent: isMini?"space-between": "stretch",
    width: isMini?"100%": "max-content",
  },
  [breakpoints.up("xl")]: {
    justifyContent: "stretch !important",
    width: "max-content !important",
  },
})
const navbarIconBtn = ({typography:{size}, breakpoints}) => ({
  px: 1,
  "& .material-icon, .material-icon-round": { fontSize: `${size.xl}!important`},
  "& .MuiTypography-root":{
    display: "none",
    [breakpoints.up("sm")]: {
      display: "inline-block",
      lineHeight: 1.2,
      ml: 0.5,
    },
  }
})
const navbarMobileMenu = ({breakpoints}) => ({
  display: "inline-block",
  lineHeight: 0,
  [breakpoints.up("xl")]:{
    display: "none"
  }
})
function navbar(theme, ownerState){

  const { palette, boxShadows, functions, transitions, breakpoints, borders } = theme;
  const { transparentNavbar, absolute, light, darkMode } = ownerState;

  const { dark, white, text, transparent, background } = palette;
  const { navbarBoxShadow } = boxShadows;
  const { rgba, pxToRem } = functions;
  const { borderRadius } = borders;

  let boxShadowValue = transparentNavbar || absolute 
    ? "none"
    : navbarBoxShadow;

  let backgroundColorValue = transparentNavbar || absolute 
    ? `${transparent.main} !important`
    : rgba(darkMode?background.default:white.main, 0.8);
  
  let backdropFilterValue = transparentNavbar || absolute 
  ? "none"
  : `saturate(200%) blur(${pxToRem(50)})`;
    // blur()       : lm mo, mo ho
    // brightness() : do sang
    // contrast()   : tuong phan
    // drop-shadow(): bong
    // grayscale()  : thang do xam
    // hue-rotate() : xoay mau
    // invert()     : 
    // opacity()  
    // saturate()   : bao hoa
    // sepia()      : nau do
    // url() – (for applying SVG filters): dung cho svg
  
  let colorValue = dark.main;
  if (light) {
    colorValue = white.main;
  } else if (transparentNavbar) {
    colorValue = text.main;
  } else {
    colorValue = dark.main;
  }


  return{
    boxShadow: boxShadowValue,
    backgroundColor: backgroundColorValue,
    backdropFilter: backdropFilterValue,
    color: colorValue,
    opacity: 1,
    top: absolute ? 0 : pxToRem(12),
    minHeight: pxToRem(75),
    display: "grid",
    alignItems: "center",
    borderRadius: borderRadius.xl,
    paddingTop: pxToRem(8),
    paddingBottom: pxToRem(8),
    paddingRight: absolute ? pxToRem(8) : 0,
    paddingLeft: absolute ? pxToRem(16) : 0,
    "& > *": {
      transition: transitions.create("all", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      [breakpoints.up("sm")]: {
        minHeight: "auto",
        padding: `${pxToRem(4)} ${pxToRem(16)}`,
      },
    },
  }
}
const NavbarMenuItem = (theme) => {

  const { palette, borders, transitions} = theme;

  const { secondary, light, dark } = palette;
  const { borderRadius } = borders;

  return{
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: secondary.main,
    borderRadius: borderRadius.md,
    transition: transitions.create("background-color", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    "& *": {
      transition: "color 100ms linear",
    },

    "&:not(:last-child)": {
      mb: 1,
    },

    "&:hover": {
      backgroundColor: light.main,

      "& *": {
        color: dark.main,
      },
    },
  }
}
const NotificationItem = forwardRef(({icon, title, ...rest}, ref)=>(
  <MenuItem {...rest} ref={ref} sx={(theme) => NavbarMenuItem(theme)}>
    <TTBox component={Link} py={0.5} display="flex" alignItems="center" lineHeight={1}>
      <TTTypography variant="body1" color="secondary" lineHeight={0.75}>
        {icon}
      </TTTypography>
      <TTTypography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
        {title}
      </TTTypography>
    </TTBox>
  </MenuItem>
));
function DashboardNavbar({absolute, light, isMini}){

  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);

  const route = useLocation().pathname.split("/").slice(1);
  console.log(route);
  console.log(useLocation().pathname);

  useEffect(()=>{

    //setting the navbar type
    if(fixedNavbar){ setNavbarType("sticky") }
    else{ setNavbarType("static") }

    //when scrolling the window.
    function handleTransparentNavbar(){
      // console.log("handleTransparentNavbar")
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }
    window.addEventListener("scroll", handleTransparentNavbar);
    //to set the state with the initial value
    handleTransparentNavbar();

    //remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  },[dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  
  //notification menu
  const MenuComp = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  )
  //style for navbar icon
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });
  return(
    <AppBar
      position={absolute?"absolute":navbarType}
      color="inherit"
      sx={(theme)=>navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme)=>navbarContainer(theme)}>
        {/* Breadcrumns */}
        <TTBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <BreadcrumbsTT icon="home" title={route[route.length-1]} route={route} light={false}/>
        </TTBox>
        {/*  */}
        {isMini?null:<TTBox sx={(theme)=>navbarRow(theme,{isMini})}>
          {/* search bar */}
          <TTBox pr={1}>
            <TTInput label={"Search here"}/>
          </TTBox>
          {/* icon tool */}
          <TTBox color={light?"white": "inherit"}>
            <Link href="/signin">
              <IconButton sx={navbarIconBtn} size="small" disableRipple>
                <Icon sx={iconsStyle}>account_circle</Icon>
              </IconButton>
            </Link>
            <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconBtn}
                onClick={handleConfiguratorOpen}
              >
                <Icon sx={iconsStyle}>settings</Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconBtn}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon sx={iconsStyle}>notifications</Icon>
              </IconButton>
              {MenuComp()}
          </TTBox>
        </TTBox>}
      </Toolbar>
    </AppBar>
  )
}
// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

//navbar
function DefaultNavbar({ transparent, light, action }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <TTBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={3}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="lg"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.sidenav : white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <TTBox
          component={MuiLink}
          to="/dashboard"
          py={transparent ? 1.5 : 0.75}
          lineHeight={1}
          pl={{ xs: 0, lg: 1 }}
        >
          <TTTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
            Learn Japanese
          </TTTypography>
        </TTBox>
        <TTBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          <DefaultNavbarLink icon={"donut_large"} name="dashboard" route="/dashboard" light={light}/>
          <DefaultNavbarLink icon={"person"} name="profile" route="/profile" light={light} />
          <DefaultNavbarLink icon={"account_circle"} name="sign up" route="/signup" light={light}/>
          <DefaultNavbarLink icon={"key"} name="sign in" route="/signin" light={light}/>
        </TTBox>
        <TTBox>
          {action &&
            (action.type === "internal" ? (
              <TTBox display={{ xs: "none", lg: "inline-block" }}>
                <TTButton
                  component={MuiLink}
                  // to={action.route}
                  href={action.route}
                  variant="gradient"
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </TTButton>
              </TTBox>
            ) : (
              <TTBox display={{ xs: "none", lg: "inline-block" }}>
                <TTButton
                  component="a"
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  variant="gradient"
                  color={action.color ? action.color : "info"}
                  size="small"
                  sx={{ mt: -0.3 }}
                >
                  {action.label}
                </TTButton>
              </TTBox>
            ))}
        </TTBox>

        <TTBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          {/* {mobileNavbar?<Close fontSize="default"/>:<Menu fontSize="default"/>} */}
        </TTBox>
      </TTBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </Container>
  );
}
// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};
// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
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
      label: PropTypes.string.isRequired,
    }),
  ]),
};

// default navbar link
function DefaultNavbarLink({ icon, name, route, light}) {
  // console.log(icon, name, route, light)
  return (
    <TTBox
      component={MuiLink}
      // to={"/signup"}
      href={route}
      mx={1}
      p={1}
      display="flex"
      alignItems="center"
      sx={{ cursor: "pointer", userSelect: "" }}
    >
      <Icon
        fontSize="small"
        sx={{
          color: ({ palette: { white, secondary } }) => (light ? white.main : secondary.main),
          verticalAlign: "middle",
        }}
      >
        {icon}
      </Icon>
      <TTTypography
        variant="button"
        fontWeight="regular"
        color={light ? "white" : "dark"}
        textTransform="capitalize"
        sx={{ width: "100%", lineHeight: 0 }}
      >
        &nbsp;{name}
      </TTTypography>
    </TTBox>
  );
}

// Typechecking props for the DefaultNavbarLink
DefaultNavbarLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

function DefaultNavbarMobile({ open, close }) {
  const { width } = open && open.getBoundingClientRect();

  return (
    <MenuCom
      getContentAnchorEl={null}
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

function BasicLayout({ image, children }) {

  // console.log("Basic layout");
  return (
    <PageLayout>
      <DefaultNavbar
        action={{
          type: "external",
          route: "http://www.google.com",
          label: "Learn Start",
          color: "dark",
        }}
        light={false}
      />
      <TTBox
        position="absolute"
        width="100%"
        minHeight="100vh"
        zIndex={-1}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <TTBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </TTBox>
      <Footer light />
    </PageLayout>
  );
}
// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
const SignIn = () => {

  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
    {/* <BasicLayout image={bgTest2}> */}
      <Card sx={{mt: 2}}>
        <TTBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <TTTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </TTTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <TTTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" fontSize="small"/>
              </TTTypography>
            </Grid>
            <Grid item xs={2}>
              <TTTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" fontSize="small"/>
              </TTTypography>
            </Grid>
            <Grid item xs={2}>
              <TTTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" fontSize="small"/>
              </TTTypography>
            </Grid>
          </Grid>
        </TTBox>
        <TTBox pt={4} pb={3} px={3}>
          <TTBox component="form" role="form">
            <TTBox mb={2}>
              <TTInput 
                type="email" 
                label="Email" 
                fullWidth
                // disabled 
                // error
                // success
              />
            </TTBox>
            <TTBox mb={2}>
              <TTInput type="password" label="Password" fullWidth />
            </TTBox>
            <TTBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <TTTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </TTTypography>
            </TTBox>
            <TTBox mt={4} mb={1}>
              <TTButton 
                variant="gradient" 
                color="info" 
                fullWidth = {true}
              >
                sign in
              </TTButton>
            </TTBox>
            <TTBox mt={3} mb={1} textAlign="center" display="flex" flexDirection="column">
              <TTTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <TTTypography
                  component={Link}
                  // to="/signup"
                  href="/signup"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient={true}
                >
                  Sign up
                </TTTypography>
              </TTTypography>
                <TTTypography
                  component={Link}
                  // to="/signup"
                  href="/reset"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient={true}
                >
                  Reset Password
                </TTTypography>

            </TTBox>
          </TTBox>
        </TTBox>
      </Card>
    </BasicLayout>
  );
}

function CoverLayout({coverHight, children, image}){

  return(
    <PageLayout>
      {/* defaultNavbar */}
      <DefaultNavbar 
        action={{
          type: "external",
          route: "http://www.google.com",
          label: "Test default",
          // color: "info",
        }}
        light={true}
        transparent={true}
      />
      {/* backgroundImage  */}
      <TTBox
        width="calc(100% - 2rem)"
        minHeight={coverHight}
        borderRadius="xl"
        m = {2}
        // mx={2}
        // my={2}
        pt={6}
        pb={28}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.4),
              rgba(gradients.dark.state, 0.4)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* content */}
      <TTBox
        mt = {{xs: -20, lg: -18}}
        mx = "auto"
        px = {1}
        width="calc(100% - 2rem)"
      >
        <Grid container spacing={1} justifyContent={"center"}>
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </TTBox>
      {/* foot */}
      <Footer />
    </PageLayout>
  )
}
CoverLayout.defaultProps = {
  coverHight: "35vh"
}
CoverLayout.propTypes = {
  coverHight: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
const SignUp = () => {
  return(
    <CoverLayout image={bgImage_su}>
    {/* <CoverLayout image={bgTest2}> */}
      <Card>
        {/* intro */}
        <TTBox
         variant = "gradient"
         bgColor = "info"
         borderRadius = "lg"
         coloredShadow = "success"
         mx={2}
         mt={-3}
         p={3}
         mb={1}
         textAlign="center"
        >
          <TTTypography
            variant = "h4"
            fontWeight = "medium"
            color = "white"
            mt = {1}
          >Join us today</TTTypography>
          <TTTypography
            display="block" 
            variant="button" 
            color="white" 
            my={1}
          >Enter your email and password to register</TTTypography>
        </TTBox>
        {/* content form*/}
        <TTBox
          component="form" role="form"
          pt={4} pb={3} px={3}
        >
          {/* input */}
          <TTBox>
            <TTBox mb={2}>
              <TTInput type="text" label="Name" variant="standard" fullWidth></TTInput>
            </TTBox>
            <TTBox mb={2}>
              <TTInput type="email" label="Email" variant="standard" fullWidth></TTInput>
            </TTBox>
            <TTBox mb={2}>
              <TTInput type="password" label="Password" variant="standard" fullWidth></TTInput>
            </TTBox>
          </TTBox>
          {/* term and condition */}
          <TTBox
            display="flex"
            alignItems="center"
            ml = {-1}
          >
            <Checkbox/>
            <TTTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
            >&nbsp;&nbsp;I agree the&nbsp;</TTTypography>
            <TTTypography
              component="a"
              href="#"
              variant="button"
              fontWeight="bold"
              color="info"
              textGradient = {true}
            >Terms and Conditions</TTTypography>
          </TTBox>
          {/* submit */}
          <TTBox mt={4} mb={1}>
            <TTButton
              variant="gradient"
              color="info"
              fullWidth
            >sign Up</TTButton>
          </TTBox>
          {/* form of footer */}
          <TTBox textAlign="center" mt={3} mb={1}>
            <TTTypography variant="button" color="text">
              Already have an account?{" "}
              <TTTypography
                component={MuiLink}
                // to={"/signin"}
                href={"/signin"}
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient={true}
              >Sign In</TTTypography>
            </TTTypography>
          </TTBox>
        </TTBox>
      </Card>
    </CoverLayout>
  )
}
const SignReset = () =>{
  return(
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <TTBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <TTTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </TTTypography>
          <TTTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </TTTypography>
        </TTBox>
        <TTBox pt={4} pb={3} px={3}>
          <TTBox component="form" role="form">
            <TTBox mb={4}>
              <TTInput type="email" label="Email" variant="standard" fullWidth />
            </TTBox>
            <TTBox mt={6} mb={1}>
              <TTButton variant="gradient" color="info" fullWidth>
                reset
              </TTButton>
            </TTBox>
          </TTBox>
        </TTBox>
      </Card>
    </CoverLayout>
  )
}


function MasterCard({ color, number, holder, expires }) {
  const numbers = [...`${number}`];

  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  const num1 = numbers.slice(0, 4).join("");
  const num2 = numbers.slice(4, 8).join("");
  const num3 = numbers.slice(8, 12).join("");
  const num4 = numbers.slice(12, 16).join("");

  return (
    <Card
      sx={({ palette: { gradients }, functions: { linearGradient }, boxShadows: { xl } }) => ({
        background: gradients[color]
          ? linearGradient(gradients[color].main, gradients[color].state)
          : linearGradient(gradients.dark.main, gradients.dark.state),
        boxShadow: xl,
        position: "relative",
      })}
    >
      <TTBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        opacity={0.2}
        sx={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
        }}
      />
      <TTBox position="relative" zIndex={2} p={2}>
        <TTBox color="white" p={1} lineHeight={0} display="inline-block">
          <Icon fontSize="default">wifi</Icon>
        </TTBox>
        <TTTypography variant="h5" color="white" fontWeight="medium" sx={{ mt: 3, mb: 5, pb: 1 }}>
          {num1}&nbsp;&nbsp;&nbsp;{num2}&nbsp;&nbsp;&nbsp;{num3}&nbsp;&nbsp;&nbsp;{num4}
        </TTTypography>
        <TTBox display="flex" justifyContent="space-between" alignItems="center">
          <TTBox display="flex" alignItems="center">
            <TTBox mr={3} lineHeight={1}>
              <TTTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Card Holder
              </TTTypography>
              <TTTypography
                variant="h6"
                color="white"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {holder}
              </TTTypography>
            </TTBox>
            <TTBox lineHeight={1}>
              <TTTypography variant="button" color="white" fontWeight="regular" opacity={0.8}>
                Expires
              </TTTypography>
              <TTTypography variant="h6" color="white" fontWeight="medium">
                {expires}
              </TTTypography>
            </TTBox>
          </TTBox>
          <TTBox display="flex" justifyContent="flex-end" width="20%">
            <TTBox component="img" src={masterCardLogo} alt="master card" width="60%" mt={1} />
          </TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  number: PropTypes.number.isRequired,
  holder: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
};
function PaymentMethod() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account">
      <TTBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <TTTypography variant="h6" fontWeight="medium">
          Payment Method
        </TTTypography>
        <TTButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new card
        </TTButton>
      </TTBox>
      <TTBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TTBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <TTBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
              <TTTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
              </TTTypography>
              <TTBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </TTBox>
            </TTBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <TTBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <TTBox component="img" src={visaLogo} alt="master card" width="10%" mr={2} />
              <TTTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
              </TTTypography>
              <TTBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </TTBox>
            </TTBox>
          </Grid>
        </Grid>
      </TTBox>
    </Card>
  );
}
function Invoice({ date, id, price, noGutter }) {
  return (
    <TTBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <TTBox lineHeight={1.125}>
        <TTTypography display="block" variant="button" fontWeight="medium">
          {date}
        </TTTypography>
        <TTTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </TTTypography>
      </TTBox>
      <TTBox display="flex" alignItems="center">
        <TTTypography variant="button" fontWeight="regular" color="text">
          {price}
        </TTTypography>
        <TTBox display="flex" alignItems="center" lineHeight={1} ml={3} sx={{ cursor: "pointer" }}>
          <Icon fontSize="small">picture_as_pdf</Icon>
          <TTTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </TTTypography>
        </TTBox>
      </TTBox>
    </TTBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};
function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <TTBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <TTTypography variant="h6" fontWeight="medium">
          Invoices
        </TTTypography>
        <TTButton variant="outlined" color="info" size="small">
          view all
        </TTButton>
      </TTBox>
      <TTBox p={2}>
        <TTBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2020" id="#MS-415646" price="$180" />
          <Invoice date="February, 10, 2021" id="#RV-126749" price="$250" />
          <Invoice date="April, 05, 2020" id="#QW-103578" price="$120" />
          <Invoice date="June, 25, 2019" id="#MS-415646" price="$180" />
          <Invoice date="March, 01, 2019" id="#AR-803481" price="$300" noGutter />
        </TTBox>
      </TTBox>
    </Card>
  );
}
function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <TTBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Transaction&apos;s
        </TTTypography>
        <TTBox display="flex" alignItems="flex-start">
          <TTBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </TTBox>
          <TTTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </TTTypography>
        </TTBox>
      </TTBox>
      <TTBox pt={3} pb={2} px={2}>
        <TTBox mb={2}>
          <TTTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            newest
          </TTTypography>
        </TTBox>
        <TTBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="expand_more"
            name="Netflix"
            description="27 March 2020, at 12:30 PM"
            value="- $ 2,500"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Apple"
            description="27 March 2020, at 04:30 AM"
            value="+ $ 2,000"
          />
        </TTBox>
        <TTBox mt={1} mb={2}>
          <TTTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            yesterday
          </TTTypography>
        </TTBox>
        <TTBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="expand_less"
            name="Stripe"
            description="26 March 2020, at 13:45 PM"
            value="+ $ 750"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="HubSpot"
            description="26 March 2020, at 12:30 PM"
            value="+ $ 1,000"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Creative Tim"
            description="26 March 2020, at 08:30 AM"
            value="+ $ 2,500"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Webflow"
            description="26 March 2020, at 05:00 AM"
            value="Pending"
          />
        </TTBox>
      </TTBox>
    </Card>
  );
}
function Transaction({ color, icon, name, description, value }) {
  return (
    <TTBox key={name} component="li" py={1} pr={2} mb={1}>
      <TTBox display="flex" justifyContent="space-between" alignItems="center">
        <TTBox display="flex" alignItems="center">
          <TTBox mr={2}>
            <TTButton variant="outlined" color={color} iconOnly circular>
              <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
            </TTButton>
          </TTBox>
          <TTBox display="flex" flexDirection="column">
            <TTTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </TTTypography>
            <TTTypography variant="caption" color="text" fontWeight="regular">
              {description}
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTTypography variant="button" color={color} fontWeight="medium" textGradient>
          {value}
        </TTTypography>
      </TTBox>
    </TTBox>
  );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

function Bill({ name, company, email, vat, noGutter }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <TTBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <TTBox width="100%" display="flex" flexDirection="column">
        <TTBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <TTTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {name}
          </TTTypography>

          <TTBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <TTBox mr={1}>
              <TTButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </TTButton>
            </TTBox>
            <TTButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;edit
            </TTButton>
          </TTBox>
        </TTBox>
        <TTBox mb={1} lineHeight={0}>
          <TTTypography variant="caption" color="text">
            Company Name:&nbsp;&nbsp;&nbsp;
            <TTTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {company}
            </TTTypography>
          </TTTypography>
        </TTBox>
        <TTBox mb={1} lineHeight={0}>
          <TTTypography variant="caption" color="text">
            Email Address:&nbsp;&nbsp;&nbsp;
            <TTTypography variant="caption" fontWeight="medium">
              {email}
            </TTTypography>
          </TTTypography>
        </TTBox>
        <TTTypography variant="caption" color="text">
          VAT Number:&nbsp;&nbsp;&nbsp;
          <TTTypography variant="caption" fontWeight="medium">
            {vat}
          </TTTypography>
        </TTTypography>
      </TTBox>
    </TTBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

function BillingInformation() {
  return (
    <Card id="delete-account">
      <TTBox pt={3} px={2}>
        <TTTypography variant="h6" fontWeight="medium">
          Billing Information
        </TTTypography>
      </TTBox>
      <TTBox pt={1} pb={2} px={2}>
        <TTBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </TTBox>
      </TTBox>
    </Card>
  );
}
const Billing = () => {

  return(
    <DashboardLayout>
      <TTBox mt={8}>
        <TTBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </TTBox>
        <TTBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </TTBox>
      </TTBox>
    </DashboardLayout>
  )
}
const profilesListData = [
  {
    image: kal,
    name: "Sophie B.",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: marie,
    name: "Anne Marie",
    description: "Awesome work, can you..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: ivana,
    name: "Ivanna",
    description: "About files I can..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: team4,
    name: "Peterson",
    description: "Have a great afternoon..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
  {
    image: team3,
    name: "Nick Daniel",
    description: "Hi! I need more information..",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "reply",
    },
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const ProfileHeader = ({children}) => {

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return(
    <TTBox position={"relative"} mb={5}>
      {/* header image */}
      <TTBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundProfile})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      {/*  */}
      <Card sx = {{
        position: "relative",
        mt: -8,
        mx: 3,
        py: 2,
        px: 2,
      }}>
        <Grid container spacing={3} alignItems="center">
          {/* avartar */}
          <Grid item>
            <TTAvatar src={taurus} alt="profile-image" size="xl" shadow="sm"/>
          </Grid>
          {/* name info */}
          <Grid item>
            <TTBox height="100%" mt={0.5} lineHeight={1}>
              <TTTypography variant="h5" fontWeight="medium">
                Thanh Tan
              </TTTypography>
              <TTTypography variant="button" color="text" fontWeight="regular">
                TEST / Co-Founder
              </TTTypography>
            </TTBox>
          </Grid>
          {/*  */}
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                {/* tab app */}
                <Tab 
                  label="App"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      home
                    </Icon>
                  }
                  {...a11yProps(0)}
                />
                {/* tab mesage */}
                <Tab
                  label="Message"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      email
                    </Icon>
                  }
                 {...a11yProps(1)}
                />
                {/* tab setting */}
                <Tab 
                  label="Settings"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      settings
                    </Icon>
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              Item Three
            </TabPanel>
          </Grid>
        </Grid>
        {children}
      </Card>
      
    </TTBox>
  )
}
// Setting default props for the Header
ProfileHeader.defaultProps = {
  children: "",
};

// Typechecking props for the Header
ProfileHeader.propTypes = {
  children: PropTypes.node,
};
function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <TTBox p={2}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </TTTypography>
      </TTBox>
      <TTBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <TTTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </TTTypography>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox mt={3}>
          <TTTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            application
          </TTTypography>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <TTBox mt={0.5}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </TTBox>
          <TTBox width="80%" ml={0.5}>
            <TTTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </TTTypography>
          </TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}
function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <TTBox p={2} mx={3} display="flex" justifyContent="center">
        <TTBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </TTBox>
      </TTBox>
      <TTBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </TTTypography>
        {description && (
          <TTTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </TTTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <TTTypography variant="h5" fontWeight="medium">
            {value}
          </TTTypography>
        )}
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
function ProfileInfoCard({ title, description, info, social, action, shadow }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <TTBox key={label} display="flex" py={1} pr={2}>
      <TTTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </TTTypography>
      <TTTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </TTTypography>
    </TTBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <TTBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </TTBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <TTBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </TTTypography>
        <TTTypography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </TTTypography>
      </TTBox>
      <TTBox p={2}>
        <TTBox mb={2} lineHeight={1}>
          <TTTypography variant="button" color="text" fontWeight="light">
            {description}
          </TTTypography>
        </TTBox>
        <TTBox opacity={0.3}>
          <Divider />
        </TTBox>
        <TTBox>
          {renderItems}
          <TTBox display="flex" py={1} pr={2}>
            <TTTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </TTTypography>
            {renderSocial}
          </TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};
function DefaultProjectCard({ image, label, title, description, action, authors }) {
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <TTAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <TTBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </TTBox>
      <TTBox mt={1} mx={0.5}>
        <TTTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
          {label}
        </TTTypography>
        <TTBox mb={1}>
          {action.type === "internal" ? (
            <TTTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </TTTypography>
          ) : (
            <TTTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </TTTypography>
          )}
        </TTBox>
        <TTBox mb={3} lineHeight={0}>
          <TTTypography variant="button" fontWeight="light" color="text">
            {description}
          </TTTypography>
        </TTBox>
        <TTBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <TTButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </TTButton>
          ) : (
            <TTButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </TTButton>
          )}
          <TTBox display="flex">{renderAuthors}</TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};
function ProfilesList({ title, profiles, shadow }) {
  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <TTBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <TTBox mr={2}>
        <TTAvatar src={image} alt="something here" shadow="md" />
      </TTBox>
      <TTBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <TTTypography variant="button" fontWeight="medium">
          {name}
        </TTTypography>
        <TTTypography variant="caption" color="text">
          {description}
        </TTTypography>
      </TTBox>
      <TTBox ml="auto">
        {action.type === "internal" ? (
          <TTButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </TTButton>
        ) : (
          <TTButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </TTButton>
        )}
      </TTBox>
    </TTBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <TTBox pt={2} px={2}>
        <TTTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </TTTypography>
      </TTBox>
      <TTBox p={2}>
        <TTBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

const Profile = () => {
  return(
    <DashboardLayout>
      <TTBox mb = {2}/>
      <ProfileHeader>
        {/* config */}
        <TTBox mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* platform setting */}
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            {/* profile info card */}
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard 
                title="profile information"
                description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  fullName: "Alec M. Thompson",
                  mobile: "(44) 123 1234 123",
                  email: "alecthompson@mail.com",
                  location: "USA",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            {/* profile list */}
            <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>
        </TTBox>
        {/* project */}
        <TTBox pt={2} px={2} lineHeight={1.25}>
          <TTTypography variant="h6" fontWeight="medium">
            Projects
          </TTTypography>
          <TTBox mb={1}>
            <TTTypography variant="button" color="text">
              Architects design houses
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #1"
                title="scandinavian"
                description="Music is something that everyone has their own specific opinion about."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="project #3"
                title="minimalist"
                description="Different people have different taste, and various types of music."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="project #4"
                title="gothic"
                description="Why would anyone pick blue over pink? Pink is obviously a better color."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </TTBox>
      </ProfileHeader>
    </DashboardLayout>
  )
}

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
// dashboard of footer
function FooterDash({company, links}){
  const { href, name } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <TTBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <TTTypography variant="button" fontWeight="regular" color="text">
            {link.name}
          </TTTypography>
        </Link>
      </TTBox>
    ));
  return(
    <TTBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <TTBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, made with
        <TTBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </TTBox>
        by
        <Link href={href} target="_blank">
          <TTTypography variant="button" fontWeight="medium">
            &nbsp;{name}&nbsp;
          </TTTypography>
        </Link>
        for a better web.
      </TTBox>
      <TTBox
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        {renderLinks()}
      </TTBox>
    </TTBox>
  )
}
FooterDash.defaultProps = {
  company: { href: "https://www.creative-tim.com/", name: "Tan Tan" },
  links: [
    { href: "https://www.google.com/", name: "Tan Tan" },
    { href: "https://www.google.com/presentation", name: "About Us" },
    { href: "https://www.google.com/blog", name: "Blog" },
    { href: "https://www.google.com/license", name: "License" },
  ],
}
FooterDash.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
}
// const ColorArr = [
//   "primary", "secondary", 
//   "info", "success", "error", "warning",
//   "light", "dark"
// ]
const AlertTable = () => {
  const alertContent = (name) => (
    <TTTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <TTTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </TTTypography>
      . Give it a click if you like.
    </TTTypography>
  );
  return(
    <Card>
    <TTBox p={2}>
      <TTTypography variant="h5">Alerts</TTTypography>
    </TTBox>
    <TTBox pt={2} px={2}>
      <TTAlert color="primary" dismissible={true}>
        {alertContent("primary")}
      </TTAlert>
    </TTBox>
     {/* <TTBox pt={2} px={2}>
     {ColorArr.map((itemColor) => alertContent(itemColor))}
       <Alert color="primary" dismissible> */}
       <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Stack>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
      <Stack spacing={2} p={5}>
        <Alert variant="outlined" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="filled" severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert variant="filled" severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>
     {/* <TTBox pt={2} px={2}>
       <Alert severity="primary" dismissible>
        {alertContent("primary")}
       </Alert>
       <Alert severity="secondary" dismissible>
       </Alert>
       <Alert severity="secondary" dismissible>
        {alertContent("secondary")}
      </Alert>
        <Alert severity="success" dismissible>
          {alertContent("success")}
        </Alert>
        <Alert severity="error" dismissible>
          {alertContent("error")}
        </Alert>
        <Alert severity="warning" dismissible>
          {alertContent("warning")}
        </Alert>
        <Alert severity="info" dismissible>
          {alertContent("info")}
        </Alert>
        <Alert severity="light" dismissible>
          {alertContent("light")}
        </Alert>
        <Alert severity="dark" dismissible>
          {alertContent("dark")}
        </Alert>
      </TTBox>  */}
    </Card>
  )
}
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
const NotifiTable = () => {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  //
  const ErrorSB = (<TTSnackbar
      color="error"
      icon="warning"
      title="Tan dep trai"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  )
  const SuccessSB = (
    <TTSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  )
  const WarningSB = (
    <TTSnackbar 
      color="warning"
      icon="star"
      title="Tan dep trai"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
    
  )
  // const [open, setOpen] = React.useState(false);
  const InfoSB = (
    <TTSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );
  

  const handleClick = () => {
    setInfoSB(true);
  };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };
  // const action = (
  //   <React.Fragment>
  //     <Button color="secondary" size="small" onClick={handleClose}>
  //       UNDO
  //     </Button>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="inherit"
  //       onClick={handleClose}
  //     >
  //       <CloseIcon fontSize="small" />
  //     </IconButton>
  //   </React.Fragment>
  // );

  return(
    <Card>
      <TTBox p={2} lineHeight={0}>
        <TTTypography variant="h5">Notifications</TTTypography>
        <TTTypography variant="button" color="text" fontWeight="regular">
          Notifications on this page use Toasts from Bootstrap. Read more details here.
        </TTTypography>
      </TTBox>
      <TTBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TTButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
              success notification
            </TTButton>
            <SuccessSB/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TTButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
              info notification
            </TTButton>
            <Button onClick={handleClick}>Open simple snackbar</Button>
            {InfoSB}
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TTButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
              warning notification
            </TTButton>
            {WarningSB}
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TTButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
              error notification
            </TTButton>
            {ErrorSB}
          </Grid>
        </Grid>
      </TTBox>
    </Card>
  )
}
const Notifications = () => {


  return(
<DashboardLayout>
  {/* <TTBox mt={6} mb={3}> */}
  <Grid container spacing={3} justifyContent="center" mt={6} mb={3}>
    <Grid item xs={12} lg={8}>
      <AlertTable/>
    </Grid>
    <Grid item xs={12} lg={8}>
      <NotifiTable/>
    </Grid>
  </Grid>
  {/* </TTBox> */}
</DashboardLayout>
  )
}


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
const ComplexStatisticsCard = ({
  color, title, count, percentage, icon
}) => {
  return(
    <Card>
      {/* content */}
      <TTBox display="flex" justifyContent="space-between" pt={1} px={2}>
        {/* icon */}
        <TTBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">{icon}</Icon>
        </TTBox>
        {/* title */}
        <TTBox textAlign="right" lineHeight={1.25}>
          <TTTypography variant="button" fontWeight="light" color="text">{title}</TTTypography>
          <TTTypography variant="h4">{count}</TTTypography>
        </TTBox>
      </TTBox>
      <Divider/>
      {/* percentage */}
      <TTBox pb={2} px={2}>
        <TTTypography
          component="p" 
          variant="button"
          color="text"
          display="flex"
        >
          <TTTypography 
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >{percentage.amount}</TTTypography>
          &nbsp;{percentage.label}
        </TTTypography>
      </TTBox>
    </Card>
  )
}
// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
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
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};
const DataOrder = [
  {
    color:"dark",
    icon:"weekend",
    title:"Bookings",
    count:281,
    percentage:{
      color: "success",
      amount: "+55%",
      label: "than lask week",
    }
  },
  {
    color:"primary",
    icon:"person_add",
    title:"Followers",
    count:"+91",
    percentage:{
      color: "success",
      amount: "",
      label: "Just updated",
    },
  },
  {
    icon:"leaderboard",
    title:"Today's Users",
    count:"2,300",
    percentage:{
      color: "success",
      amount: "+3%",
      label: "than last month",
    }
  },
  {
    color:"success",
    icon:"store",
    title:"Revenue",
    count:"34k",
    percentage:{
      color: "success",
      amount: "+1%",
      label: "than yesterday",
    }
  },
]
const DataTimeline = [
  {
    color:"success",
    icon:"notifications",
    title:"$2400, Design changes",
    dateTime:"22 DEC 7:20 PM",
  },
  {
    color:"error",
    icon:"inventory_2",
    title:"New order #1832412",
    dateTime:"21 DEC 11 PM",
  },
  {
    color:"warning",
    icon:"payment",
    title:"New card added for order #4395133",
    dateTime:"20 DEC 2:20 AM",
  },
  {
    color:"primary",
    icon:"vpn_key",
    title:"New card added for order #4395133",
    dateTime:"18 DEC 4:54 AM",
  },
]
// The Timeline main context
const TimelineCT = createContext();

// Timeline context provider
function TimelineProvider({ children, value }) {
  return <TimelineCT.Provider value={value}>{children}</TimelineCT.Provider>;
}

// Timeline custom hook for using context
function useTimeline() {
  return useContext(TimelineCT);
}
function TimelineList({ title, dark, children }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <TimelineProvider value={dark}>
      <Card>
        <TTBox
          bgColor={dark ? "dark" : "white"}
          variant="gradient"
          borderRadius="xl"
          sx={{ background: ({ palette: { background } }) => darkMode && background.card }}
        >
          <TTBox pt={3} px={3}>
            <TTTypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </TTTypography>
          </TTBox>
          <TTBox p={2}>{children}</TTBox>
        </TTBox>
      </Card>
    </TimelineProvider>
  );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
const TimelineChild = ({
  color, icon, title, dateTime, 
  description, lastItem
}) => {

  const isDark = useTimeline();

  return (
    <TTBox position="relative" mb={3} sx={(theme) => TimelineChildStyle(theme, { lastItem, isDark })}>
      <TTBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={color}
        color="white"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        position="absolute"
        top="8%"
        left="2px"
        zIndex={2}
        sx={{ fontSize: ({ typography: { size } }) => size.sm }}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </TTBox>
      <TTBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <TTTypography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
          {title}
        </TTTypography>
        <TTBox mt={0.5}>
          <TTTypography variant="caption" color={isDark ? "secondary" : "text"}>
            {dateTime}
          </TTTypography>
        </TTBox>
        <TTBox mt={2} mb={1.5}>
          {description ? (
            <TTTypography variant="button" color={isDark ? "white" : "dark"}>
              {description}
            </TTTypography>
          ) : null}
        </TTBox>
      </TTBox>
    </TTBox>
  );
}
// Setting default values for the props of TimelineItem
TimelineChild.defaultProps = {
  color: "info",
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineChild.propTypes = {
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
  description: PropTypes.string,
  lastItem: PropTypes.bool,
};
function TimelineChildStyle(theme, ownerState){

  const { borders } = theme;
  const { lastItem, isDark} = ownerState;

  const { borderWidth, borderColor} = borders;

  return{
    "&: after":{
      content: !lastItem && "''",
      position: "absolute",
      top: "2rem",
      left: "17px",
      height: "100%",
      opacity: isDark ? 0.1 : 1,
      borderRight: `${borderWidth[2]} solid ${borderColor}`,
    }
  }
}
const OrdersOverview = () => {

  return(
    <Card sx={{height: "100%"}}>
      {/* title */}
      <TTBox pt={3} px={3}>
        <TTTypography variant="h6" fontWeight="medium"> Orders Overview</TTTypography>
        <TTBox mt={0} mb={2}>
          <TTTypography variant="button" color="text" fontWeight="regular">
            <TTTypography
              display="inline" variant="body2" verticalAlign="middle"
            >
              <Icon
                sx={{color:({palette:{success}})=>success.main}}
              >arrow_upward</Icon>
            </TTTypography>&nbsp;
            <TTTypography
              variant="button" color="text" fontWeight="medium"
            >24%</TTTypography>{" "} this month
          </TTTypography>
        </TTBox>
      </TTBox>
      {/* content (timeline) */}
      <TTBox p={2}>
      {DataTimeline.map((item, index)=>(
        <TimelineChild key={index}
          color={item.color}
          icon={item.icon}
          title={item.title}
          dateTime={item.dateTime}
          lastItem={index===3}
        />
      ))}
      </TTBox>
    </Card>
  )
}
const ProjectDatas = () => {
  const avatars = (members) =>
  members.map(([image, name]) => (
    <Tooltip key={name} title={name} placeholder="bottom">
      <TTAvatar
        src={image}
        alt="name"
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    </Tooltip>
  ));

  const Company = ({ image, name }) => (
    <TTBox display="flex" alignItems="center" lineHeight={1}>
      <TTAvatar src={image} name={name} size="sm" />
      <TTTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </TTTypography>
    </TTBox>
  );

  return {
    columns: [
      { Header: "companies", accessor: "companies", width: "45%", align: "left" },
      { Header: "members", accessor: "members", width: "10%", align: "left" },
      { Header: "budget", accessor: "budget", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={logoXD} name="Material UI XD Version" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={60} color="info" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoAtlassian} name="Add Progress Track" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={10} color="info" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoSlack} name="Fix Platform Errors" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={100} color="success" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoSpotify} name="Launch our Mobile App" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={100} color="success" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoJira} name="Add the New Pricing Page" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $500
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={25} color="info" variant="gradient" label={false} />
          </TTBox>
        ),
      },
      {
        companies: <Company image={logoInvesion} name="Redesign New Online Shop" />,
        members: (
          <TTBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </TTBox>
        ),
        budget: (
          <TTTypography variant="caption" color="text" fontWeight="medium">
            $2,000
          </TTTypography>
        ),
        completion: (
          <TTBox width="8rem" textAlign="left">
            <TTProgress value={40} color="info" variant="gradient" label={false} />
          </TTBox>
        ),
      },
    ],
  };
}
function Projects() {
  const { columns, rows } = ProjectDatas();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <TTBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <TTBox>
          <TTTypography variant="h6" gutterBottom>
            Projects
          </TTTypography>
          <TTBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <TTTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>30 done</strong> this month
            </TTTypography>
          </TTBox>
        </TTBox>
        <TTBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </TTBox>
        {renderMenu}
      </TTBox>
      <TTBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </TTBox>
    </Card>
  );
}


function configsBarChart(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          tension: 0.4,
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          data: datasets.data,
          maxBarThickness: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
            color: "#fff",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    },
  };
}
function ReportsBarChart({ color, title, description, date, chart }) {
  const { data, options } = configsBarChart(chart.labels || [], chart.datasets || {});

  return (
    <Card sx={{ height: "100%" }}>
      <TTBox padding="1rem">
        {useMemo(
          () => (
            <TTBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              <Bar data={data} options={options} />
            </TTBox>
          ),
          [color, data, options]
        )}
        <TTBox pt={3} pb={1} px={1}>
          <TTTypography variant="h6" textTransform="capitalize">
            {title}
          </TTTypography>
          <TTTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </TTTypography>
          <Divider />
          <TTBox display="flex" alignItems="center">
            <TTTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </TTTypography>
            <TTTypography variant="button" color="text" fontWeight="light">
              {date}
            </TTTypography>
          </TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
ReportsBarChart.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};
const reportsBarChartData = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: { label: "Sales", data: [50, 20, 10, 22, 50, 10, 40] },
};
const reportsLineChartData = {
  sales: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Mobile apps", data: [50, 40, 300, 320, 500, 350, 200, 230, 500] },
  },
  tasks: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Desktop apps", data: [50, 40, 300, 220, 500, 250, 400, 230, 500] },
  },
};
function configsLineChart(labels, datasets) {
  return {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          tension: 0,
          pointRadius: 5,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(255, 255, 255, .8)",
          borderColor: "rgba(255, 255, 255, .8)",
          borderWidth: 4,
          backgroundColor: "transparent",
          fill: true,
          data: datasets.data,
          maxBarThickness: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    },
  };
}
function ReportsLineChart({ color, title, description, date, chart }) {
  const { data, options } = configsLineChart(chart.labels || [], chart.datasets || {});

  return (
    <Card sx={{ height: "100%" }}>
      <TTBox padding="1rem">
        {useMemo(
          () => (
            <TTBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              <Line data={data} options={options} key={"test1"}/>
            </TTBox>
          ),
          [color, data, options]
        )}
        <TTBox pt={3} pb={1} px={1}>
          <TTTypography variant="h6" textTransform="capitalize">
            {title}
          </TTTypography>
          <TTTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </TTTypography>
          <Divider />
          <TTBox display="flex" alignItems="center">
            <TTTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </TTTypography>
            <TTTypography variant="button" color="text" fontWeight="light">
              {date}
            </TTTypography>
          </TTBox>
        </TTBox>
      </TTBox>
    </Card>
  );
}

// Setting default values for the props of ReportsLineChart
ReportsLineChart.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsLineChart
ReportsLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

const Dashboard = () => {
  const { sales, tasks } = reportsLineChartData;
  return(
    <DashboardLayout>
      <TTBox py={3}>
        {/* grid totem */}
        <Grid container spacing={3}>
          {DataOrder.map((item, idx)=>(
            <Grid item xs={12} md={6} lg={3} key={idx}>
              <TTBox mb={1.5}>
                <ComplexStatisticsCard
                  color={item.color}
                  icon={item.icon}
                  title={item.title}
                  count={item.count}
                  percentage={{
                    color: item.percentage.color,
                    amount: item.percentage.amount,
                    label: item.percentage.label,
                  }}
                />
              </TTBox>
            </Grid>
          ))}

        </Grid>
        {/* chart */}
        <TTBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <TTBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </TTBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TTBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </TTBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TTBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks} 
                />
              </TTBox>
            </Grid>
          </Grid>
        </TTBox>
        {/* over view */}
        <TTBox>
          <Grid container spacing={3}>
          {/* project */}
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            {/* timeline view */}
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </TTBox>

      </TTBox>
    </DashboardLayout>
  )
}
function sidenavLogoLabel(theme, ownerState) {
  const { functions, transitions, typography, breakpoints } = theme;
  const { miniSidenav } = ownerState;

  const { pxToRem } = functions;
  const { fontWeightMedium } = typography;

  return {
    ml: 0.5,
    fontWeight: fontWeightMedium,
    wordSpacing: pxToRem(-1),
    transition: transitions.create("opacity", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    [breakpoints.up("xl")]: {
      opacity: miniSidenav ? 0 : 1,
    },
  };
}
function collapseItemStyle(theme, ownerState) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = ownerState;

  const { white, transparent, dark, grey, gradients } = palette;
  const { md } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem, rgba, linearGradient } = functions;

  return {
    background: active
      ? linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state)
      : transparent.main,
    color:
      (transparentSidenav && !darkMode && !active) || (whiteSidenav && !active)
        ? dark.main
        : white.main,
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: `${pxToRem(8)} ${pxToRem(10)}`,
    margin: `${pxToRem(1.5)} ${pxToRem(16)}`,
    borderRadius: borderRadius.md,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    boxShadow: active && !whiteSidenav && !darkMode && !transparentSidenav ? md : "none",
    [breakpoints.up("xl")]: {
      transition: transitions.create(["box-shadow", "background-color"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },

    "&:hover, &:focus": {
      backgroundColor: () => {
        let backgroundValue;

        if (!active) {
          backgroundValue =
            transparentSidenav && !darkMode
              ? grey[300]
              : rgba(whiteSidenav ? grey[400] : white.main, 0.2);
        }

        return backgroundValue;
      },
    },
  };
}

function collapseIconBoxStyle(theme, ownerState) {
  const { palette, transitions, borders, functions } = theme;
  const { transparentSidenav, whiteSidenav, darkMode, active } = ownerState;

  const { white, dark } = palette;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    minWidth: pxToRem(32),
    minHeight: pxToRem(32),
    color:
      (transparentSidenav && !darkMode && !active) || (whiteSidenav && !active)
        ? dark.main
        : white.main,
    borderRadius: borderRadius.md,
    display: "grid",
    placeItems: "center",
    transition: transitions.create("margin", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    "& svg, svg g": {
      color: transparentSidenav || whiteSidenav ? dark.main : white.main,
    },
  };
}

const collapseIconStyle = ({ palette: { white, gradients } }, { active }) => ({
  color: active ? white.main : gradients.dark.state,
});

function collapseTextStyle(theme, ownerState) {
  const { typography, transitions, breakpoints, functions } = theme;
  const { miniSidenav, transparentSidenav, active } = ownerState;

  const { size, fontWeightRegular, fontWeightLight } = typography;
  const { pxToRem } = functions;

  return {
    marginLeft: pxToRem(10),

    [breakpoints.up("xl")]: {
      opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
      maxWidth: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
      marginLeft: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : pxToRem(10),
      transition: transitions.create(["opacity", "margin"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& span": {
      fontWeight: active ? fontWeightRegular : fontWeightLight,
      fontSize: size.sm,
      lineHeight: 0,
    },
  };
}

function SidenavCollapse({icon, name, active, ...rest}){
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  return(
    <ListItem component={"li"}>
      <TTBox {...rest} sx={(theme)=>collapseItemStyle(theme,{
        active, transparentSidenav, whiteSidenav, darkMode, sidenavColor
      })}>
        <ListItemIcon sx={(theme)=>collapseIconBoxStyle(theme,{
          transparentSidenav, whiteSidenav, darkMode, active
        })}>
          {typeof icon === "string" ? (
            <Icon sx={(theme) => collapseIconStyle(theme, { active })}>{icon}</Icon>
          ) : (
            icon
          )}
        </ListItemIcon>
        <ListItemText
          primary={name}
          sx={(theme) =>
            collapseTextStyle(theme, {
              miniSidenav,
              transparentSidenav,
              whiteSidenav,
              active,
            })
          }
        />
      </TTBox>
    </ListItem>
  )
}
// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  active: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
function SideNavbar({color, brand, brandName, routes, ...rest}){

  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor} = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";
  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, whiteSidenav, transparentSidenav]);

  const ListRoute = routes.map(({
    type, name, icon, title, noCollapse, key, href, route
  })=>{
    let ItemValue
  
    switch (type) {
      case "collapse":
        ItemValue = href
          ?<Link key={key} href={href} target="_blank" rel="noreferrer" sx={{textDecoration:"none"}}>
            <SidenavCollapse
              icon={icon}
              name={name}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
          :<NavLink key={key} to={route}>
            <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
          </NavLink>
        break;
      case "title":
        ItemValue = (
          <TTTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >{title}</TTTypography>
        )
        break;
      case "divider":
        ItemValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        )
        break;
      default:
        break;
    }
    return ItemValue;
  });
  return(
    <SideNavbarStyle 
      {...rest}
      variant="permanent"
      ownerState={{transparentSidenav, whiteSidenav, miniSidenav, darkMode}}
    >
      {/* sideNav header */}
      <TTBox pt={3} pb={1} px={4} textAlign="center">
        {/* icon close */}
        <TTBox
          display={{xs:"block", xl: "none"}}
          position="absolute"
          top={0} right={0}
          p={1.5}
          onClick={closeSidenav}
          sx={{cursor:"pointer"}}
        >
          <TTTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </TTTypography>
        </TTBox>
        {/* title */}
        <TTBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <TTBox component="img" src={brand} alt="Brand" width="2rem" />}
          <TTBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <TTTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
              {brandName}
            </TTTypography>
          </TTBox>
        </TTBox>
      </TTBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      {/* sideNav content */}
      <List>
        {ListRoute}
      </List>
      {/* sideNav footer */}
      <TTBox p={2} mt="auto">
        <TTButton
          component="a"
          href="https://www.creative-tim.com/product/material-dashboard-pro-react"
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color={sidenavColor}
          fullWidth
        >
          contact me
        </TTButton>
      </TTBox>
    </SideNavbarStyle>
  )
}
SideNavbar.defaultProps = {
  color: "info",
  brand: "",
}
SideNavbar.propTypes = {
  color: PropTypes.oneOf([
    "primary", "secondary", 
    "info", "dark",
    "success", "error", "warning"
  ]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}
const SideNavbarStyle = styled(Drawer)(({theme, ownerState})=>{

  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const { transparentSidenav, whiteSidenav, miniSidenav, darkMode } = ownerState;

  const sidebarWidth = 250;
  const { transparent, gradients, white, background } = palette;
  const { xxl } = boxShadows;
  const { pxToRem, linearGradient } = functions;

  let backgroundValue = darkMode
    ? background.sidenav
    : linearGradient(gradients.dark.main, gradients.dark.state);

  if (transparentSidenav) {
    backgroundValue = transparent.main;
  } else if (whiteSidenav) {
    backgroundValue = white.main;
  }

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = () => ({
    background: backgroundValue,
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: pxToRem(96),
      overflowX: "hidden",
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });
  //style for the sidenav miniSidenav = true
  const drawerOpenStyles = () => ({
    background: backgroundValue,
    transform: "translateX(0)",
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: sidebarWidth,
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });
  return{
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",
      ...(miniSidenav?drawerCloseStyles():drawerOpenStyles()),
    }
  }
})

const ConfigButton = ({handleConfiguratorOpen}) => {
  return(
    <TTBox
      display="flex"
      justifyContent="center"
      shadow="sm"
      alignItems="center"
      position={"fixed"}
      width="3.25rem"
      height={"3.25rem"}
      bgColor="white"
      right={"2rem"}
      bottom="2rem"
      sx={{cursor: "pointer"}}
      color="dark"
      borderRadius="50%"
      onClick={handleConfiguratorOpen}
      zIndex={10}
    >
      <Icon fontSize="small" color="inherit">settings</Icon>
    </TTBox>
  )
}
const SwitchStyle = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
function ConfigNavbar(){

  const [controller, dispatch] = useMaterialUIController();
  const {
    openConfigurator,
    fixedNavbar,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => {
    setTransparentSidenav(dispatch, true);
    setWhiteSidenav(dispatch, false);
  };
  const handleWhiteSidenav = () => {
    setWhiteSidenav(dispatch, true);
    setTransparentSidenav(dispatch, false);
  };
  const handleDarkSidenav = () => {
    setWhiteSidenav(dispatch, false);
    setTransparentSidenav(dispatch, false);
  };
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => setDarkMode(dispatch, !darkMode);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    palette: { white, dark, background },
    borders: { borderWidth },
  }) => ({
    height: pxToRem(39),
    background: darkMode ? background.sidenav : white.main,
    color: darkMode ? white.main : dark.main,
    border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? background.sidenav : white.main,
      color: darkMode ? white.main : dark.main,
      border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,
    },
  });

  // sidenav type active button styles
  const sidenavTypeActiveButtonStyles = ({
    functions: { pxToRem, linearGradient },
    palette: { white, gradients, background },
  }) => ({
    height: pxToRem(39),
    background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
    color: darkMode ? background.sidenav : white.main,

    "&:hover, &:focus, &:focus:not(:hover)": {
      background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
      color: darkMode ? background.sidenav : white.main,
    },
  });  const ItemColor = ({color}) => {
    // console.log("color:",color);
    return(
      <IconButton 
        onClick={()=>setSidenavColor(dispatch, color)}
        sx={({
          borders:{borderWidth}, 
          palette:{white, dark, background},
          transitions,
        })=>({
          width: "24px",
          height: "24px",
          padding: 0,
          border: `${borderWidth[1]} solid ${darkMode ? background.sidenav : white.main}`,
          borderColor: ()=>{
            let borderColorValue = sidenavColor===color && dark.main;
            if(darkMode===sidenavColor===color){
              borderColorValue = white.main
            }
            return borderColorValue
          },
          transition: transitions.create("border-color", {
            easing: transitions.easing.sharp,
            duration: transitions.duration.shorter,
          }),
          backgroundImage: ({functions:{linearGradient}, palette:{gradients}})=>linearGradient(gradients[color].main, gradients[color].state),
          "&:not(:last-child)":{ mr: 1},
          "&:hover, &:focus, &:active": {
            borderColor: darkMode ? white.main : dark.main,
          },
        })}
      />
    )
  }
  return(
    <ConfigNavbarStyle variant="permanent" ownerState={{openConfigurator}}>
      {/* config header */}
      <TTBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <TTBox>
          <TTTypography variant={"h5"}>UI Configurator</TTTypography>
          <TTTypography variant={"body2"} color="text">
            See our dashboard options.
          </TTTypography>
        </TTBox>
        <Icon 
          onClick={handleCloseConfigurator}
          sx={({typography: {size}, palette:{dark, white}})=>({
            fontSize:  `${size.lg} !important`,
            color: darkMode?white.main:dark.main,
            stroke: "currentColor",                       //TODO: currentcolor
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}          
        >close</Icon>
      </TTBox>
      <Divider />
      {/* content */}
      <TTBox pt={0.5} px={3}>
        {/* config color */}
        <TTBox>
          <TTBox>
            <TTTypography variant="h6">Sidenav Colors</TTTypography>
          </TTBox>
          <TTBox  display="flex" mb={0.5} justifyContent="right">
            {sidenavColors.map((itemColor, index)=>(
              <ItemColor color={itemColor} key={itemColor}/>
            ))}
          </TTBox>
        </TTBox>
        <Divider />
        {/* config type*/}
        <TTBox my={1} lineHeight={1} >
          <TTTypography variant="h6">Sidenav Type</TTTypography>
          <TTTypography variant="button" color="text">
            Choose between different sidenav types.
          </TTTypography>

          <TTBox
            sx={{
              display: "flex",
              mt: 2,
              mr: 1,
            }}
          >
            <TTButton
              color="dark"
              variant="gradient"
              onClick={handleDarkSidenav}
              disabled={disabled}
              fullWidth
              sx={
                !transparentSidenav && !whiteSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              Dark
            </TTButton>
            <TTBox sx={{ mx: 1, width: "8rem", minWidth: "8rem" }}>
              <TTButton
                color="dark"
                variant="gradient"
                onClick={handleTransparentSidenav}
                disabled={disabled}
                fullWidth
                sx={
                  transparentSidenav && !whiteSidenav
                    ? sidenavTypeActiveButtonStyles
                    : sidenavTypeButtonsStyles
                }
              >
                Transparent
              </TTButton>
            </TTBox>
            <TTButton
              color="dark"
              variant="gradient"
              onClick={handleWhiteSidenav}
              disabled={disabled}
              fullWidth
              sx={
                whiteSidenav && !transparentSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              White
            </TTButton>
          </TTBox>
        </TTBox>
        <Divider/>
        {/* config mode navbar fixed*/}
        <TTBox>
          <TTTypography variant="h6">Mode</TTTypography>
          <TTBox
            display="flex"
            justifyContent= "space-between"
            alignItems= "center"
            lineHeight={1}
            pl={2}
          >
            <TTTypography variant="body2">Navbar Fixed</TTTypography>
            <Switch checked={fixedNavbar} onChange={handleFixedNavbar}/>
          </TTBox>
          <TTBox
            display="flex"
            justifyContent= "space-between"
            alignItems= "center"
            lineHeight={1}
            pl={2}
          >
            <TTTypography variant="body2">Light/Dark</TTTypography>
            <Switch checked={darkMode} onChange={handleDarkMode}/>
            <SwitchStyle checked={darkMode} onChange = {handleDarkMode}/>
          </TTBox>
        </TTBox>
      </TTBox>
      <Divider/>
      {/* config footer */}
      <TTBox px={3}>
        <TTBox mt={2} mb={2}>
            <TTButton
              component={Link}
              href="https://www.creative-tim.com/learning-lab/react/quick-start/material-dashboard/"
              target="_blank"
              rel="noreferrer"
              color={darkMode ? "light" : "dark"}
              variant="outlined"
              fullWidth
            >
              view documentation
            </TTButton>
        </TTBox>
        <TTBox display="flex" justifyContent="center">
          <GitHubButton
            href="https://github.com/creativetimofficial/material-dashboard-react"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/material-dashboard-react on GitHub"
          >
            Star
          </GitHubButton>
        </TTBox>
        <TTBox mt={2} textAlign="center">
          <TTBox mb={0.5}>
            <TTTypography variant="h6">Thank you for sharing!</TTTypography>
          </TTBox>

          <TTBox display="flex" justifyContent="center">
            <TTBox mr={1.5}>
              <TTButton
                component={Link}
                href="//twitter.com/intent/tweet?text=Check%20Material%20Dashboard%20React%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23react%20%mui&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-dashboard-react"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </TTButton>
            </TTBox>
            <TTButton
              component={Link}
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard-react"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </TTButton>
          </TTBox>
        </TTBox>
      </TTBox>
    </ConfigNavbarStyle>
  )
}
const ConfigNavbarStyle = styled(Drawer)(({theme, ownerState})=>{

  const { boxShadows, functions, transitions} = theme;
  const { lg } = boxShadows;
  const { pxToRem } = functions;
  const {openConfigurator} = ownerState;
  // console.log("openConfigurator:", openConfigurator);
  const configuratorWidth = 360;
   // drawer styles when openConfigurator={true}
  const drawerOpenStyles = () => ({
    width: configuratorWidth,
    left: "initial",
    right: 0,
    transition: transitions.create("right", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });
  // drawer styles when openConfigurator={false}
  const drawerCloseStyles = () => ({
    left: "initial",
    right: pxToRem(-350),
    transition: transitions.create("all", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });
  return{
    "& .MuiDrawer-paper": {
      height: "100vh",
      margin: 0,
      padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: "auto",
      ...(openConfigurator?drawerOpenStyles():drawerCloseStyles())
    },
  }
})

const ChildApp = () => {

  // console.log("child app")

  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    // direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;

  const [ isOnMouseEnter, setOnMouseEnter] = useState(false);

  

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !isOnMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (isOnMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  
  return(
    <ThemeProvider theme={darkMode?themeDark:themeLight}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <SideNavbar 
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Learn Japanese"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}            
          />
          <ConfigNavbar />
          <ConfigButton handleConfiguratorOpen={handleConfiguratorOpen}/>
        </>
      )}
      {layout === "vr" && <ConfigNavbar />}
      <Routes>
        {/* {getRoutes(routes)} */}
        {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
        <Route path="*" element={<Home />}/>
        <Route path="/test" element={<TestMaterial/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/reset" element={<SignReset/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/tables" element={<Tables />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/billing" element={<Billing />}/>
      </Routes>
    </ThemeProvider>
  )
}
const FullAppUi = () => {
  // console.log("full app")
  return(
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <ChildApp />
      </MaterialUIControllerProvider>
  </BrowserRouter>
  )

}
// Material context
const MaterialUI = createContext();

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

// Material reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Material context provider
function MaterialUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch, value) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav = (dispatch, value) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (dispatch, value) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
// const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch, value) => dispatch({ type: "DARKMODE", value });
// Theme
const colors = {
  background: {
    default: "#f0f2f5",
  },

  text: {
    main: "#7b809a",
    focus: "#7b809a",
  },

  transparent: {
    main: "transparent",
  },

  white: {
    main: "#ffffff",
    focus: "#ffffff",
  },

  black: {
    light: "#000000",
    main: "#000000",
    focus: "#000000",
  },

  primary: {
    main: "#e91e63",
    focus: "#e91e63",
  },

  secondary: {
    main: "#7b809a",
    focus: "#8f93a9",
  },

  info: {
    main: "#1A73E8",
    focus: "#1662C4",
  },

  success: {
    main: "#4CAF50",
    focus: "#67bb6a",
  },

  warning: {
    main: "#fb8c00",
    focus: "#fc9d26",
  },

  error: {
    main: "#F44335",
    focus: "#f65f53",
  },

  light: {
    main: "#f0f2f5",
    focus: "#f0f2f5",
  },

  dark: {
    main: "#344767",
    focus: "#2c3c58",
  },

  grey: {
    100: "#f8f9fa",
    200: "#f0f2f5",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },

  gradients: {
    primary: {
      main: "#EC407A",
      state: "#D81B60",
    },

    secondary: {
      main: "#747b8a",
      state: "#495361",
    },

    info: {
      main: "#49a3f1",
      state: "#1A73E8",
    },

    success: {
      main: "#66BB6A",
      state: "#43A047",
    },

    warning: {
      main: "#FFA726",
      state: "#FB8C00",
    },

    error: {
      main: "#EF5350",
      state: "#E53935",
    },

    light: {
      main: "#EBEFF4",
      state: "#CED4DA",
    },

    dark: {
      main: "#42424a",
      state: "#191919",
    },
  },

  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },

    twitter: {
      main: "#55acee",
      dark: "#3ea1ec",
    },

    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },

    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },

    pinterest: {
      main: "#cc2127",
      dark: "#b21d22",
    },

    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },

    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },

    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },

    dribble: {
      main: "#ea4c89",
      dark: "#e73177",
    },

    github: {
      main: "#24292e",
      dark: "#171a1d",
    },

    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },

    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },

  badgeColors: {
    primary: {
      background: "#f8b3ca",
      text: "#cc084b",
    },

    secondary: {
      background: "#d7d9e1",
      text: "#6c757d",
    },

    info: {
      background: "#aecef7",
      text: "#095bc6",
    },

    success: {
      background: "#bce2be",
      text: "#339537",
    },

    warning: {
      background: "#ffd59f",
      text: "#c87000",
    },

    error: {
      background: "#fcd3d0",
      text: "#f61200",
    },

    light: {
      background: "#ffffff",
      text: "#c7d3de",
    },

    dark: {
      background: "#8097bf",
      text: "#1e2e4a",
    },
  },

  coloredShadows: {
    primary: "#e91e62",
    secondary: "#110e0e",
    info: "#00bbd4",
    success: "#4caf4f",
    warning: "#ff9900",
    error: "#f44336",
    light: "#adb5bd",
    dark: "#404040",
  },

  inputBorderColor: "#d2d6da",

  tabs: {
    indicator: { boxShadow: "#ddd" },
  },
};
const { grey } = colors;
const borders = {
  borderColor: grey[300],

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(1.6),
    sm: pxToRem(2),
    md: pxToRem(6),
    lg: pxToRem(8),
    xl: pxToRem(12),
    xxl: pxToRem(16),
    section: pxToRem(160),
  },
};
const { black, white, tabs, coloredShadows } = colors;

const boxShadows = {
  xs: boxShadow([0, 2], [9, -5], black.main, 0.15),
  sm: boxShadow([0, 5], [10, 0], black.main, 0.12),
  md: `${boxShadow([0, 4], [6, -1], black.main, 0.1)}, ${boxShadow(
    [0, 2],
    [4, -1],
    black.main,
    0.06
  )}`,
  lg: `${boxShadow([0, 10], [15, -3], black.main, 0.1)}, ${boxShadow(
    [0, 4],
    [6, -2],
    black.main,
    0.05
  )}`,
  xl: `${boxShadow([0, 20], [25, -5], black.main, 0.1)}, ${boxShadow(
    [0, 10],
    [10, -5],
    black.main,
    0.04
  )}`,
  xxl: boxShadow([0, 20], [27, 0], black.main, 0.05),
  inset: boxShadow([0, 1], [2, 0], black.main, 0.075, "inset"),
  colored: {
    primary: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.primary,
      0.4
    )}`,
    secondary: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.secondary,
      0.4
    )}`,
    info: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.info,
      0.4
    )}`,
    success: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.success,
      0.4
    )}`,
    warning: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.warning,
      0.4
    )}`,
    error: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.error,
      0.4
    )}`,
    light: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.light,
      0.4
    )}`,
    dark: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.dark,
      0.4
    )}`,
  },

  navbarBoxShadow: `${boxShadow([0, 0], [1, 1], white.main, 0.9, "inset")}, 
                    ${boxShadow([0, 20], [27, 0], black.main, 0.05)}`,
  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], black.main, 0.2),
  },
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], tabs.indicator.boxShadow, 1),
  },
};
const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
};

const { info, dark } = colors;

const globals = {
  html: {
    scrollBehavior: "smooth",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
};
// const { dark } = colors;

const baseProperties = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(10.4),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(30),
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightBold,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties,
  },

  h2: {
    fontSize: pxToRem(36),
    lineHeight: 1.3,
    ...baseHeadingProperties,
  },

  h3: {
    fontSize: pxToRem(30),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h4: {
    fontSize: pxToRem(24),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h5: {
    fontSize: pxToRem(20),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h6: {
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  d1: {
    fontSize: pxToRem(80),
    ...baseDisplayProperties,
  },

  d2: {
    fontSize: pxToRem(72),
    ...baseDisplayProperties,
  },

  d3: {
    fontSize: pxToRem(64),
    ...baseDisplayProperties,
  },

  d4: {
    fontSize: pxToRem(56),
    ...baseDisplayProperties,
  },

  d5: {
    fontSize: pxToRem(48),
    ...baseDisplayProperties,
  },

  d6: {
    fontSize: pxToRem(40),
    ...baseDisplayProperties,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

const baseHeadingProperties_dark = {
  fontFamily: baseProperties.fontFamily,
  color: white.main,
  fontWeight: baseProperties.fontWeightBold,
};

const baseDisplayProperties_dark = {
  fontFamily: baseProperties.fontFamily,
  color: white.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography_dark = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties_dark,
  },

  h2: {
    fontSize: pxToRem(36),
    lineHeight: 1.3,
    ...baseHeadingProperties_dark,
  },

  h3: {
    fontSize: pxToRem(30),
    lineHeight: 1.375,
    ...baseHeadingProperties_dark,
  },

  h4: {
    fontSize: pxToRem(24),
    lineHeight: 1.375,
    ...baseHeadingProperties_dark,
  },

  h5: {
    fontSize: pxToRem(20),
    lineHeight: 1.375,
    ...baseHeadingProperties_dark,
  },

  h6: {
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties_dark,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  d1: {
    fontSize: pxToRem(80),
    ...baseDisplayProperties_dark,
  },

  d2: {
    fontSize: pxToRem(72),
    ...baseDisplayProperties_dark,
  },

  d3: {
    fontSize: pxToRem(64),
    ...baseDisplayProperties_dark,
  },

  d4: {
    fontSize: pxToRem(56),
    ...baseDisplayProperties_dark,
  },

  d5: {
    fontSize: pxToRem(48),
    ...baseDisplayProperties_dark,
  },

  d6: {
    fontSize: pxToRem(40),
    ...baseDisplayProperties_dark,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};
function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}
// function gradientChartLine(chart, color, opacity = 0.2) {
//   const ctx = chart.getContext("2d");
//   const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
//   const primaryColor = rgba(color, opacity).toString();

//   gradientStroke.addColorStop(1, primaryColor);
//   gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
//   gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");

//   return gradientStroke;
// }
function hexToRgb(color) {
  return chroma(color).rgb().join(", ");
}
function linearGradient(color, colorState, angle = 195) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}
function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}
function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const SM = `@media (min-width: ${sm}px)`;
const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;
const XL = `@media (min-width: ${xl}px)`;
const XXL = `@media (min-width: ${xxl}px)`;

const sharedClasses = {
  paddingRight: `${pxToRem(24)} !important`,
  paddingLeft: `${pxToRem(24)} !important`,
  marginRight: "auto !important",
  marginLeft: "auto !important",
  width: "100% !important",
  position: "relative",
};

const container = {
  [SM]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "540px !important",
    },
  },
  [MD]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "720px !important",
    },
  },
  [LG]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "960px !important",
    },
  },
  [XL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "1140px !important",
    },
  },
  [XXL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "1320px !important",
    },
  },
};
const icon = {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit",
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important",
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};
// const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
// const { md } = boxShadows;

const card = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: white.main,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: "visible",
    },
  },
};
const { text, 
  // info, 
  secondary, transparent } = colors;
const { size } = typography;

const buttonText = {
  base: {
    backgroundColor: transparent.main,
    minHeight: pxToRem(40),
    color: text.main,
    boxShadow: "none",
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: transparent.main,
      boxShadow: "none",
    },

    "&:focus": {
      boxShadow: "none",
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: "none",
    },

    "&:disabled": {
      boxShadow: "none",
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    color: info.main,

    "&:hover": {
      color: info.main,
    },

    "&:focus:not(:hover)": {
      color: info.focus,
      boxShadow: "none",
    },
  },

  secondary: {
    color: secondary.main,

    "&:hover": {
      color: secondary.main,
    },

    "&:focus:not(:hover)": {
      color: secondary.focus,
      boxShadow: "none",
    },
  },
};
const { fontWeightBold,
  //  size 
  } = typography;
// const { borderRadius } = borders;
// const { white, text, info, secondary } = colors;
// const { size } = typography;

const contained = {
  base: {
    backgroundColor: white.main,
    minHeight: pxToRem(40),
    color: text.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: white.main,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: info.main,

    "&:hover": {
      backgroundColor: info.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: info.focus,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },
};
const root = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.lg,
  padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "uppercase",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: "all 150ms ease-in",

  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65,
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};
// const { transparent, light, info, secondary } = colors;
// const { size } = typography;
const {light} = colors;
const outlined = {
  base: {
    minHeight: pxToRem(40),
    color: light.main,
    borderColor: light.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: transparent.main,
    borderColor: info.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },

  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },
};
const button = {
  defaultProps:{ disableRipple: false},  //ripple : effect gon song
  styleOverrides:{
    root: { ...root },
    contained: { ...contained.base },
    containedSizeSmall: { ...contained.small },
    containedSizeLarge: { ...contained.large },
    containedPrimary: { ...contained.primary },
    containedSecondary: { ...contained.secondary },
    outlined: { ...outlined.base },
    outlinedSizeSmall: { ...outlined.small },
    outlinedSizeLarge: { ...outlined.large },
    outlinedPrimary: { ...outlined.primary },
    outlinedSecondary: { ...outlined.secondary },
    text: { ...buttonText.base },
    textSizeSmall: { ...buttonText.small },
    textSizeLarge: { ...buttonText.large },
    textPrimary: { ...buttonText.primary },
    textSecondary: { ...buttonText.secondary },
  }
}
// const { white, gradients, grey, transparent } = colors;
// const { borderWidth } = borders;
// const { md } = boxShadows;
const { gradients } = colors
const switchButton = {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: gradients.dark.main,

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "&.Mui-checked": {
        color: gradients.dark.main,

        "&:hover": {
          backgroundColor: transparent.main,
        },

        "& .MuiSwitch-thumb": {
          borderColor: `${gradients.dark.main} !important`,
        },

        "& + .MuiSwitch-track": {
          backgroundColor: `${gradients.dark.main} !important`,
          borderColor: `${gradients.dark.main} !important`,
          opacity: 1,
        },
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important",
      },

      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },
    },

    thumb: {
      backgroundColor: white.main,
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey[400]}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey[400],
      border: `${borderWidth[1]} solid ${grey[400]}`,
      opacity: 1,
    },

    checked: {},
  },
};
// const { transparent } = colors;

const textField = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
    },
  },
};
// const { info, inputBorderColor, dark } = colors;
// const { size } = typography;
// const { borderWidth } = borders;
const {inputBorderColor} = colors
const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: info.main,
      },
    },
  },
};
// const { inputBorderColor, info, grey, transparent } = colors;
// const { borderRadius } = borders;
// const { size } = typography;

const inputOutlined = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: inputBorderColor,
      },

      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: info.main,
        },
      },
    },

    notchedOutline: {
      borderColor: inputBorderColor,
    },

    input: {
      color: grey[700],
      padding: pxToRem(12),
      backgroundColor: transparent.main,
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10),
    },

    multiline: {
      color: grey[700],
      padding: 0,
    },
  },
};
// const { text, info } = colors;
// const { size } = typography;

const inputLabel = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: text.main,
      lineHeight: 0.9,

      "&.Mui-focused": {
        color: info.main,
      },

      "&.MuiInputLabel-shrink": {
        lineHeight: 1.5,
        fontSize: size.md,

        "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
          fontSize: "0.85em",
        },
      },
    },

    sizeSmall: {
      fontSize: size.xs,
      lineHeight: 1.625,

      "&.MuiInputLabel-shrink": {
        lineHeight: 1.6,
        fontSize: size.sm,

        "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
          fontSize: "0.72em",
        },
      },
    },
  },
};
// const { lg } = boxShadows;
// const { size } = typography;
// const { text, white } = colors;
// const { borderRadius } = borders;

const menuCom = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },
  },
};
// const { light, text, dark } = colors;
// const { borderRadius } = borders;
// const { size } = typography;

const menuItem = {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: light.main,
        color: dark.main,
      },
    },
  },
};
// const { borderWidth, borderColor } = borders;
// const { transparent, info } = colors;
const {borderColor} = borders;
const checkbox = {
  styleOverrides: {
    root: {
      "& .MuiSvgIcon-root": {
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: pxToRem(20),
        height: pxToRem(20),
        color: transparent.main,
        border: `${borderWidth[1]} solid ${borderColor}`,
        borderRadius: pxToRem(5.6),
      },

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "&.Mui-focusVisible": {
        border: `${borderWidth[2]} solid ${info.main} !important`,
      },
    },

    colorPrimary: {
      color: borderColor,

      "&.Mui-checked": {
        color: info.main,

        "& .MuiSvgIcon-root": {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
            info.main,
            info.main
          )}`,
          borderColor: info.main,
        },
      },
    },

    colorSecondary: {
      color: borderColor,

      "& .MuiSvgIcon-root": {
        color: info.main,
        "&.Mui-checked": {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
            info.main,
            info.main
          )}`,
          borderColor: info.main,
        },
      },
    },
  },
};
// const { white } = colors;
// const { borderRadius } = borders;

const sidenav = {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: "nowrap",
      border: "none",
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: white.main,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};
// const { dark, transparent, white } = colors;

const divider = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${rgba(dark.main, 0)}, ${rgba(
        dark.main,
        0.4
      )}, ${rgba(dark.main, 0)}) !important`,
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${rgba(dark.main, 0)}, ${rgba(
        dark.main,
        0.4
      )}, ${rgba(dark.main, 0)}) !important`,
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${rgba(white.main, 0)}, ${white.main}, ${rgba(
        white.main,
        0
      )}) !important`,

      "&.MuiDivider-vertical": {
        backgroundImage: `linear-gradient(to bottom, ${rgba(white.main, 0)}, ${white.main}, ${rgba(
          white.main,
          0
        )}) !important`,
      },
    },
  },
};
// const { borderRadius } = borders;

const avatar = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out",
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: "auto",
    },
  },
};
// const { borderRadius } = borders;
// const { light } = colors;

const linearProgress = {
  styleOverrides: {
    root: {
      height: pxToRem(6),
      borderRadius: borderRadius.md,
      overflow: "visible",
      position: "relative",
    },

    colorPrimary: {
      backgroundColor: light.main,
    },

    colorSecondary: {
      backgroundColor: light.main,
    },

    bar: {
      height: pxToRem(6),
      borderRadius: borderRadius.sm,
      position: "absolute",
      transform: `translate(0, 0) !important`,
      transition: "width 0.6s ease !important",
    },
  },
};
// const { white } = colors;
// const { md } = boxShadows;
// const { borderRadius } = borders;

const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};
// const { borderRadius } = borders;

const tableHead = {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};
const appBar = {
  defaultProps: {
    color: "transparent",
  },

  styleOverrides: {
    root: {
      boxShadow: "none",
    },
  },
};
// const { borderWidth } = borders;
// const { light } = colors;

const tableCell = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};
// const { grey } = colors;
// const { size } = typography;

const breadcrumbs = {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },

    separator: {
      fontSize: size.sm,
      color: grey[600],
    },
  },
};
// const { transparent } = colors;
const iconButton = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};
const link = {
  defaultProps: {
    underline: "none",
    color: "inherit",
  },
};

// const { grey, white } = colors;
// const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

const tabstt = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: grey[100],
      borderRadius: borderRadius.xl,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: white.main,
      boxShadow: tabsBoxShadow.indicator,
      transition: "all 500ms ease",
    },
  },
};
// const { size, fontWeightRegular } = typography;
const { fontWeightRegular } = typography;
// const { borderRadius } = borders;
// const { dark } = colors;

const tabtt = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: pxToRem(4),
      borderRadius: borderRadius.lg,
      color: `${dark.main} !important`,
      opacity: "1 !important",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};
function gradientChartLine(chart, color, opacity = 0.2) {
  const ctx = chart.getContext("2d");
  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  const primaryColor = rgba(color, opacity).toString();

  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
  gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");

  return gradientStroke;
}
const themeDark = createTheme({
  breakpoints: { ...breakpoints },
  palette: { 
    ...colors,
    background: {
      default: "#1a2035",
      sidenav: "#1f283e",
      card: "#202940",
    },
    text: {
      main: "#ffffffcc",
      focus: "#ffffffcc",
    },
    light: {
      main: "#f0f2f566",
      focus: "#f0f2f566",
    },
    dark: {
      main: "#323a54",
      state: "#1a2035",
    },
  },
  typography: { ...typography_dark },
  boxShadows: { ...boxShadows,
    md: `${boxShadow([0, 2], [2, 0], black.main, 0.14)}, 
         ${boxShadow([0, 3], [1, -2],black.main, 0.2)}, 
         ${boxShadow([0, 1], [5, 0], black.main, 0.12)}`,
    navbarBoxShadow: `${boxShadow([0, 0], [1, 1], dark.main, 0.9, "inset")}, 
                      ${boxShadow([0, 20], [27, 0], black.main, 0.05)}`,

  },
  borders: { 
    ...borders,
    borderColor: rgba(white.main, 0.4),
  },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
    gradientChartLine
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    // MuiList: { ...list },
    // MuiListItem: { ...listItem },
    // MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    // MuiCardMedia: { ...cardMedia },
    // MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menuCom },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    // MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    // MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabstt },
    MuiTab: { ...tabtt },
    // MuiStepper: { ...stepper },
    // MuiStep: { ...step },
    // MuiStepConnector: { ...stepConnector },
    // MuiStepLabel: { ...stepLabel },
    // MuiStepIcon: { ...stepIcon },
    // MuiSelect: { ...select },
    // MuiFormControlLabel: { ...formControlLabel },
    // MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    // MuiRadio: { ...radio },
    // MuiAutocomplete: { ...autocomplete },
    // MuiPopover: { ...popover },
    // MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    // MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    // MuiDialog: { ...dialog },
    // MuiDialogTitle: { ...dialogTitle },
    // MuiDialogContent: { ...dialogContent },
    // MuiDialogContentText: { ...dialogContentText },
    // MuiDialogActions: { ...dialogActions },
  },
})
const themeLight = createTheme({
  breakpoints: { ...breakpoints },
  palette: { 
    ...colors,
    background: {
      default: "#f0f2f5",
    },
    text: {
      main: "#7b809a",
      focus: "#7b809a",
    },
    light: {
      main: "#f0f2f5",
      focus: "#f0f2f5",
    },
    dark: {
      main: "#42424a",
      state: "#191919",
    },
  },
  typography: { ...typography },
  boxShadows: { ...boxShadows,
    md: `${boxShadow([0, 4], [6, -1], black.main, 0.1)}, 
         ${boxShadow([0, 2], [4, -1], black.main, 0.06)}`,
    navbarBoxShadow: `${boxShadow([0, 0], [1, 1], white.main, 0.9, "inset")}, 
                      ${boxShadow([0, 20],[27, 0], black.main, 0.05 )}`,
  },
  borders: { 
    ...borders,
    borderColor: grey[300],
  },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
    gradientChartLine
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    // MuiList: { ...list },
    // MuiListItem: { ...listItem },
    // MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    // MuiCardMedia: { ...cardMedia },
    // MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menuCom },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    // MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    // MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabstt },
    MuiTab: { ...tabtt },
    // MuiStepper: { ...stepper },
    // MuiStep: { ...step },
    // MuiStepConnector: { ...stepConnector },
    // MuiStepLabel: { ...stepLabel },
    // MuiStepIcon: { ...stepIcon },
    // MuiSelect: { ...select },
    // MuiFormControlLabel: { ...formControlLabel },
    // MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    // MuiRadio: { ...radio },
    // MuiAutocomplete: { ...autocomplete },
    // MuiPopover: { ...popover },
    // MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    // MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    // MuiDialog: { ...dialog },
    // MuiDialogTitle: { ...dialogTitle },
    // MuiDialogContent: { ...dialogContent },
    // MuiDialogContentText: { ...dialogContentText },
    // MuiDialogActions: { ...dialogActions },
  },
});

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/signin",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/signup",
    component: <SignUp />,
  },
];

// const team2 = "../assets/images/team-2.jpg";
// const team3 = "../assets/images/team-3.jpg";
// const team4 = "../assets/images/team-4.jpg";
const PaginationStyle = styled(TTButton)(({ theme, ownerState }) => {
  const { borders, functions, typography, palette } = theme;
  const { variant, paginationSize, active } = ownerState;

  const { borderColor } = borders;
  const { pxToRem } = functions;
  const { fontWeightRegular, size: fontSize } = typography;
  const { light } = palette;

  // width, height, minWidth and minHeight values
  let sizeValue = pxToRem(36);

  if (paginationSize === "small") {
    sizeValue = pxToRem(30);
  } else if (paginationSize === "large") {
    sizeValue = pxToRem(46);
  }

  return {
    borderColor,
    margin: `0 ${pxToRem(2)}`,
    pointerEvents: active ? "none" : "auto",
    fontWeight: fontWeightRegular,
    fontSize: fontSize.sm,
    width: sizeValue,
    minWidth: sizeValue,
    height: sizeValue,
    minHeight: sizeValue,

    "&:hover, &:focus, &:active": {
      transform: "none",
      boxShadow: (variant !== "gradient" || variant !== "contained") && "none !important",
      opacity: "1 !important",
    },

    "&:hover": {
      backgroundColor: light.main,
      borderColor,
    },
  };
});

// The Pagination main context
const Context = createContext();

const TTPagination = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const context = useContext(Context);
    const paginationSize = context ? context.size : null;

    const value = useMemo(() => ({ variant, color, size }), [variant, color, size]);

    return (
      <Context.Provider value={value}>
        {item ? (
          <PaginationStyle
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            color={active ? context.color : "secondary"}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </PaginationStyle>
        ) : (
          <TTBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </TTBox>
        )}
      </Context.Provider>
    );
  }
);

// Setting default values for the props of TTPagination
TTPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

// Typechecking props for the TTPagination
TTPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(["gradient", "contained"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
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

function DataTableBodyCell({ noBorder, align, children }) {
  return (
    <TTBox
      component="td"
      textAlign={align}
      py={1.5}
      px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm,
        borderBottom: noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <TTBox
        display="inline-block"
        width="max-content"
        color="text"
        sx={{ verticalAlign: "middle" }}
      >
        {children}
      </TTBox>
    </TTBox>
  );
}

// Setting default values for the props of DataTableBodyCell
DataTableBodyCell.defaultProps = {
  noBorder: false,
  align: "left",
};

// Typechecking props for the DataTableBodyCell
DataTableBodyCell.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right", "center"]),
};


function DataTableHeadCell({ width, children, sorted, align, ...rest }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <TTBox
      component="th"
      width={width}
      py={1.5}
      px={3}
      sx={({ palette: { light }, borders: { borderWidth } }) => ({
        borderBottom: `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <TTBox
        {...rest}
        position="relative"
        textAlign={align}
        color={darkMode ? "white" : "secondary"}
        opacity={0.7}
        sx={({ typography: { size, fontWeightBold } }) => ({
          fontSize: size.xxs,
          fontWeight: fontWeightBold,
          textTransform: "uppercase",
          cursor: sorted && "pointer",
          userSelect: sorted && "none",
        })}
      >
        {children}
        {sorted && (
          <TTBox
            position="absolute"
            top={0}
            right={align !== "right" ? "16px" : 0}
            left={align === "right" ? "-5px" : "unset"}
            sx={({ typography: { size } }) => ({
              fontSize: size.lg,
            })}
          >
            <TTBox
              position="absolute"
              top={-6}
              color={sorted === "asc" ? "text" : "secondary"}
              opacity={sorted === "asc" ? 1 : 0.5}
            >
              <Icon>arrow_drop_up</Icon>
            </TTBox>
            <TTBox
              position="absolute"
              top={0}
              color={sorted === "desc" ? "text" : "secondary"}
              opacity={sorted === "desc" ? 1 : 0.5}
            >
              <Icon>arrow_drop_down</Icon>
            </TTBox>
          </TTBox>
        )}
      </TTBox>
    </TTBox>
  );
}

// Setting default values for the props of DataTableHeadCell
DataTableHeadCell.defaultProps = {
  width: "auto",
  sorted: "none",
  align: "left",
};

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  sorted: PropTypes.oneOf([false, "none", "asc", "desc"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
};

function DataTable({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  isSorted,
  noEndBorder,
}) {
  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries
    ? entriesPerPage.entries.map((el) => el.toString())
    : ["5", "10", "15", "20", "25"];
  const columns = useMemo(() => table.columns, [table]);
  const data = useMemo(() => table.rows, [table]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  // Set the default value for the entries per page when component mounts
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue, setPageSize]);

  // Set the entries per page value based on the select value
  const setEntriesPerPage = (value) => setPageSize(value);

  // Render the pagination
  const renderPagination = pageOptions.map((option) => (
    <TTPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </TTPagination>
  ));

  // Handler for the input to set the pagination index
  const handleInputPagination = ({ target: { value } }) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  // Customized page options starting from 1
  const customizedPageOptions = pageOptions.map((option) => option + 1);

  // Setting value for the pagination input
  const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

  // Search input value state
  const [search, setSearch] = useState(globalFilter);

  // Search input state handle
  const onSearchChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 100);

  // A function that sets the sorted value for the table
  const setSortedValue = (column) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asc";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  // Setting the entries starting point
  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  // Setting the entries ending point
  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      {entriesPerPage || canSearch ? (
        <TTBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          {entriesPerPage && (
            <TTBox display="flex" alignItems="center">
              <Autocomplete
                disableClearable
                value={pageSize.toString()}
                options={entries}
                onChange={(event, newValue) => {
                  setEntriesPerPage(parseInt(newValue, 10));
                }}
                size="small"
                sx={{ width: "5rem" }}
                renderInput={(params) => <TTInput {...params} />}
              />
              <TTTypography variant="caption" color="secondary">
                &nbsp;&nbsp;entries per page
              </TTTypography>
            </TTBox>
          )}
          {canSearch && (
            <TTBox width="12rem" ml="auto">
              <TTInput
                placeholder="Search..."
                value={search}
                size="small"
                fullWidth
                onChange={({ currentTarget }) => {
                  setSearch(search);
                  onSearchChange(currentTarget.value);
                }}
              />
            </TTBox>
          )}
        </TTBox>
      ) : null}
      <Table {...getTableProps()}>
        <TTBox component="thead">
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <DataTableHeadCell
                  {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                  width={column.width ? column.width : "auto"}
                  align={column.align ? column.align : "left"}
                  sorted={setSortedValue(column)}
                >
                  {column.render("Header")}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </TTBox>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <DataTableBodyCell
                    noBorder={noEndBorder && rows.length - 1 === key}
                    align={cell.column.align ? cell.column.align : "left"}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                    
                  </DataTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <TTBox
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
      >
        {showTotalEntries && (
          <TTBox mb={{ xs: 3, sm: 0 }}>
            <TTTypography variant="button" color="secondary" fontWeight="regular">
              Showing {entriesStart} to {entriesEnd} of {rows.length} entries
            </TTTypography>
          </TTBox>
        )}
        {pageOptions.length > 1 && (
          <TTPagination
            variant={pagination.variant ? pagination.variant : "gradient"}
            color={pagination.color ? pagination.color : "info"}
          >
            {canPreviousPage && (
              <TTPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
              </TTPagination>
            )}
            {renderPagination.length > 6 ? (
              <TTBox width="5rem" mx={1}>
                <TTInput
                  inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={(handleInputPagination, handleInputPaginationValue)}
                />
              </TTBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <TTPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
              </TTPagination>
            )}
          </TTPagination>
        )}
      </TTBox>
    </TableContainer>
  );
}

// Setting default values for the props of DataTable
DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
};

// Typechecking props for the DataTable
DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(["contained", "gradient"]),
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
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};


function authorsTableData() {
  const Author = ({ image, name, email }) => (
    <TTBox display="flex" alignItems="center" lineHeight={1}>
      <TTAvatar src={image} name={name} size="sm" />
      <TTBox ml={2} lineHeight={1}>
        <TTTypography display="block" variant="button" fontWeight="medium">
          {name}
        </TTTypography>
        <TTTypography variant="caption">{email}</TTTypography>
      </TTBox>
    </TTBox>
  );

  const Job = ({ title, description }) => (
    <TTBox lineHeight={1} textAlign="left">
      <TTTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </TTTypography>
      <TTTypography variant="caption">{description}</TTTypography>
    </TTBox>
  );

  return {
    columns: [
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "employed", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <TTBox ml={-1}>
            <Badge badgeContent="online" color="success" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <TTBox ml={-1}>
            <Badge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Job title="Executive" description="Projects" />,
        status: (
          <TTBox ml={-1}>
            <Badge badgeContent="online" color="success" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <TTBox ml={-1}>
            <Badge badgeContent="online" color="success" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <TTBox ml={-1}>
            <Badge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <TTBox ml={-1}>
            <Badge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
    ],
  };
}

function projectsTableData() {
  const Project = ({ image, name }) => (
    <TTBox display="flex" alignItems="center" lineHeight={1}>
      <TTAvatar src={image} name={name} size="sm" variant="rounded" />
      <TTTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </TTTypography>
    </TTBox>
  );

  const Progress = ({ color, value }) => (
    <TTBox display="flex" alignItems="center">
      <TTTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </TTTypography>
      <TTBox ml={0.5} width="9rem">
        <TTProgress color={color} value={value} />
      </TTBox>
    </TTBox>
  );

  return {
    columns: [
      { Header: "project", accessor: "project", width: "30%", align: "left" },
      { Header: "budget", accessor: "budget", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: <Project image={LogoAsana} name="Asana" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </TTTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoGithub} name="Github" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $5,000
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </TTTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoAtlassian} name="Atlassian" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $3,400
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </TTTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoSpotify} name="Spotify" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $14,000
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </TTTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoSlack} name="Slack" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $1,000
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </TTTypography>
        ),
        completion: <Progress color="error" value={0} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoInvesion} name="Invesion" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,300
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </TTTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
    ],
  };
}

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <TTBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <TTBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <TTTypography variant="h6" color="white">
                  Authors Table
                </TTTypography>
              </TTBox>
              <TTBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={false}
                  noEndBorder
                />
              </TTBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <TTBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <TTTypography variant="h6" color="white">
                  Projects Table
                </TTTypography>
              </TTBox>
              <TTBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </TTBox>
            </Card>
          </Grid>
        </Grid>
      </TTBox>
      {/* <FooterDash/> */}
    </DashboardLayout>
  );
}

export default FullAppUi;

