

// export default function EventsLayout() {
//     return (
//            <UpcomingEvent />
        
//     )
// }
import React, { Component } from 'react'
import UpcomingEvent from "../components/UpcomingEvent"
import { Container, Segment } from "semantic-ui-react"
import NavBar2 from "../components/NavBar2"

export default class EventsLayout extends Component {
    render() {
        return (
           <div>
           <NavBar2 />
            <Segment>
               <UpcomingEvent />
               </Segment>
               </div>
        )
    }
}
