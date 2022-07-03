
import TTBox from '../../../components/TTBox/index';
import Icon from "@mui/material/Icon";

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

export default ConfigButton;