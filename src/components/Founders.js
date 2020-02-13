import React from "react";
import { Container, Segment, Grid, Header, Image } from "semantic-ui-react";
import "../stylesheets/Founders.css"

export default function Founders() {
  return (
    <div>
      <Segment>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <Header textAlign="center">Amber</Header>
              {/* <Grid.Row> */}
                <Grid columns={2} >
                <Grid.Row>
                <Grid.Column>
                  <Image  align="right" className="image-container" src="http://localhost:3000/founders/amber.jpg" />
                </Grid.Column>
                <Grid.Column>
                <Container>
                  <p className="bio">
                    I’m a recent Austin transplant who loves good food as much
                    as I love being surrounded by diverse women with powerful
                    stories. I’m lucky to have worked on building countless
                    culture-first organizations, and hope to bring the same
                    spirit of hunger for togetherness to BGFC. I’m excited to
                    connect with you all!{" "}
                  </p>
                  </Container>
              
                </Grid.Column>
                </Grid.Row>
                </Grid>
              {/* </Grid.Row> */}
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
