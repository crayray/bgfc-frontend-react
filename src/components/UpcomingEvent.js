import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { defaultProps } from "grommet";

export default function UpcomingEvent({imageName}) {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="center"
          // size="mini"
          src= {imageName}
        />
        {/* <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta> */}
        {/* <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button inverted color="olive">
            RSVP
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
