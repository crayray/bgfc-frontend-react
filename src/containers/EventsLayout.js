import React, { Component } from "react";
import UpcomingEvent from "../components/UpcomingEvent";
import { Container, Segment, Card, Grid, Header } from "semantic-ui-react";
import NavBar from "../components/NavBar";
import { events } from "../data/events";
// import RestaurantsMapWrapper from "../components/RestaurantsMapWrapper"

export default class EventsLayout extends Component {
    state= {
        jwt: "",
        user_id: "",
        rsvp: false

    }

    componentDidMount() {
        var token = localStorage.getItem('jwt');
        fetch(`http://localhost:4000/users/${localStorage.getItem("user_id")}`)
    .then(r => r.json())
    .then(response => {
        // console.log(response.id);
        this.setState({
          jwt: token,
          user_id: response.id
        })
        
    
      });
   console.log(this.props.history);
   
        
    }
handleRefresh = event => {
  this.setState(
    {
      rsvp: `${!this.state.rsvp}`
    }
  )
  this.props.history.push("/events");

}


  //  handleRsvp = (user, event) => {
  //     // console.log(event);
  //     // console.log(user);
      
  //     fetch("http://localhost:4000/rsvps", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json"
  //       },
  //       body: JSON.stringify({
  //         rsvp: {
  //           user_id: `${user}`,
  //           event_id: `${event}`
            
  //         }
  //       })
  //     })
  //     .then(r => r.json())
  //     .then(response => console.log(response)
  //       // this.setState({
  //       //   rsvp: `${!this.state.rsvp}`
  //       // })
  //     )
  //   }
  render() {
 
    return (
      <div>
        {/* <NavBar /> */}
        <Segment style={{ paddingTop: "8em" }} vertical>
          <Grid container>
            <Grid.Row>
              <Container centered textAlign="center">
                <Header as="h1" >Upcoming Events</Header>
              </Container>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment  vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Container centered>
                <Card.Group centered>
                  {events.map(event => (
                    <UpcomingEvent
                      image={event.image}
                      location={event.location_name}
                      blurb={event.blurb}
                      event_id={event.id}
                      token={this.state.jwt}
                      date={event.date}
                      time={event.time}
                      handleRefresh={this.handleRefresh}
                      rsvp={this.state.rsvp}
                      user_id={this.state.user_id}
                      key={event.id}
                      event_id={event.id}
                      
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
