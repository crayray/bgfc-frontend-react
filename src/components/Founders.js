import React from "react";
import { Container, Segment, Grid, Header, Image } from "semantic-ui-react";


export default function Founders() {
  return (
    <div>
      <Grid columns={4} divided>
        <Grid.Row>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
