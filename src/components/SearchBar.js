import React from 'react'
import { Button, Checkbox, Form, Search } from 'semantic-ui-react'

const SearchBar = ({onSearchChange}) => (
  <Form>
    <Form.Field>
      <label>Search for a member:</label>
      <input type="search" placeholder='Enter a name' onChange={onSearchChange} />
    </Form.Field>
    <Button type='submit'>Search</Button>
  </Form>
)

export default SearchBar