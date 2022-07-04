import { Icon } from "@mui/material";
import TTTypography from "../../../components/TTTypography";
import logoSpotify from "../assets/images/small-logos/logo-spotify.svg";
import LogoAsana from "../assets/images/small-logos/logo-asana.svg";
import logoGithub from "../assets/images/small-logos/github.svg";
import logoAtlassian from "../assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "../assets/images/small-logos/logo-slack.svg";
import logoInvesion from "../assets/images/small-logos/logo-invision.svg";
import TTBox from "../../../components/TTBox";
import TTAvatar from "../../../components/TTAvatar";
import TTProgress from "../../../components/TTProgress";

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
export default projectsTableData;