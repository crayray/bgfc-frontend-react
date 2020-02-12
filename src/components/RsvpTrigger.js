import React, { useState } from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import { Link, withRouter} from "react-router-dom";

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

    const { token, time, date, location, image, handleRefresh, user_id } = this.props;
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
          user_id={user_id}
          event_id={this.props.event_id}
          handleRsvp={this.props.handleRsvp}
          rsvp={this.props.rsvp}
          open={open}
          onOpen={this.openModal}
          onClose={this.closeModal}
          handleRefresh={handleRefresh}
          
        />
      );
    }
  }
}

export class RsvpModal extends React.Component {
  state = {
    rsvps: [],
    event_id: this.props.event_id,
    user_id: this.props.user_id,
    userRsvp: [],
    rsvp: false, 
    disabled: "",
    rsvpMsg: ""
  };

  componentDidMount() {
   const  user_id = localStorage.getItem("user_id")
    fetch(`http://localhost:4000/rsvps?event_id=${this.state.event_id}&user_id=${user_id}`)
      .then(r => r.json())
      .then(response =>
        this.setState({
          userRsvp: response.rsvps
        })
      );
  }

  componentDidUpdate(){
    const  user_id = localStorage.getItem("user_id")
    fetch(`http://localhost:4000/rsvps?event_id=${this.state.event_id}&user_id=${user_id}`)
      .then(r => r.json())
      .then(response =>
        this.setState({
          userRsvp: response.rsvps,
          rsvp: this.state.rsvp

        })
      );

      // this.state.rsvp === true ? this.setState({rsvp: false})
  }

  handleRsvp = (user, event) => {

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
      .then(response => {
        if(response.rsvps === 0){
          this.setState({
            userRsvp: response.rsvps
          })
        }
      })

      // .then(
      //   response => 
      //   this.setState({
      //     rsvp: `${!this.state.rsvp}`,
      //     rsvpMsg: "You've RSVP'd"
      //   })
      
      // )
      // .then(this.props.handleRefresh())
    
      // this.props.onClose()

  };

  render() {

          const { time, date, location } = this.props;

    if(this.state.userRsvp.length === 0) {
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
              <p>
                <strong>Date: {date} </strong> {this.props.date}
              </p>
              <p>
                <strong>Time:</strong> {time}
              </p>
              <p>
              <strong>Location:</strong> { location}
              </p>
             
              <p> {this.state.userRsvp.length !== 0 ? <p>You have  RSVP'd</p> :<p>You have not RSVP'd</p> }</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            
                <Button
                  color="olive"
                  icon
                  labelPosition="right"
                  user_id={this.props.user_id}
                  event_id={this.props.event_id}
                  onClick={() =>
                    this.handleRsvp(this.props.user_id, this.state.event_id)
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
            
            </Modal.Actions>)
                </Modal>
              )

    }else {

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
              <p>
                <strong>Date:</strong> {this.props.date}
              </p>
              <p>
                <strong>Time:</strong> {this.props.time}
              </p>
              <p>
                <strong>Location:</strong> {this.props.location}
              </p>
              <p> {this.state.userRsvp.length !== 0 ? <p>You have  RSVP'd</p> :<p>You have not RSVP'd</p> }</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
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
              
            </Modal.Actions>
            </Modal>)
             

    }

    
    // );
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

const RsvpModalWithRouter = withRouter(RsvpModal);
