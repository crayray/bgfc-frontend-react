import React from "react";
import NavBar from "../components/NavBar";
import {
  Container,
  Segment,
  Grid,
  Header,
  Image,
  Divider,
  Icon
} from "semantic-ui-react";
import { events } from "../data/events";
import ProfileCardFront from "../components/ProfileCardFront";
import CreateProfileForm from "../components/CreateProfileForm";
import SearchBar from "../components/SearchBar";
import CardContainer from "./CardContainer";
import "../stylesheets/MembersLayout.css";

export default class MembersLayout extends React.Component {
  state = {
    profiles: [],
    searchField: "",
    interestFilter: ""
  };
  componentDidMount() {
    fetch("http://localhost:4000/profiles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          profiles: data
        })
      );
  }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value
    });
  };

  onDropdownChange = (e, { value, text }) => {
    this.setState({
      interestFilter: value
    });
    console.log(value);
  };

  render() {
    const { searchField, profiles, interestFilter } = this.state;
    const isInSearchField = profile => {
      return profile.name.toLowerCase().includes(searchField.toLowerCase());
    };
    const namefilteredProfiles = profiles.filter(profile => {
      return (
        isInSearchField(profile) &&
        profile.interest1.toLowerCase().includes(interestFilter.toLowerCase())
      );
    });

    return (
      <Container className="members-container">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header textAlign="center" as="h1">
                Connect with other BGFC Members
              </Header>
            </Grid.Column>
          </Grid.Row>

          {/* <Grid.Row> */}
          <Segment placeholder>
            <Grid.Row>
              <Grid>
                <Grid.Column width={8} relaxed="very" stackable>
                  <Container>
                    <p className="search-left-header">
                      Looking for someone you met at a BGFC meetup?
                    </p>
                  </Container>
                  <Container style={{ textAlign: "center" }}>
                    <p className="search-left-subheader">
                      You can search for members by name or interest. Once you
                      find your new friend, add them on social media!
                    </p>
                  </Container>
                </Grid.Column>

                <Grid.Column width={8} relaxed="very" stackable>
                  <SearchBar
                    onSearchChange={this.onSearchChange}
                    onDropdownChange={this.onDropdownChange}
                  />
                </Grid.Column>
              </Grid>
              {/* </Grid.Row> */}
              <Divider vertical>
                <Icon name="search plus" />
              </Divider>
            </Grid.Row>
          </Segment>
        </Grid>

        <Segment vertical>
          <Grid container>
            <Grid.Row>
              <Container centered textAlign="center">
                <Header style={{ marginTop: "40px", marginBottom: "10px" }}>
                  Members
                </Header>
              </Container>
            </Grid.Row>
          </Grid>
        </Segment>
        <CardContainer profiles={namefilteredProfiles} />
      </Container>
    );
  }
}
