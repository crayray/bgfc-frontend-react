import React from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";



const RsvpTrigger = props => {
  let { token, time, date, location, image } = props;
  
  console.log(token)
  if (token === null) {
    return <LoginModal
      token={token}
      time={time}
      date={date}
      location={location}
      image={image}

     />
  } else {
    return <RsvpModal
    token={token}
      time={time}
      date={date}
      location={location}
      image={image}
       />
  }
};
export default RsvpTrigger;

const RsvpModal= props => (
  <Modal
    trigger={
      <Button inverted color="olive">
        RSVP
      </Button>
    }
  >
    <Modal.Header>{props.location}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="small" src={props.image} />
      <Modal.Description>
        <Header>Event Details:</Header>
       <p><strong>Date:</strong> {props.date}</p>
       <p><strong>Time:</strong> {props.time}</p>
       <p><strong>Location:</strong> {props.location}</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Link to="/login">
        <Button color="olive" icon labelPosition="right">
          RSVP for this event
          <Icon name="right chevron" />
        </Button>
      </Link>
    </Modal.Actions>
  </Modal>
);



const LoginModal= props => (
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
       <p><strong>Date:</strong> {props.date}</p>
       <p><strong>Time:</strong> {props.time}</p>
       <p><strong>Location:</strong> {props.location}</p>
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
    {/* <Modal.Actions>
      <NestedModal />
    </Modal.Actions> */}
  </Modal>
);

