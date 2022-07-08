import { 
  Card, CardMedia, 
  Link, 
  Tooltip 
} from "@mui/material";
import TTBox from "../../../components/TTBox";
import TTTypography from "../../../components/TTTypography";
import PropTypes from 'prop-types';
import TTAvatar from "../../../components/TTAvatar";
import TTButton from "../../../components/TTButton";

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
export default DefaultProjectCard;