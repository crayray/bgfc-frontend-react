import React from "react";
import { Container, Segment, Grid, Header, Image } from "semantic-ui-react";


export default function Founders() {
  return (
    <div>
    <Segment>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Image src="http://localhost:3000/logos/bgfc-logo-main.svg" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>

        </Grid.Row>
      </Grid>
      </Segment>
      <Segment>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>

        </Grid.Row>
      </Grid> 
      </Segment>
    </div>
  );
}
