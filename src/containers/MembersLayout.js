import React from 'react';
import NavBar from "../components/NavBar";
import { Container, Segment, Card, Grid, Header } from "semantic-ui-react";
import { events } from "../data/events";
import ProfileCardFront from "../components/ProfileCardFront"
import CreateProfileForm from "../components/CreateProfileForm"


export default class MembersLayout extends React.Component {
        state = {
            profiles: []
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

    render() {
        const { profiles } = this.state;
        return (
            <div>
              <NavBar />  
             <CreateProfileForm />
              <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container>
            <Grid.Row>
              <Container centered textAlign="center">
                <Header>Members</Header>
              </Container>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Container centered>
                <Card.Group centered>
                  {profiles.map(profile => (
                    <ProfileCardFront
                        name={profile.name}
                        user_id={profile.user_id}
                        profile_id={profile.profile_id}
                        // user_id={profile.user_id}
                        // about={profile.about}
                        // facebook={profile.facebook}
                        // instagram={profile.instagram}
                        // twitter={profile.twitter}
                        // linkedin={profile.linkedin}
                        // interest={profile.interest1}
                    />
                  ))}
                  
                </Card.Group>
              </Container>
            </Grid.Row>
            <Grid.Row></Grid.Row>
          </Grid>
        </Segment>
            </div>
        )
    }
}
