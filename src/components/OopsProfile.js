import React from 'react'
import "../stylesheets/OopsProfile.css"
import {
    Grid,
    Segment,
    Container,
    Header, 
    Image
  } from "semantic-ui-react";

export default function OopsProfile() {
    return (
        <div>
            <div className="page-container">
        <div className="bg" style={{ backgroundImage: 'url("http://localhost:3000/logos/bgfc-logo.svg")'}}></div>
        <h1 className="title">Oops! It looks like you already created a BGFC Profile!</h1>
      </div>
    </div>

    )
}
