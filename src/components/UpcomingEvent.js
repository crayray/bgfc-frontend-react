import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { defaultProps } from "grommet";
import LoginModal from "./LoginModal"

export default function UpcomingEvent({ image, date, time,location, blurb, token}) {
  return (
    <Card
    raised
    >
    
      <Card.Content>
        <Image
          floated="center"
          src={image}
        />
       
      </Card.Content>
      <Card.Content extra>
         <Card.Header>{location}</Card.Header>
        <Card.Description style={{marginBottom: ".75em"}}>
        {blurb}
        </Card.Description>
        <div className="ui two buttons">
          {/* Pass down user props to RSVP modal for either RSVP or login */}
          {/* Also pass down the upcoming event details to the card */}
         
          <LoginModal
            token = {token}
            time= {time}
            date={date}
            location={location}
            image={image}


           />
        </div>
      </Card.Content>
    </Card>
  );
}
