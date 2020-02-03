import React from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";



const RsvpTrigger = ({token}) => {
  // let { token } = props;
  console.log(token)
  if (token === null) {
    return <LoginModal />
  } else {
    return <RsvpModal />
  }
};
export default RsvpTrigger;

const RsvpModal= () => (
  <Modal
    trigger={
      <Button inverted color="olive">
        RSVP
      </Button>
    }
  >
    <Modal.Header>Event Details HELLO FROM RSVP LAND!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="small" src="http://localhost:3000/woman_logo.png" />
      <Modal.Description>
        <Header>Casa Columbia (Event Name)</Header>
        <p>Time Date Address</p>
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

// export default LoginModal;

const LoginModal= () => (
  <Modal
    trigger={
      <Button inverted color="olive">
        RSVP
      </Button>
    }
  >
    <Modal.Header>Event Details</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="small" src="http://localhost:3000/woman_logo.png" />
      <Modal.Description>
        <Header>Casa Columbia (Event Name)</Header>
        <p>Time Date Address</p>
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

