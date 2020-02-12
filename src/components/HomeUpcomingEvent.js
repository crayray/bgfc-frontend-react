import React from "react";
import { Card, Image, Container } from "semantic-ui-react";
import { defaultProps } from "grommet";
import RsvpTrigger from "./RsvpTrigger";
import "../stylesheets/HomePageLayout.css";

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
    <Card className="event-card" raised>
      <Card.Content>
        <Image floated="center" src={image} size="medium" rounded />
      </Card.Content>
      <Card.Content className="card-text" extra>
        <Card.Header textAlign="center" className="card-text">
          {location}
        </Card.Header>
        <Card.Description
          className="card-text"
          textAlign="center"
          style={{ marginBottom: ".75em" }}
        >
          {blurb}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
