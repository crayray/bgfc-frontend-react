import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Button,
  Container,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  constructor(props){
    super(props);
    console.log(props)
    this.state = { user_id: props.user_id };
    
  }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    // if (this.props.user_id !== null){
    //    return <Button>Logout</Button>
    //    }else {
    //     return <Button> Login</Button>
    //    }
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          {/* <Segment
            inverted
            textAlign="center"
            // style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          > */}
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="massive"
            style={{
              backgroundColor: "#222220",
              opacity: 0.75,
              marginBottom: 0,
              paddingBottom: ".5em"
            }}
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
                <NavLink to="/events">
                  <Button as="a" inverted={!fixed}>
                    Events
                  </Button>
                </NavLink>
                <NavLink to="/members">
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Members
                  </Button>
                </NavLink>
              </Menu.Item>
              <Menu.Item>
              {(this.state.user_id === "undefined")? (<Button> Login</Button>)  :(<Button>Logout</Button>) }
              </Menu.Item>
            </Container>
          </Menu>

        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          style={{ backgroundColor: "#E19226" }}
        >
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
          <Menu.Item as="a">
            <NavLink to="/members">Members</NavLink>
          </Menu.Item>
          <Menu.Item as="a">
            <NavLink to="/events">Events</NavLink>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            // style={{ minHeight: 200, padding: "1em 0em" }}
            vertical
            style={{
              minHeight: 200,
              padding: "1em 0em",
              backgroundColor: "#E19226",
              opacity: 0.75
            }}
          >
            <Container>
              <Menu
                style={{ border: "none" }}
                inverted
                pointing
                secondary
                size="large"
              >
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const NavBar = () => <ResponsiveContainer />;

export default NavBar;
