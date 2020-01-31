import React from 'react'
import { Grid, Container, Segment } from "semantic-ui-react";
import SignIn from "./SignIn"

export default function Login() {
    return (
        <Container>
            <Segment>
                <Grid>
                <Grid.Row>
              <Grid.Column width={8}>
               
              </Grid.Column>
              <Grid.Column width={8}>
                <SignIn></SignIn>
              </Grid.Column>
            </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}
