import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { defaultProps } from "grommet";
import LoginModal from "./LoginModal"

export default function UpcomingEvent({ image, name, blurb, token}) {
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
       
      </Card.Content>
      <Card.Content extra>
         <Card.Header>{name}</Card.Header>
        {/* <Card.Meta>Meta info about CC</Card.Meta> */}
        <Card.Description style={{marginBottom: ".75em"}}>
        {blurb}
        </Card.Description>
        <div className="ui two buttons">
          {/* Pass down user props to RSVP modal for either RSVP or login */}
          {/* Also pass down the upcoming event details to the card */}
         
          <LoginModal
            token = {token}
           />
        </div>
      </Card.Content>
    </Card>
  );
}
