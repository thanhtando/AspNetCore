import { Card, Icon, Menu, MenuItem, Tooltip } from "@mui/material";
import TTAvatar from '../../../components/TTAvatar';
import TTBox from "../../../components/TTBox";
import TTTypography from "../../../components/TTTypography";
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
import TTProgress from '../../../components/TTProgress/index';
import { useState } from "react";
import DataTable from '../../common/datatable/index';

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
export default Projects;