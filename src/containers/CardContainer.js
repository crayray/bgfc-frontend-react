import React from 'react'
import { Container, Segment, Card, Grid, Header } from "semantic-ui-react";
import ProfileCardFront from "../components/ProfileCardFront"

export default function CardContainer({profiles}) {
    return (
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
                      about={profile.about}
                      facebook={profile.facebook}
                      instagram={profile.instagram}
                      twitter={profile.twitter}
                      linkedin={profile.linkedin}
                      interest={profile.interest1}
                      key={profile.profile_id}
                      
                  />
                ))}
                
              </Card.Group>
            </Container>
          </Grid.Row>
          <Grid.Row></Grid.Row>
        </Grid>
      </Segment>
    )
}
