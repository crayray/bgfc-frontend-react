import React, { Component } from 'react'
import UpcomingEvent from "../components/UpcomingEvent"
import { Container, Segment, Card, Grid } from "semantic-ui-react"
import NavBar from "../components/NavBar"

export default class EventsLayout extends Component {


    render() {

        const eventImages = ['http://localhost:3000/january_meetup.png', 'http://localhost:3000/december_meetup.png','http://localhost:3000/bgfc-logo.svg' ]
        return (
           <div>
           <NavBar />
           <Segment style={{ padding: "8em 0em" }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
            <Container centered>
            <Card.Group centered>
            {eventImages.map(image => (
                <UpcomingEvent 
                    imageName={image}
                />
            ))}
            </Card.Group>
            </Container>
            </Grid.Row>
      <Grid.Row></Grid.Row>
    </Grid>
  </Segment>
               </div>
        )
    }
}
