
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