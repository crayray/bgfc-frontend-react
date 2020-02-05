import { Button, Select, Form } from "semantic-ui-react";

import React, { Component } from 'react'

  {/* <Form.Field   label='Select your top interest' control='select' value={this.state.interest}>
        <option value='activism'>Activism</option>
        <option value='books'>Books/Book Clubs</option>
        <option value='cooking'>Cooking</option>
        <option value='crafting'>Crafting</option>
        <option value='fashion'>Fashion/Upcycling</option>
        <option value='languages'>Languages</option>
        <option value='outdoors'>Outdoors</option>
        <option value='selfcare'>Self Care</option>
        <option value='travel'>Travel</option>
        <option value='volunteering'>Volunteering</option>
      </Form.Field> */}

const options = [
    { key: 'a', text: 'Activism', value: 'activism' },
    { key: 'b', text: 'Book Clubs', value: 'books' },
    { key: 'c', text: 'Cooking', value: 'cooking' },
    { key: 'c', text: 'Crafting', value: 'crafting' },
    { key: 'f', text: 'Fashion and Upcycling', value: 'fashion' },
    { key: 'l', text: 'Languages', value: 'languages' },
    { key: 'o', text: 'Outdoors', value: 'outdoors' },
    { key: 's', text: 'Self Care', value: 'selfcare' },
    { key: 't', text: 'Travel', value: 'travel' },
    { key: 'v', text: 'Volunteering', value: 'volunteering' }
  ]

export default class CreateProfileForm extends Component {





    
    state = {
        name: "",
        about: "",
        interest: "",
        instagram: ""
    }
    handleOnChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       })
    }
    render() {
        return (
            <div>
                <Form>
      <Form.Field>
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange}/>
      </Form.Field>
      <Form.Field>
        <label>About</label>
        <input type="text" name="about" placeholder="About" value={this.state.about} onChange={this.handleOnChange}  />
      </Form.Field>
      <Form.Field
            control={Select}
            label='Select your top interest'
            options={options}
            placeholder='Interest'
          />
      <Form.Field>
        <label>Instagram</label>
        <input type="text" name="instagram" placeholder="Instagram handle" value={this.state.instagram} onChange={this.handleOnChange}  />
      </Form.Field>
      <Form.Field>
        <label>Facebook</label>
        <input type="text" name="facebook" placeholder="Facebook profile" value={this.state.facebook} onChange={this.handleOnChange}  />
      </Form.Field>
      <Form.Field>
        <label>LinkedIn</label>
        <input type="text" name="linkedin" placeholder="LinkedIn profile" value={this.state.linkedin} onChange={this.handleOnChange}  />
      </Form.Field>
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
            </div>
        )
    }
}



