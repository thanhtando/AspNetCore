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
  Box, Button, Card, CssBaseline, Grid,
  Link, alpha, Paper, LinearProgress,
  styled, Typography, Switch, TextField, Checkbox, 
  AppBar, Drawer, Divider, 
  Avatar, List, ListItem, ListItemIcon, ListItemText, 
  Alert, TableContainer, Table, TableHead, TableRow, 
  TableCell, TableBody, TableSortLabel, 
  Tooltip, TablePagination, FormControlLabel, Autocomplete, Stack,
  // useTheme
} from "@mui/material";
import MenuCom from "@mui/material/Menu"
// prop-types is a library for typechecking of props
// chroma-js is a library for all kinds of color conversions and color scales.
import chroma, { scale } from "chroma-js";
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
import PropTypes, { func } from "prop-types";
import propTypes from "prop-types";
import Icon from '@mui/material/Icon';
// import { green } from "@mui/material/colors";

//test
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { 
  useTable, 
  useGlobalFilter, 
  useSortBy, 
  usePagination,
  useAsyncDebounce,
} from "react-table";
//resouces
//image
import logoSpotify from "../assets/images/small-logos/logo-spotify.svg";
import LogoAsana from "../assets/images/small-logos/logo-asana.svg";
import logoGithub from "../assets/images/small-logos/github.svg";
import logoAtlassian from "../assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "../assets/images/small-logos/logo-slack.svg";
import logoInvesion from "../assets/images/small-logos/logo-invision.svg";

const bgImage = require("../assets/images/bg-sign-in-basic.jpeg");
const bgImage_su = require("../assets/images/bg-sign-up-cover.jpeg");
const brandWhite = require("../assets/images/logo-ct.png");
const brandDark =  require("../assets/images/logo-ct-dark.png");
// const LogoAsana = require("../assets/images/small-logos/logo-asana.svg");
// const logoGithub = require("../assets/images/small-logos/github.svg");
// const logoAtlassian = require("../assets/images/small-logos/logo-atlassian.svg");
// const logoSlack = require("../assets/images/small-logos/logo-slack.svg");
// const logoSpotify = require("../assets/images/small-logos/logo-spotify.svg");

const team2 = require("../assets/images/team-2.jpg");
const team3 = require("../assets/images/team-3.jpg");
const team4 = require("../assets/images/team-4.jpg");

const Home = () => {

  console.log("home: test start")
  return(
    <TTBox>
      
      <TTTypography
        variant="button"
        fontWeight="medium"
        color={"primary"}
        textGradient = {false}
      >Home Page</TTTypography>
    Home
    </TTBox>
  )
}
//flexGrow:  chỉ định phần tử con đó sẽ được tăng chiều ngang (hoặc dọc nếu flex-direction là column) bao nhiêu so với các phần tử còn lại
//flexShrink: nó nói với trình duyệt kích thước nhỏ nhất mà phần tử nên có
//flexBasic:  nó quyết định kích thước lý tưởng của phần tử, mặc định là auto, hiểu nôm na là theo chiều rộng hay chiều dài của nội dung hay các phần tử khác.
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
        <TTProgress variant="gradient" {...props} />
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

  console.log("pageLayout");

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

function DashboardNavbar({absolute, light, isMini}){

  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [isOpenMenu, setOpenMenu] = useState(false);

  const route = useLocation().pathname.split("/").slice(1);
  useEffect(()=>{

    //setting the navbar type
    if(fixedNavbar){ setNavbarType("sticky") }
    else{ setNavbarType("static") }

    //when scrolling the window.
    function handleTransparentNavbar(){
      console.log("handleTransparentVavbar")
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }
    window.addEventListener("scroll", handleTransparentNavbar);
    //to set the state with the initial value
    handleTransparentNavbar();

    //remove event listener on cleanup
    return () => window.removeEventListener("scroll");
  },[dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  
  //notification menu
  const MenuComp = () => {
    
  }
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
    >
      {/*  */}
      {/*  */}
      {/*  */}
      <TTBox>
        <IconButton>
          <Icon sx={iconsStyle}>notifications</Icon>
        </IconButton>
      </TTBox>
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

//navibar
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
  console.log(icon, name, route, light)
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

  console.log("Basic layout");
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
            <TTBox mt={3} mb={1} textAlign="center">
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
      {/* defaultNavibar */}
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
const SignOut = () => {
  return(
    <TTBox>Sign Out</TTBox>
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
const Profile = () => {
  return(
    <TTBox>Profile</TTBox>
  )
}

const Notifications = () => {
  function alertContent(){
    return "abcd"
  }
  function openSuccessSB(){
    return "efgh"
  }
  function renderErrorSB(){
    return 5
  }
  return(
    <DashboardLayout>
      {/* <TTBox mt={6} mb={3}> */}
        <Grid container spacing={3} justifyContent="center" mt={6} mb={3} bgcolor="yellow">
          <Grid item xs={12} lg={8}>
            <Card>
              <TTBox p={2}>
                <TTTypography variant="h5">Alerts</TTTypography>
              </TTBox>
              {/* <TTBox pt={2} px={2}>
                <Alert color="primary" dismissible>
                  {alertContent("primary")}
                </Alert>
                <Alert color="secondary" dismissible>
                  {alertContent("secondary")}
                </Alert>
                <Alert color="success" dismissible>
                  {alertContent("success")}
                </Alert>
                <Alert color="error" dismissible>
                  {alertContent("error")}
                </Alert>
                <Alert color="warning" dismissible>
                  {alertContent("warning")}
                </Alert>
                <Alert color="info" dismissible>
                  {alertContent("info")}
                </Alert>
                <Alert color="light" dismissible>
                  {alertContent("light")}
                </Alert>
                <Alert color="dark" dismissible>
                  {alertContent("dark")}
                </Alert>
              </TTBox> */}
            </Card>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card>
              <TTBox p={2} lineHeight={0}>
                <TTTypography variant="h5">Notifications</TTTypography>
                <TTTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </TTTypography>
              </TTBox>
              <TTBox p={2}>
                {/* <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <TTButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
                      success notification
                    </TTButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <TTButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      info notification
                    </TTButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <TTButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
                      warning notification
                    </TTButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <TTButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
                      error notification
                    </TTButton>
[                    {renderErrorSB}
]                  </Grid>
                </Grid> */}
              </TTBox>
            </Card>
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
    })}> dashboard layout
      {children}
      {/* <Footer /> */}
    </TTBox>
  )
}
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
const Dashboard = () => {
  return(
    <DashboardLayout>
      {/* navbar */}
      {/* contentpage */}
      <Typography>Tan dep trai</Typography>
      {/* footer */}
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
  }, [dispatch, location]);

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
    <SidenavibarStyle 
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
    </SidenavibarStyle>
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
const SidenavibarStyle = styled(Drawer)(({theme, ownerState})=>{

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
    >
      <Icon fontSize="small" color="inherit">settings</Icon>
    </TTBox>
  )
}
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
            stroke: "currentcolor",
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

  console.log("child app")

  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
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
  // const ConfigButton = (
  //   <TTBox
  //     display="flex"
  //     justifyContent="center"
  //     shadow="sm"
  //     alignItems="center"
  //     position={"fixed"}
  //     width="3.25rem"
  //     height={"3.25rem"}
  //     bgColor="white"
  //     right={"2rem"}
  //     bottom="2rem"
  //     sx={{cursor: "pointer"}}
  //     color="dark"
  //     borderRadius="50%"
  //     onClick={handleConfiguratorOpen}
  //   >
  //     <Icon fontSize="small" color="inherit">settings</Icon>
  //   </TTBox>
  // )
  
  return(
    // direction === "rtl" ? (
    //   <CacheProvider value={rtlCache}>
    //     <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
    //       <CssBaseline />
    //       {layout === "dashboard" && (
    //         <>
    //           <Sidenav
    //             color={sidenavColor}
    //             brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
    //             brandName="Material Dashboard 2"
    //             routes={routes}
    //             onMouseEnter={handleOnMouseEnter}
    //             onMouseLeave={handleOnMouseLeave}
    //           />
    //           <Configurator />
    //           {configsButton}
    //         </>
    //       )}
    //       {layout === "vr" && <Configurator />}
    //       <Routes>
    //         {getRoutes(routes)}
    //         <Route path="*" element={<Navigate to="/dashboard" />} />
    //       </Routes>
    //     </ThemeProvider>
    //   </CacheProvider>
    // ) : (
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
          <Route path="/notifi" element={<Notifications/>}/>
          <Route path="/tables" element={<Tables />}/>
        </Routes>
      </ThemeProvider>
  )
}
const FullAppUi = () => {
  console.log("full app")
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
const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
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

    dribbble: {
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

  navbarBoxShadow: `${boxShadow([0, 0], [1, 1], white.main, 0.9, "inset")}, ${boxShadow(
    [0, 20],
    [27, 0],
    black.main,
    0.05
  )}`,
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
  defaultProps:{ disableRipple: false},  //ripple : hieu ung gon song
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
const themeDark = createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
})
const themeLight = createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
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
    // MuiIconButton: { ...iconButton },
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
    // MuiBreadcrumbs: { ...breadcrumbs },
    // MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    // MuiTooltip: { ...tooltip },
    // MuiAppBar: { ...appBar },
    // MuiTabs: { ...tabs },
    // MuiTab: { ...tab },
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
    // MuiLink: { ...link },
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
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
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
    route: "/notifi",
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

const ProgressStyle = styled(LinearProgress)(({theme, ownerState})=>{

  const { palette, functions } = theme;
  const { color, value, variant } = ownerState;

  let backgroundValue;
  if(variant === "gradient"){backgroundValue = gradients[color]
    ?linearGradient(gradients[color].main, gradients[color].state)
    :linearGradient(gradients.info.main, gradients.info.state);
  }else{
    backgroundValue = palette[color] ? palette[color].main : palette.info.main;
  }
  return{
    "& .MuiLinearProgress-bar":{
      backgroundColor: palette.error.main,
      width: `${value}%`,
      color: text.main,
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

// Setting default values for the props of MDProgress
TTProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the MDProgress
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

// Setting default values for the props of MDAvatar
TTAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Typechecking props for the MDAvatar
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
const authorsTableData = () => {

  return{
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
const Project = ({image, name}) => (
  <TTBox display="flex" alignItems="center" lineHeight={1}>
    <TTAvatar src={image} name={name} size="sm" variant="rounded"/>
    <TTTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
      {name}
    </TTTypography>
  </TTBox>
)
const Progress = ({color, value}) => {
  <TTBox display="flex" alignItems="center" zIndex={10}>
    <TTTypography variant="caption" color="text" fontWeight="medium">
      {value}%
    </TTTypography>
    <TTBox ml={0.5} width="9rem" bgColor="success">
      <TTProgress variant="gradient" color={color} value={value} />
    </TTBox>
  </TTBox>
}
// const DataJson = {
//   columns:[],
//   rows:[]
// }
const projectsTableData = () => {

  return{
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
  }
}

// table head cell
function DataTableHeadCell({
  width, children, sorted, align, ...rest
}){
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;

  return(
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
              color={sorted === "asce" ? "text" : "secondary"}
              opacity={sorted === "asce" ? 1 : 0.5}
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
  )
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
  sorted: PropTypes.oneOf([false, "none", "asce", "desc"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
};
function DataTableBodyCell({ noBorder, align, children }) {
  // console.log(children);
  return (
    <TTBox 
      bgColor = "info"
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
        bgColor = "error"
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

  // console.log("data",data);
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
  // console.log("page:", page);
  // Set the default value for the entries per page when component mounts
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

  // Set the entries per page value based on the select value
  const setEntriesPerPage = (value) => setPageSize(value);

  // Render the paginations
  // const renderPagination = pageOptions.map((option) => (
  //   <TTPagination
  //     item
  //     key={option}
  //     onClick={() => gotoPage(Number(option))}
  //     active={pageIndex === option}
  //   >
  //     {option + 1}
  //   </TTPagination>
  // ));

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
      sortedValue = column.isSortedDesc ? "desc" : "asce";
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
                    {/* {cell.render("cell")} */}
                    {console.log("cell",cell)}
                    <TTTypography>abc</TTTypography>
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
        {/* {pageOptions.length > 1 && (
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
        )} */}
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


const BasicTable = () => {

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return(
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableCell>Dessert </TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableHead>
        <TableBody>
          {rows.map((row)=>(
            <TableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const EnhancedTable = () => {

  function createData(name, calories, fat, carbs, protein) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }
  const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
  ];

  function descendingComparator(a, b, orderBy){
    if(b[orderBy] < a[orderBy]){ return -1}
    if(a[orderBy] < b[orderBy]){ return 1}
    return 0
  }
  function getComparator(order, orderBy){
    return order === "desc"
      ?(a,b)=>descendingComparator(a, b, orderBy)
      :(a,b)=>-descendingComparator(a, b, orderBy)
  }
  function stableSort(array, comparator){
    const stabilizedThis = array.map((el, index)=>[el, index]);
    stabilizedThis.sort((a,b)=>{
      const order = comparator(a[0], b[0]);
      if(order !== 0) { return order;}
      return a[1]-b[1]
    })
    return stabilizedThis.map((el)=>el[0]);

  }
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Dessert (100g serving)',
    },
    {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Calories',
    },
    {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'Fat (g)',
    },
    {
      id: 'carbs',
      numeric: true,
      disablePadding: false,
      label: 'Carbs (g)',
    },
    {
      id: 'protein',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)',
    },
  ];

  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Nutrition
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
// const  PaginationStyle = styled(TTButton)(({ theme, ownerState }) => {
//   const { borders, functions, typography, palette } = theme;
//   const { variant, paginationSize, active } = ownerState;

//   const { borderColor } = borders;
//   const { pxToRem } = functions;
//   const { fontWeightRegular, size: fontSize } = typography;
//   const { light } = palette;

//   // width, height, minWidth and minHeight values
//   let sizeValue = pxToRem(36);

//   if (paginationSize === "small") {
//     sizeValue = pxToRem(30);
//   } else if (paginationSize === "large") {
//     sizeValue = pxToRem(46);
//   }

//   return {
//     borderColor,
//     margin: `0 ${pxToRem(2)}`,
//     pointerEvents: active ? "none" : "auto",
//     fontWeight: fontWeightRegular,
//     fontSize: fontSize.sm,
//     width: sizeValue,
//     minWidth: sizeValue,
//     height: sizeValue,
//     minHeight: sizeValue,

//     "&:hover, &:focus, &:active": {
//       transform: "none",
//       boxShadow: (variant !== "gradient" || variant !== "contained") && "none !important",
//       opacity: "1 !important",
//     },

//     "&:hover": {
//       backgroundColor: light.main,
//       borderColor,
//     },
//   };
// });
// const Context = createContext();

// const TTPagination = forwardRef(
//   ({ item, variant, color, size, active, children, ...rest }, ref) => {
//     const context = useContext(Context);
//     const paginationSize = context ? context.size : null;

//     const value = useMemo(() => ({ variant, color, size }), [variant, color, size]);

//     return (
//       <Context.Provider value={value}>
//         {item ? (
//           <PaginationStyle
//             {...rest}
//             ref={ref}
//             variant={active ? context.variant : "outlined"}
//             color={active ? context.color : "secondary"}
//             iconOnly
//             circular
//             ownerState={{ variant, active, paginationSize }}
//           >
//             {children}
//           </PaginationStyle>
//         ) : (
//           <TTBox
//             display="flex"
//             justifyContent="flex-end"
//             alignItems="center"
//             sx={{ listStyle: "none" }}
//           >
//             {children}
//           </TTBox>
//         )}
//       </Context.Provider>
//     );
//   }
// );

// Setting default values for the props of Pagination
// TTPagination.defaultProps = {
//   item: false,
//   variant: "gradient",
//   color: "info",
//   size: "medium",
//   active: false,
// };

// // Typechecking props for the Pagination
// TTPagination.propTypes = {
//   item: PropTypes.bool,
//   variant: PropTypes.oneOf(["gradient", "contained"]),
//   color: PropTypes.oneOf([
//     "white",
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "error",
//     "light",
//     "dark",
//   ]),
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   active: PropTypes.bool,
//   children: PropTypes.node.isRequired,
// };

function Tables(){
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  return(
    <DashboardLayout>
      <TTBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <TTBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2} mt={-3}
                py={3}
                px={2}
              >
                <TTTypography variant="h6" color={"white"}>Authors Tables</TTTypography>
              </TTBox>
              <TTBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </TTBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
            <TTBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2} mt={-3}
                py={3}
                px={2}
              >
                <TTTypography variant="h6" color={"white"}>Project Tables</TTTypography>
              </TTBox>
              <TTBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                ></DataTable>
              </TTBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
            <TTBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2} mt={-3}
                py={3}
                px={2}
              >
                <TTTypography variant="h6" color={"white"}>Basic Tables</TTTypography>
              </TTBox>
              <TTBox pt={3}>
                {/* <BasicTable /> */}
              </TTBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
            <TTBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2} mt={-3}
                py={3}
                px={2}
              >
                <TTTypography variant="h6" color={"white"}>Enhanced Tables</TTTypography>
              </TTBox>
              <TTBox pt={3}>
                <EnhancedTable></EnhancedTable>
              </TTBox>
            </Card>
          </Grid>
        </Grid>
      </TTBox>
    </DashboardLayout>
  )
}

export default FullAppUi;



