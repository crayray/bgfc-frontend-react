// import React, { Component } from 'react'
// import { Button, Icon, Modal, Image, Header } from 'semantic-ui-react'

// class NestedModal extends Component {
//   state = { open: false }

//   open = () => this.setState({ open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     const { open } = this.state

//     return (
//       <Modal
//         open={open}
//         onOpen={this.open}
//         onClose={this.close}
//         size='small'
//         trigger={
//           <Button color="olive"  icon labelPosition='right'>
//             Login <Icon name='left chevron' />
//           </Button>
//         }
//       >
//         <Modal.Header>Modal #2</Modal.Header>
//         <Modal.Content>
//           <p>That's everything!</p>
//         </Modal.Content>
//         <Modal.Actions>
//           <Button icon='check' content='All Done' onClick={this.close} />
//         </Modal.Actions>
//       </Modal>
//     )
//   }
// }

// const ModalExampleMultiple = () => (
//   <Modal trigger={<Button color="olive">RSVP</Button>}>
//     <Modal.Header>Event Details</Modal.Header>
//     <Modal.Content image>
//       <Image wrapped size='small' src='http://localhost:3000/woman_logo.png' />
//       <Modal.Description>
//         <Header>Casa Columbia (Event Name)</Header>
//         <p>
//          Time
//          Date
//          Address
//         </p>
//       </Modal.Description>
//       <Modal.Description>
//           <p>Please login to RSVP.</p>
//       </Modal.Description>
//     </Modal.Content>
//     <Modal.Actions>
//     <Button icon labelPosition='left'>
//       <Icon name='close' />
//       Pause
//     </Button>
//       <NestedModal />
//     </Modal.Actions>
//   </Modal>
// )

// export default ModalExampleMultiple



import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";



const ModalModalExample = () => (
  <Modal trigger={<Button inverted color="olive">RSVP</Button>}>
    <Modal.Header>Event Details</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='small' src='http://localhost:3000/woman_logo.png' />
      <Modal.Description>
        <Header>Casa Columbia (Event Name)</Header>
        <p>
         Time
         Date
         Address
        </p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    <Button color="olive" icon labelPosition='left'>
      <Icon name='close' />
      <Link to="/signup">  Signup </Link>
    </Button>
    <Button color="olive"  icon labelPosition='right'>
         <Link to="/login">   Login</Link> <Icon name='right chevron' />
          </Button>
    </Modal.Actions>
    {/* <Modal.Actions>
      <NestedModal />
    </Modal.Actions> */}
  </Modal>
)

export default ModalModalExample