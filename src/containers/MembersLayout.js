import React from 'react';
import NavBar from "../components/NavBar";


export default class MembersLayout extends React.Component {
    render() {
        return (
            <div>
              <NavBar />  
              <div style={{backgroundColor: "purple"}}>
            <h1> Hello from Members page</h1>
        </div>
            </div>
        )
    }
}
