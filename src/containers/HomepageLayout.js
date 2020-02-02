import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "../stylesheets/HomePageLayout.css"
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
import { Carousel } from 'grommet';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    >
      Brown Girls Food Club
    </Header>
    <Header
      as="p"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    >
      Building a community of WOC by eating our way through minority owned
      restaurants in Austin, TX
    </Header>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
           <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="massive"
              style={{backgroundColor: "#222220",opacity: .75, marginBottom: 0 }}
            >
              <Container>
                <Menu.Item as="a" active>
                  {" "}
                  <NavLink  to="/" ><Link style={{textDecoration: "none"}}>Home</Link></NavLink>
                </Menu.Item>
                <Menu.Item as="a">
                  <NavLink to="/about">About</NavLink>
                </Menu.Item>
                <Menu.Item as="a">
                  <NavLink to="/restaurants">Restaurants</NavLink>
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    <NavLink to="/events">Events</NavLink>
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ textDecoration: "none", marginLeft: "0.5em" }}
                  >
                    <NavLink to="/members">Members</NavLink>
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          <Segment
            inverted
            textAlign="center"
            style={{ backgroundColor: "#E19226", minHeight: 700}}
            vertical
          >
            <HomepageHeading />
          </Segment>
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
          style={{ minHeight: 350, padding: "1em 0em",backgroundColor: "#E19226",opacity: .75 }}
          
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
            style={{ minHeight: 350, padding: "1em 0em",backgroundColor: "#E19226",opacity: .75 }}
            vertical
          >
            <Container>
              <Menu style={{border: "none"}}inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
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

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
      
        <Carousel play={5000}>
          <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
          <Image src='//v2.grommet.io/assets/IMG_4245.jpg' />
          <Image src='//v2.grommet.io/assets/IMG_4210.jpg' />
        </Carousel>
     
        </Grid.Row>
        <Grid.Row></Grid.Row>
      </Grid>
    </Segment>

    



    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
