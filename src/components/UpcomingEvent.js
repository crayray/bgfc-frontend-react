import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { defaultProps } from "grommet";
import RsvpTrigger from "./RsvpTrigger"

export default function UpcomingEvent({ image, date, time,location, blurb, token, id, handleRsvp }) {
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
    
         
          <RsvpTrigger
            token = {token}
            time= {time}
            date={date}
            location={location}
            image={image}
            id={id}
            handleRsvp={handleRsvp}


           />
        </div>
      </Card.Content>
    </Card>
  );
}
