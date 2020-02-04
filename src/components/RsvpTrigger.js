import React, {useState} from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";



// Before converting to class component:
// const RsvpTrigger = props => {
//   let { token, time, date, location, image, id } = props;
  
  
  
//   console.log(token)
//   if (token === null) {
//     return <LoginModal
//       token={token}
//       time={time}
//       date={date}
//       location={location}
//       image={image}

//      />
//   } else {
//     return <RsvpModal
//     token={token}
//       time={time}
//       date={date}
//       location={location}
//       image={image}
//       id={id}
//        />
//   }
// };
// export default RsvpTrigger;


export default class RsvpTrigger extends React.Component {
  // state = {
  //   rsvp: false,
  //   user_id: 0
  // } 

  componentDidMount() {
    // fetch(`http://localhost:4000/users/${localStorage.getItem("user_id")}`)
    // .then(r => r.json())
    // .then(response => {
    //     // console.log(response.id);
    //     this.setState({
    //       user_id: response.id
    //     })
        
       
    //   });
      // console.log(this.state);
  }
  
  render() {
    // console.log(token)
    let { token, time, date, location, image, id } = this.props;
    if (this.props.token === null) {
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
        user_id={this.props.user_id}
        event_id={this.props.event_id}
        handleRsvp={this.props.handleRsvp}
        rsvp={this.props.rsvp}
         />
    }
   
  }
}

const handleFetch = (event, user) => {
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
}

// const handleRsvp = (event, user) => {
//   console.log(event);
//   console.log(user);
  
//   fetch("http://localhost:4000/rsvps", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       rsvp: {
//         user_id: `${user}`,
//         event_id: `${event}`
        
//       }
//     })
//   }) 
// }



export function RsvpModal(props) {
  const [rsvp, setRsvp] = useState(props);
  const {handleRsvp} = props;
  console.log(props);
  return(
 
  <Modal
    trigger={
      <Button inverted color="olive" >
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
       <p>Confirmation: You have RSVP'd: {props.rsvp}</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
        <Button color="olive" icon labelPosition="right" user_id={props.user_id}  event_id={props.event_id} onClick={() => props.handleRsvp(props.user_id, props.event_id )}>
          RSVP for this event
          <Icon name="right chevron" />
        </Button>
        {/* <NestedRsvpModal 
            user_id={props.user_id}
            event_id={props.event_id}
            handleRsvp={handleRsvp}
            
        /> */}
    </Modal.Actions>
  </Modal>
  )};

  const testRsvp = () => {
    console.log("This works");
    
  }
  export class NestedRsvpModal extends React.Component {
    state = { open: false }
  
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open } = this.state
  
      return (
        <Modal
          open={open}
          onOpen={this.open}
          onClose={this.close}
          size='small'
          trigger={
            <Button color="olive" icon labelPosition="right"   >
            {/* // <Button color="olive" icon labelPosition="right" onClick={() => testRsvp()}> */}
          RSVP for this event
          <Icon name="right chevron" />
        </Button>
          }
        >
          <Modal.Header>Modal #2</Modal.Header>
          <Modal.Content>
            <p>That's everything!</p>
          </Modal.Content>
          <Modal.Actions>
            <Button icon='check' content='All Done' onClick={this.close} />
          </Modal.Actions>
        </Modal>
      )
    }
  }

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
  </Modal>
);

