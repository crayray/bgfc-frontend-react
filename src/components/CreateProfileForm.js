import { Button, Select, Form } from "semantic-ui-react";
import { DirectUpload } from 'activestorage';


import React, { Component } from "react";


const options = [
  { key: "a", text: "Activism", value: "activism" },
  { key: "b", text: "Book Clubs", value: "books" },
  { key: "c", text: "Cooking", value: "cooking" },
  { key: "z", text: "Crafting", value: "crafting" },
  { key: "f", text: "Fashion and Upcycling", value: "fashion" },
  { key: "l", text: "Languages", value: "languages" },
  { key: "o", text: "Outdoors", value: "outdoors" },
  { key: "s", text: "Self Care", value: "selfcare" },
  { key: "t", text: "Travel", value: "travel" },
  { key: "v", text: "Volunteering", value: "volunteering" }
];

export default class CreateProfileForm extends Component {
  state = {
    name: "",
    about: "",
    interest: "",
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
          user_id: response.id
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
      interest: this.state.interest,
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
      
  };


  uploadFile= (file, profile) => {
    const upload = new DirectUpload(file, 'http://localhost:4000/rails/active_storage/direct_uploads')
    upload.create((error, blob) => {
        if (error) {
            console.log(error)
        }else {
            
            fetch(`http://localhost:4000/profiles/${profile.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({avatar: blob.signed_id})
            })
            .then(response => response.json())
            .then(result => console.log(result))
        }
    })
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </Form.Field>
          <Form.Field>
            <label>About</label>
            <input
              type="text"
              name="about"
              placeholder="About"
              value={this.state.about}
              onChange={this.handleOnChange}
            />
          </Form.Field>

          <Form.Select
              fluid
              label="Select an Interest"
              name="interest"
              options={options}
              placeholder="Select an Interest"

              onChange={(e, {value, text}) => {
                this.setState({
                  interest: value
                })
              }}
            />
          <Form.Field>
            <label>Instagram</label>
            <input
              type="text"
              name="instagram"
              placeholder="Instagram handle"
              value={this.state.instagram}
              onChange={this.handleOnChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Field>
              <label>Twitter</label>
              <input
                type="text"
                name="twitter"
                placeholder="Twitter Hnadle"
                value={this.state.twitter}
                onChange={this.handleOnChange}
              />
            </Form.Field>
            <label>Facebook</label>
            <input
              type="text"
              name="facebook"
              placeholder="Facebook profile"
              value={this.state.facebook}
              onChange={this.handleOnChange}
            />
          </Form.Field>
          <Form.Field>
            <label>LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn profile"
              value={this.state.linkedin}
              onChange={this.handleOnChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Upload your Profile photo:</label>
            <input type="file" name="avatar" onChange={this.handleOnChange} />
          </Form.Field>
          <Form.Field control={Button}>Create my profile</Form.Field>
        </Form>
      </div>
    );
  }
}
