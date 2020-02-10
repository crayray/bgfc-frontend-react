import {
  Button,
  Form,
  Grid,
  Segment,
  Container,
  Header
} from "semantic-ui-react";
import { DirectUpload } from "activestorage";
import OopsProfile from "./OopsProfile";

import React, { Component } from "react";
import "../stylesheets/CreateProfile.css";

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
        <div className="page-container bg" style={{ backgroundImage: 'url("http://localhost:3000/BGFC-Story4.png")'}}>
        <Container className="form-container">
          <Grid
            textAlign="center"
            // style={{ height: "100vh" }}
            // verticalAlign="middle"
            
          >
            <Grid.Column style={{ maxWidth: 1000 }}>
              <Form onSubmit={this.handleSubmit}>
                <Segment className="segment-padding">
                  <Header as="h3">Name</Header>
                  <Form.Input
                    icon="user circle olive"
                    name="name"
                    placeholder="Your name here"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                    type="text"
                    size="big"
                    className="input-margins"
                  />
                  <Header as="h3">Share a short blurb about yourself</Header>
                  <Form.TextArea
                    icon="quote right olive"
                    name="about"
                    placeholder="A blurb about me...."
                    value={this.state.about}
                    onChange={this.handleOnChange}
                    size="big"
                    className="input-margins"
                  />
                </Segment>
                <Segment className="section segment-padding">
                  <Header as="h2" className="text">
                    {" "}
                    To help other members connect with you, please share your
                    social media details and select an interest.
                  </Header>
                  <Header as="h3">Select one interest:</Header>
                  <Form.Select
                    fluid
                    name="interest"
                    options={options}
                    size="big"
                    placeholder="Select an Interest"
                    onChange={(e, { value, text }) => {
                      this.setState({
                        interest1: value
                      });
                    }}
                    className="input-margins"
                  />
                  <Header as="h3">Instagram</Header>
                  <Form.Input
                    icon="instagram olive"
                    name="instagram"
                    placeholder="Your Instagram handle"
                    value={this.state.instagram}
                    onChange={this.handleOnChange}
                    type="text"
                    size="big"
                    className="input-margins"
                  />
                  <Header as='h3'>Twitter</Header>
                  <Form.Input
                    icon="twitter olive"
                    name="twitter"
                    placeholder="Your Twitter handle"
                    value={this.state.twitter}
                    onChange={this.handleOnChange}
                    type="text"
                    
                    size="big"
                    className="input-margins"
                  />
                  <Header as='h3'>Facebook</Header>
                  <Form.Input
                    icon="facebook olive"
                    name="facebook"
                    placeholder="Your Facebook profile URL"
                    value={this.state.facebook}
                    onChange={this.handleOnChange}
                    type="text"
                    // label="Facebook"
                    size="big"
                    className="input-margins"
                  />
                </Segment>
                <Segment className="section segment-padding">
                  <Form.Field>
                  <Header as='h3'>Upload your Profile photo:</Header>
                    {/* <label>Upload your Profile photo:</label> */}
                    <input
                      type="file"
                      name="avatar"
                      onChange={this.handleOnChange}
                      size="big"
                      className="input-margins"
                    />
                  </Form.Field>
                  <Form.Field
                    className="input-margins"
                    size="medium"
                    control={Button}
                  >
                    Create my profile
                  </Form.Field>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
      //  </div>
      );
    } else {
      return <OopsProfile />;
    }
  }
}
