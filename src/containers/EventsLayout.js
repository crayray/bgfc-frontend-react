import React, { Component } from 'react'
import UpcomingEvent from "../components/UpcomingEvent"
import { Container, Segment } from "semantic-ui-react"
import NavBar from "../components/NavBar"

export default class EventsLayout extends Component {
    render() {
        return (
           <div>
           <NavBar />
            <Segment>
               <UpcomingEvent />
               </Segment>
               </div>
        )
    }
}
