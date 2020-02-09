import React from 'react'
import {  Card } from "semantic-ui-react";

export default function RestaurantCard({ name, desc }) {
    return (
       <Card>
           <Card.Content>
               <Card.Header>
                {name}
               </Card.Header>
           </Card.Content>
           <Card.Content>
               {desc}
           </Card.Content>
       </Card>
    )
}
