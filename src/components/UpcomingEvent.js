import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { defaultProps } from "grommet";

export default function UpcomingEvent({ image, name, blurb}) {
  return (
    <Card
    //  href='http://localhost:3000/login'
    // color="teal"
    raised
    >
    
      <Card.Content>
        <Image
          floated="center"
          // size="mini"
          src={image}
        />
        {/* <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta> */}
        {/* <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description> */}
      </Card.Content>
      <Card.Content extra>
         <Card.Header>{name}</Card.Header>
        {/* <Card.Meta>Meta info about CC</Card.Meta> */}
        <Card.Description style={{marginBottom: ".75em"}}>
        {blurb}
          {/* Casa Columbia has been around for a long time! Join us for one of Austin's favorites. */}
        </Card.Description>
        <div className="ui two buttons">
          <Button inverted color="olive">
            RSVP
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
