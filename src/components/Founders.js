import React from "react";
import {
  Container,
  Segment,
  Grid,
  Header,
  Image,
  Icon
} from "semantic-ui-react";
import "../stylesheets/Founders.css";

export default function Founders() {
  return (
    <div>
      <Segment className="bio-segment-one">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Header className="founder-name" textAlign="center">Amber</Header>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      align="right"
                      className="image-container"
                      src="http://localhost:3000/founders/amber.jpg"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Container>
                      <p className="bio">
                        I’m a recent Austin transplant who loves good food as
                        much as I love being surrounded by diverse women with
                        powerful stories. I’m lucky to have worked on building
                        countless culture-first organizations, and hope to bring
                        the same spirit of hunger for togetherness to BGFC. I’m
                        excited to connect with you all!{" "}
                      </p>
                    </Container>

                    <Grid columns={2}>
                      <Grid.Column>
                        <p>Follow Amber:</p>
                      </Grid.Column>
                    </Grid>
                    <Grid.Column>
                      <a href={"https://www.instagram.com/libertydenied"}>
                        {" "}
                        <Icon
                          textAlign="center"
                          size="large"
                          name="instagram"
                          link
                        ></Icon>
                      </a>
                    </Grid.Column>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Header className="founder-name" textAlign="center">Ayesha</Header>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      align="right"
                      className="image-container"
                      src="http://localhost:3000/founders/ayesha.jpg"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Container>
                      <p className="bio">
                        I am a third culture immigrant who was born in Pakistan,
                        moved to Texas in high school, and currently live in
                        Austin where I work in Architecture & Design. I come
                        from a very multi-culturally mixed family that has
                        continuously immigrated - my mother is Arab/Turkish and
                        father is Uzbek/Uyghur - so the question “where are you
                        from?” always warrants a short or long response. What's
                        kept my family and I rooted to our heritage is our love
                        of food and the power of connection through it, which is
                        what makes me most delighted about Brown Girls Food
                        Club!{" "}
                      </p>
                    </Container>

                    <Grid columns={2}>
                      <Grid.Column>
                        <p>Follow Ayesha:</p>
                      </Grid.Column>
                    </Grid>
                    <Grid.Column>
                      <a href={"https://www.instagram.com/ayeshaerkin"}>
                        {" "}
                        <Icon
                          textAlign="center"
                          size="large"
                          name="instagram"
                          link
                        ></Icon>
                      </a>
                    </Grid.Column>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment >
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Header className="founder-name"  textAlign="center">Hamaila</Header>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      align="right"
                      className="image-container"
                      src="http://localhost:3000/founders/hamaila.jpg"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Container>
                      <p className="bio">
                        I am a designer and daughter of Pakistani immigrants.
                        With a background in the sciences, I pivoted completely
                        to create my own design brand that currently focuses on
                        jewelry. Creating community through storytelling is one
                        of my favourite things and I can’t wait to share that
                        experience with all of you.{" "}
                      </p>
                    </Container>

                    <Grid columns={2}>
                      <Grid.Column>
                        <p>Follow Hamaila:</p>
                      </Grid.Column>
                    </Grid>
                    <Grid.Column>
                      <a href={"https://www.instagram.com/Hamaila"}>
                        {" "}
                        <Icon
                          textAlign="center"
                          size="large"
                          name="instagram"
                          link
                        ></Icon>
                      </a>
                    </Grid.Column>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Header className="founder-name" textAlign="center">Hala</Header>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      align="right"
                      className="image-container"
                      src="http://localhost:3000/founders/hala.jpeg"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Container>
                      <p className="bio">
                        I like to joke that I’ve been an immigrant 3 times in my
                        life and that number is even higher for my parents. My
                        life has been a beautiful blend of Lebanese, French,
                        Senegalese, Canadian and Texan culture, inspiring me to
                        seek out some of these same foodways in my adopted home
                        of Austin. I’m most excited to connect women of color by
                        breaking bread and sharing deep conversations through
                        the Brown Girls Food Club.{" "}
                      </p>
                    </Container>

                    <Grid columns={2}>
                      <Grid.Column>
                        <p>Follow Hala:</p>
                      </Grid.Column>
                    </Grid>
                    <Grid.Column>
                      <a href={"https://www.instagram.com/libertydenied"}>
                        {" "}
                        <Icon
                          textAlign="center"
                          size="large"
                          name="instagram"
                          link
                        ></Icon>
                      </a>
                    </Grid.Column>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
