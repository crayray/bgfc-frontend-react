import React, { Component } from "react";
import UpcomingEvent from "../components/UpcomingEvent";
import { Container, Segment, Card, Grid, Header } from "semantic-ui-react";
import NavBar from "../components/NavBar";
import { events } from "../data/events";

export default class EventsLayout extends Component {
    state= {
        jwt: "",
        userId: ""
    }

    componentDidMount() {
        var token = localStorage.getItem('jwt');
       
        this.setState({
            jwt: token
        }, () => console.log(this.state.jwt))


        
    }

    
  render() {
    return (
      <div>
        <NavBar />
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container>
            <Grid.Row>
              <Container centered textAlign="center">
                <Header>Upcoming Events</Header>
              </Container>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Container centered>
                <Card.Group centered>
                  {events.map(event => (
                    <UpcomingEvent
                      image={event.image}
                      location={event.location_name}
                      blurb={event.blurb}
                      id={event.id}
                      token={this.state.jwt}
                      date={event.date}
                      time={event.time}
                    />
                  ))}
                </Card.Group>
              </Container>
            </Grid.Row>
            <Grid.Row></Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Header>What can I expect from the event?</Header>
        </Segment>
      </div>
    );
  }
}
