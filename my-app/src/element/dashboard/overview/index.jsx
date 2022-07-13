import TimelineItem from "@mui/lab/TimelineItem";
import { Card, Icon } from "@mui/material";
import TTBox from "../../../components/TTBox";
import TTTypography from "../../../components/TTTypography";
import { DataTimeline } from './dataView/index';

const OrdersOverview = () => {

  return(
    <Card sx={{height: "100%"}}>
      {/* title */}
      <TTBox pt={3} px={3}>
        <TTTypography variant="h6" fontWeight="medium"> Orders Overview </TTTypography>
        <TTBox mt={0} mb={2}>
          <TTTypography variant="button" color="text" fontWeight="regular">
            <TTTypography
              display="inline" variant="body2" verticalAlign="middle"
            >
              <Icon sx={{color:({palette:{success}})=>success.main}}
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
        <TimelineItem key={index}
          color={item.color}
          icon={item.icon}
          title={item.title}
          dateTime={item.dateTime}
          lastitem={index===3?"true":"false"}
        />
      ))}
      </TTBox>
    </Card>
  )
}
export default OrdersOverview;