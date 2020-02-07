import React from 'react';
import NavBar from "../components/NavBar";
import { Container, Segment, Grid, Header } from "semantic-ui-react";
import { events } from "../data/events";
import ProfileCardFront from "../components/ProfileCardFront"
import CreateProfileForm from "../components/CreateProfileForm"
import SearchBar from "../components/SearchBar"
import CardContainer from './CardContainer';


export default class MembersLayout extends React.Component {
        state = {
            profiles: [],
            searchField: "",
            interestFilter: " "
        }
    componentDidMount() {
        fetch('http://localhost:4000/profiles', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept' : 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => 
            this.setState({
                profiles: data
            })
            )
    }

    onSearchChange= event => {
      
      this.setState({
        searchField: event.target.value
      })
      
    }


    onDropdownChange = (e, {value, text}) => {
      this.setState({
        interestFilter: value
      })
      console.log(value);
      
    }

  

    render() {
        

        const namefilteredProfiles = this.state.profiles.filter(profile => {
          return profile.name.toLowerCase().includes(this.state.searchField.toLowerCase());
       })


// Need to work on the logic for the dropdown filter. Hopefully once I get the filter working, it will conditionally render the props to the card Container
//based on which one was selected. 

      //  const interestFilteredProfiles = this.state.profiles.filter(profile => {
      //    return profile.interest1.includes(this.state.interestFilter)
      //  })
       
      //Morning attempt:
      // const interestFilteredProfiles = this.state.profiles.filter(profile => {
      //    if(profile.interest1.toLowerCase() === this.state.interestFilter.toLowerCase()){
      //      return profile
      //    }
      // })

      //  (this.state.interestFilter === null) ? 
      //   <CardContainer profiles={namefilteredProfiles} /> : <CardContainer profiles={interestFilteredProfiles}  />
      
        return (
            <div>
              {/* <NavBar />   */}
             {/* <CreateProfileForm /> */}
             <SearchBar onSearchChange={this.onSearchChange} onDropdownChange={this.onDropdownChange}/>
              <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container>
            <Grid.Row>
              <Container centered textAlign="center">
                <Header>Members</Header>
              </Container>
            </Grid.Row>
          </Grid>
        </Segment>
        <CardContainer profiles={namefilteredProfiles} />
            </div>
        )
    }
}
