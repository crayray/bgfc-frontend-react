import React, { useState } from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import RestaurantsMapWrapper from "./RestaurantsMapWrapper"



export default class RsvpTrigger extends React.Component {
  state = {
    open: false
  };

  closeModal = () => this.setState({ open: false });
  openModal = () => this.setState({ open: true });

  render() {
    // console.log(token)
    const { open } = this.state;

    let { token, time, date, location, image, id } = this.props;
    if (this.props.token === null) {
      return (
        <LoginModal
          token={token}
          time={time}
          date={date}
          location={location}
          image={image}
        />
      );
    } else {
      return (
        <RsvpModal
          token={token}
          time={time}
          date={date}
          location={location}
          image={image}
          user_id={this.props.user_id}
          event_id={this.props.event_id}
          handleRsvp={this.props.handleRsvp}
          rsvp={this.props.rsvp}
          open={open}
          onOpen={this.openModal}
          onClose={this.closeModal}
        />
      );
    }
  }
}

export class RsvpModal extends React.Component {

  state= {
    rsvps: [],
    event_id: "",
    user_id: this.props.user_id,
    hasRsvpd: false
  }

  componentDidMount() {
    fetch("http://localhost:4000/rsvps")
    .then(r => r.json())
      .then(response => response.includes(response.event_id && this.state.user_id))
      .then(response => 
        this.setState({
          hasRsvpd: response
        }))
      //   this.setState({
      //     rsvps: response,
      //     hasRsvpd: false
      //   })
      // )
  }

  handleRsvp = (user, event) => {
    // console.log(event);
    // console.log(user);
    
    fetch("http://localhost:4000/rsvps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        rsvp: {
          user_id: `${user}`,
          event_id: `${event}`
          
        }
      })
    })
    .then(r => r.json())
    .then(response => console.log(response)
      // this.setState({
      //   rsvp: `${!this.state.rsvp}`
      // })
    )
  }
  
  render() {

    
    return (
      
      <Modal
        open={this.props.open}
        trigger={
          <Button inverted color="olive" onClick={() => this.props.onOpen()}>
            RSVP
          </Button>
        }
      >
        <Modal.Header>{this.props.location}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="small" src={this.props.image} />
          <Modal.Description>
            <Header>Event Details:</Header>
            <p><strong>Date:</strong> {this.props.date}</p>
            <p><strong>Time:</strong> {this.props.time}</p>
            <p><strong>Location:</strong> {this.props.location}</p>
            <p>Confirmation: You have RSVP'd: {this.props.rsvp}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {!this.props.rsvp ? (
           <div>
            <Button
              color="olive"
              icon
              labelPosition="right"
              user_id={this.props.user_id}
              event_id={this.props.event_id}
              onClick={() =>
                this.props.handleRsvp(this.props.user_id, this.props.event_id)
              }
            >
              RSVP for this event
              <Icon name="right chevron" />
            </Button>
            <Button
            color="olive"
            icon
            close
            labelPosition="right"
              onClick={() => this.props.onClose()}
            >
            Close 
            <Icon name="right close" />
            </Button>
            </div>
          ) : (
            <Button
              color="olive"
              icon
              labelPosition="right"
              user_id={this.props.user_id}
              event_id={this.props.event_id}
              onClick={() => this.props.onClose()}
            >
              Close RSVP
              <Icon name="right chevron" />
            </Button>
          )}
        </Modal.Actions>
      </Modal>
    );
  }
}

const LoginModal = props => (
  <Modal
    trigger={
      <Button inverted color="olive">
        RSVP
      </Button>
    }
  >
    <Modal.Header>{props.location}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="small" src="http://localhost:3000/woman_logo.png" />
      <Modal.Description>
        <Header>Event Details:</Header>
        <p>
          <strong>Date:</strong> {props.date}
        </p>
        <p>
          <strong>Time:</strong> {props.time}
        </p>
        <p>
          <strong>Location:</strong> {props.location}
        </p>
      </Modal.Description>
      <Modal.Description>
        <p>Please Login or Sign up to RSVP!</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Link to="/signup">
        <Button color="olive" icon labelPosition="left">
          <Icon name="close" />
          Signup
        </Button>
      </Link>
      <Link to="/login">
        <Button color="olive" icon labelPosition="right">
          Login
          <Icon name="right chevron" />
        </Button>
      </Link>
    </Modal.Actions>
  </Modal>
);
