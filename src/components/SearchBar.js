import React from 'react'
import { Button, Checkbox, Form, Search } from 'semantic-ui-react'


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
const SearchBar = ({onSearchChange, onDropdownChange}) => (
  <Form>
    <Form.Field>
      <label>Search for a member:</label>
      <input type="search" placeholder='Enter a name' onChange={onSearchChange} />
    </Form.Field>
    <Form.Select
              fluid
              label="Select an Interest"
              name="interest"
              options={options}
              placeholder="Select an Interest"

              onChange={onDropdownChange}
            />
    <Button type='submit'>Search</Button>
  </Form>
)

export default SearchBar