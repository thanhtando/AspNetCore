
import { Link } from '@mui/material';
import PropTypes from 'prop-types';
import TTBox from '../../../../components/TTBox';
import TTTypography from '../../../../components/TTTypography';
import { typography } from '../../../../theme/components/typography';
import Icon from '@mui/material/Icon';

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
export default FooterDash;
