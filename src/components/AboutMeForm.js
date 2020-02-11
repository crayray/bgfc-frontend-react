import React, { Component } from 'react'

// Took this out of the form to later conditionally display sections of the form
export default class AboutMeForm extends Component {

    
    render() {
        return (
            <Segment className="segment-padding">
            <Image className="border"  avatar size="small" src="http://localhost:3000/logos/bgfc-logo-neon.svg" style={{borderRadius: "50%"}}/>

              <Header as="h3">Name</Header>
              <Form.Input
                icon="user circle olive"
                name="name"
                placeholder="Your name here"
                value={this.state.name}
                onChange={this.handleOnChange}
                type="text"
                size="medium"
                className="input-margins"
              />
              <Header as="h3">Share a short blurb about yourself</Header>
              <Form.TextArea
                icon="quote right olive"
                name="about"
                placeholder="A blurb about me...."
                value={this.state.about}
                onChange={this.handleOnChange}
                size="big"
                className="input-margins"
              />
            </Segment>
        )
    }
}
