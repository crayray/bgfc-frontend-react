import {
  Button,
  Form,
  Grid,
  Segment,
  Container,
  Header
} from "semantic-ui-react";
import { DirectUpload } from "activestorage";
import OopsProfile from "./OopsProfile"

import React, { Component } from "react";

const options = [
  { key: "a", text: "Activism", value: "Activism" },
  { key: "b", text: "Book Clubs", value: "Books" },
  { key: "c", text: "Cooking", value: "Cooking" },
  { key: "z", text: "Crafting", value: "Crafting" },
  { key: "f", text: "Fashion and Upcycling", value: "Fashion and Upcycling" },
  { key: "l", text: "Languages", value: "Languages" },
  { key: "o", text: "Outdoors", value: "Outdoors" },
  { key: "s", text: "Self Care", value: "Self Care" },
  { key: "t", text: "Travel", value: "Travel" },
  { key: "v", text: "Volunteering", value: "Volunteering" }
];

export default class CreateProfileForm extends Component {
  state = {
    name: "",
    about: "",
    interes1: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    avatar: {},
    user_id: null,
    submittedForm: "false"
  };

  componentDidMount() {
    var token = localStorage.getItem("jwt");
    fetch(`http://localhost:4000/users/${localStorage.getItem("user_id")}`)
      .then(r => r.json())
      .then(response => {
        // console.log(response.id);
        this.setState({
          jwt: token,
          user_id: response.id,
          profile: response.profile
        });
      });
  }

  handleOnChange = event => {
    if (event.target.name === "avatar") {
      this.setState({
        [event.target.name]: event.target.files[0]
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  // handleOnChange = (e, { value }) => this.setState({ value })

  handleSubmit = event => {
    event.preventDefault();
    console.log("Submittig form");

    let profile = {
      name: this.state.name,
      about: this.state.about,
      interest1: this.state.interest1,
      instagram: this.state.instagram,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      facebook: this.state.facebook,
      avatar: this.state.avatar,
      user_id: this.state.user_id,
      submittedForm: !this.state.submittedForm
    };

    fetch("http://localhost:4000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(response => this.uploadFile(this.state.avatar, response));
    this.props.history.push("/members");
  };

  uploadFile = (file, profile) => {
    const upload = new DirectUpload(
      file,
      "http://localhost:4000/rails/active_storage/direct_uploads"
    );
    upload.create((error, blob) => {
      if (error) {
        console.log(error);
      } else {
        fetch(`http://localhost:4000/profiles/${profile.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({ avatar: blob.signed_id })
        })
          .then(response => response.json())
          .then(result => console.log(result));
      }
    });
  };
  render() {

    if (this.state.profile === null) {
    return (
      <Container style={{ marginTop: "75px" }}>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment>
                <Form.Input
                  icon="user circle olive"
                  name="name"
                  placeholder="Your name here"
                  value={this.state.name}
                  onChange={this.handleOnChange}
                  type="text"
                  label="Name"
                />

                <Form.Input
                  icon="quote right olive"
                  name="about"
                  label="Share a short blurb about yourself"
                  placeholder="A blurb about me...."
                  value={this.state.about}
                  onChange={this.handleOnChange}
                />
              </Segment>
              <Segment>
                <Header>
                  Share your interests and Social media details so other members
                  can find you:
                </Header>
                <Form.Select
                  fluid
                  label="Select an Interest"
                  name="interest"
                  options={options}
                  placeholder="Select an Interest"
                  onChange={(e, { value, text }) => {
                    this.setState({
                      interest1: value
                    });
                  }}
                />

                <Form.Input
                  icon="instagram olive"
                  name="instagram"
                  placeholder="Your Instagram handle"
                  value={this.state.instagram}
                  onChange={this.handleOnChange}
                  type="text"
                  label="Instagram"
                />

                <Form.Input
                  icon="twitter olive"
                  name="twitter"
                  placeholder="Your Twitter handle"
                  value={this.state.twitter}
                  onChange={this.handleOnChange}
                  type="text"
                  label="Twitter"
                />

                <Form.Input
                  icon="facebook olive"
                  name="facebook"
                  placeholder="Your Facebook name"
                  value={this.state.facebook}
                  onChange={this.handleOnChange}
                  type="text"
                  label="Facebook"
                />
              </Segment>
              <Segment>
                <Form.Field>
                  <label>Upload your Profile photo:</label>
                  <input
                    type="file"
                    name="avatar"
                    onChange={this.handleOnChange}
                  />
                </Form.Field>
                <Form.Field control={Button}>Create my profile</Form.Field>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    )}else{
      return (<OopsProfile />)
    }
  }
}
