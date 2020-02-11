import React, { Component } from 'react'
import { Input, Menu, Grid, Header } from 'semantic-ui-react'

export default class DataMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Grid>
        <Grid.Row>
        <Grid.Column width={6} >
        </Grid.Column>
          <Grid.Column width={1}>
          <Menu.Menu position='right' style={{textAlign: "right"}}>
          <Menu.Item>
            <Input onChange={this.props.onSearchChange} icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
   
    )
  }
}
