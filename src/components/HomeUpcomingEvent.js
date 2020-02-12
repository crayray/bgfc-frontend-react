import React from "react";
import { Card, Image, Container } from "semantic-ui-react";
import { defaultProps } from "grommet";
import RsvpTrigger from "./RsvpTrigger";

export default function HomeUpcomingEvent({
  image,
  date,
  time,
  location,
  blurb,
  token,
  event_id,
  rsvp,
  user_id,
  handleRefresh
}) {
  return (
    <Card raised>
      <Card.Content>
      {/* <Container style={{maxHeight: "50px"}}> */}
        <Image floated="center" src={image} size="medium" rounded  />
        {/* </Container> */}
      </Card.Content>
      <Card.Content extra>
        <Card.Header textAlign="center"  >{location}</Card.Header>
        <Card.Description  textAlign="center" style={{ marginBottom: ".75em" }}>
          {blurb}
        </Card.Description>
        {/* <div className="ui two buttons">
        
        </div> */}
      </Card.Content>
    </Card>
  );
}
