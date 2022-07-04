import TTAvatar from "../../../components/TTAvatar";
import TTBox from "../../../components/TTBox";
import TTTypography from "../../../components/TTTypography";
import TTBadge from '../../../components/TTBagde/index';
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
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
            <TTBadge badgeContent="online" color="success" variant="gradient" size="sm" />
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
            <TTBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
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
            <TTBadge badgeContent="online" color="success" variant="gradient" size="sm" />
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
            <TTBadge badgeContent="online" color="success" variant="gradient" size="sm" />
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
            <TTBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
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
            <TTBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
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
export default authorsTableData;