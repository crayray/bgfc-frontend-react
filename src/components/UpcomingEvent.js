import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { defaultProps } from "grommet";
import RsvpTrigger from "./RsvpTrigger"

export default function UpcomingEvent({ image, date, time,location, blurb, token, event_id, rsvp, user_id, handleRefresh }) {
  return (
    <Card
    raised
    >
    
      <Card.Content>
        <Image
          floated="center"
          src={image}
          size="medium"
          rounded
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
            event_id={event_id}
            handleRefresh={handleRefresh}
            rsvp={rsvp}
            user_id={user_id}
            event_id={event_id}
         


           />
        </div>
      </Card.Content>
    </Card>
  );
}
