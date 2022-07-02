
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
