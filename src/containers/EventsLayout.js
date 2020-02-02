import React, { Component } from 'react'
import UpcomingEvent from "../components/UpcomingEvent"
import { Container, Segment } from "semantic-ui-react"
import NavBar from "../components/NavBar"

export default class EventsLayout extends Component {


    render() {

        const eventImages = ['http://localhost:3000/january_meetup.png', 'http://localhost:3000/december_meetup.png','http://localhost:3000/bgfc-logo.svg' ]
        return (
           <div>
           <NavBar />
            <Segment>
            {eventImages.map(image => (
                <UpcomingEvent 
                    imageName={image}
                />
            ))}
               </Segment>
               </div>
        )
    }
}
