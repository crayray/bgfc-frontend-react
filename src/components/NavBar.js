import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";


export default class NavBar extends Component {
  render() {
    return (
      <Responsive >
      <Visibility
        // once={false}
        // onBottomPassed={this.showFixedMenu}
        // onBottomPassedReverse={this.hideFixedMenu}
      >
        {/* <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        > */}
          <Menu
            // fixed={fixed ? "top" : null}
            // inverted={!fixed}
            // pointing={!fixed}
            // secondary={!fixed}
            // size="large"
          >
            <Container>
              <Menu.Item as="a" active>
                {" "}
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item as="a">
                <NavLink to="/about">About</NavLink>
              </Menu.Item>
              <Menu.Item as="a">
                <NavLink to="/restaurants">Restaurants</NavLink>
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a">
                {/* inverted={!fixed} */}
                  <NavLink to="/events">Events</NavLink>
                </Button>
                <Button
                  // as="a"
                  // inverted={!fixed}
                  // primary={fixed}
                  // style={{ marginLeft: "0.5em" }}
                >
                  <NavLink to="/members">Members</NavLink>
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        {/* </Segment> */}
      </Visibility>

      {/* {children} */}
    </Responsive>
    )
  }
}
