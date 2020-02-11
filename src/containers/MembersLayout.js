import React from "react";
import NavBar from "../components/NavBar";
import { Container, Segment, Grid, Header, Image } from "semantic-ui-react";
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

          <Grid.Row>
            {/* style={{ maxWidth: 700 }} */}
            <Grid.Column width={8}>
              <Header textAlign="center" as="h4" >Looking for someone you met at one of our meetups?</Header>
            </Grid.Column>
            <Grid.Column width={8}>
            <Image
                centered
                size="tiny"
                src="http://localhost:3000/logos/bgfc-logo-neon.svg"
                style={{ borderRadius: "50%" }}
              />
              <SearchBar
                onSearchChange={this.onSearchChange}
                onDropdownChange={this.onDropdownChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
      </Container>
    );
  }
}
