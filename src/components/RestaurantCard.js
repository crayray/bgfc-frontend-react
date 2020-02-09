import React from "react";
import { Card, Popup, Header } from "semantic-ui-react";

export default function RestaurantCard({ name, desc, cuisine, yelp }) {
  return (
    <Popup
     position='left center'
    trigger={
    <Card href={yelp}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
      <Card.Content>
        {desc}
        {cuisine}
      </Card.Content>
    </Card> }
    >
           <Popup.Content >Click me for my Yelp page!</Popup.Content>
 
    </Popup>
  );
}
