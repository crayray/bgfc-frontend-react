import React from "react";
import { Button, Card, Image } from "semantic-ui-react";


export default class ProfileCardFront extends React.Component {

  constructor(props) {
    super(props);

    this.state={
       image_url : ""
    }
 }


 componentDidMount() {
   let id = this.props.profile_id
   fetch(`http://localhost:4000/profiles/${id}`)
   .then(response => response.json())
   .then(data => 
    this.setState({
      image_url: `http://localhost:4000/${data.avatar}`
    }))
   
 }

  render() {
    let { twitter, linkedin, interest, facebook, name, about} = this.props;
     return (
      <Card
      raised
      >
      
        <Card.Content>
          <Image
            floated="center"
            src= {this.state.image_url}
            size="medium"
            
          />
         
        </Card.Content>
        <Card.Content extra>
           <Card.Header>{name}</Card.Header>
          <Card.Description style={{marginBottom: ".75em"}}>
          {about}
          </Card.Description>
          <Card.Content>
         
              <p><strong>Instagram:</strong>@HANDLE_HERE</p>
              {twitter}
              {linkedin}
           
              {interest}
              {facebook}
              
          </Card.Content>
          <div className="ui two buttons">
      

  
  
             />
          </div>
        </Card.Content>
      </Card>
    )
  }
}







// export default function ProfileCardFront({ name, user_id, facebook, twitter, instagram, about, interest, linkedin, avatar }) {
//     return (
//       <Card
//       raised
//       >
      
//         <Card.Content>
//           <Image
//             floated="center"
//             src="http://localhost:3000/bgfc-logo.svg"
//             size="medium"
//             circular
//           />
         
//         </Card.Content>
//         <Card.Content extra>
//            <Card.Header>{name}</Card.Header>
//           <Card.Description style={{marginBottom: ".75em"}}>
//           {about}
//           </Card.Description>
//           <Card.Content>
         
//               <p><strong>Instagram:</strong>@{avatar}</p>
//               {twitter}
//               {linkedin}
//               {user_id}
//               {interest}
//               {facebook}
              
//           </Card.Content>
//           <div className="ui two buttons">
      
           
//             {/* <RsvpTrigger
//               token = {token}
//               time= {time}
//               date={date}
//               location={location}
//               image={image}
//               event_id={event_id}
//               handleRsvp={handleRsvp}
//               rsvp={rsvp}
//               user_id={user_id}
//              */}
  
  
//              />
//           </div>
//         </Card.Content>
//       </Card>
//     );
//   }
  