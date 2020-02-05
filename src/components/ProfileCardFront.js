import React from "react";
import { Button, Card, Image } from "semantic-ui-react";


export default function UpcomingEvent({ name, user_id, facebook, twitter, instagram, about, interest, linkedin }) {
    return (
      <Card
      raised
      >
      
        <Card.Content>
          <Image
            floated="center"
            src="http://localhost:3000/bgfc-logo.svg"
            size="medium"
            circular
          />
         
        </Card.Content>
        <Card.Content extra>
           <Card.Header>{name}</Card.Header>
          <Card.Description style={{marginBottom: ".75em"}}>
          {about}
          </Card.Description>
          <Card.Content>
         
              <p><strong>Instagram:</strong>@{instagram}</p>
              {twitter}
              {linkedin}
              {user_id}
              {interest}
              {facebook}
              
          </Card.Content>
          <div className="ui two buttons">
      
           
            {/* <RsvpTrigger
              token = {token}
              time= {time}
              date={date}
              location={location}
              image={image}
              event_id={event_id}
              handleRsvp={handleRsvp}
              rsvp={rsvp}
              user_id={user_id}
             */}
  
  
             />
          </div>
        </Card.Content>
      </Card>
    );
  }
  