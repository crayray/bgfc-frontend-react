import React from "react";
import { Card, Popup, Header, Label } from "semantic-ui-react";

export default function RestaurantCard({ name, desc, cuisine, yelp }) {
  return (
    <Popup
      position="left center"
      trigger={
        <Card href={yelp}>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Header as="h4">{desc}</Header>

            <Label as="a" color="teal" image>
              {cuisine}
            </Label>
          </Card.Content>
        </Card>
      }
    >
      <Popup.Content>Click me to see {name}'s' Yelp page!</Popup.Content>
    </Popup>
  );
}
