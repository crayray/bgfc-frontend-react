import React from 'react'
import { Grid, Image, Segment } from "semantic-ui-react";
import SignIn from "./SignIn"

export default function Login() {
    return (
        // <Container>
            <Segment>
                <Grid>
                <Grid.Row>
              <Grid.Column width={8}>
              <Image src='./bgfc-logo.svg' fluid />
              </Grid.Column>
              <Grid.Column width={8}>
                <SignIn></SignIn>
              </Grid.Column>
            </Grid.Row>
                </Grid>
            </Segment>
        // </Container>
    )
}
