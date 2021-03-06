import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "../stylesheets/HomePageLayout.css";
// import { events } from "../data/events";
import {upcoming} from "../data/UpcomingEvents"
import {PastEvents} from "../data/PastEvents"
import HomeUpcomingEvent from "../components/HomeUpcomingEvent"

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
  Visibility,
  Card
} from "semantic-ui-react";
import { Carousel, Box } from "grommet";

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
    ></Header>
    <Header
      as="p"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    ></Header>
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
          {/* <NavBar /> */}
          <Segment
            inverted
            textAlign="center"
            style={{
              backgroundColor: "#E2DEB4",
              maxHeight: 800,
              // backgroundImage: `url(${"http://localhost:3000/homepage.png"})`,
              // backgroundSize: "auto"
            }}
            vertical
            
          >
          <Image src="http://localhost:3000/homepage.png"/>
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
          style={{
            minHeight: 350,
            padding: "1em 0em",
            backgroundColor: "#E19226",
            opacity: 0.75
          }}
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
            style={{
              minHeight: 350,
              padding: "1em 0em",
              backgroundColor: "#E19226",
              opacity: 0.75,
              backgroundImage: `url(${"http://localhost:3000/thank_you.png"})`,
              backgroundSize: "cover"
            }}
            className="thank-you"
            vertical
          >
            <Container>
              <Menu
                style={{ border: "none" }}
                inverted
                pointing
                secondary
                size="large"
              >
                <Menu.Item
                  onClick={this.handleToggle}
                  style={{
                    backgroundColor: "white",
                    padding: "1em",
                    borderRadius: "5px"
                  }}
                >
                  <Icon color="teal" name="sidebar" />
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
    <Segment className="middle-section" vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          {/* <Container className="banner" text> */}
          <div className="banner">
            <Header as="p" className="homepage-header">
              Building a community of WOC by eating our way through minority
              owned restaurants in Austin, TX
            </Header>
          {/* </Container> */}
          </div>
          <Grid.Row>
            <Container>
              <Container style={{ marginTop: "55px", minWidth: "800px" }} text>
                <Container centered textAlign="center">
                  <p style={{fontSize: "40px"}}>
                    We're a group of badass brown girls based in Austin and we
                    like to <strong>eat</strong>.{" "}
                  </p>
                </Container>
                <Container centered style={{marginTop: "35px", marginBottom:"100px"}} textAlign="center">
                  <p className="middle-section-text">
                    {" "}
                    Some of us are new to Austin and some have been here a
                    while. We were searching for community and found each other.
                    We figured there were other ladies out there hungry for
                    connection, support, and good food, so we started this
                    community.
                  </p>
                </Container>
              </Container>
              <Container style={{marginBottom: "100px"}}>
                <Icon name="instagram" link size="big"/>
                <Icon name="staylinked" link size="big"/>
              </Container>
              {/* <Box height="large" width="large" pad="xlarge" overflow="hidden"> */}
              {/* <Carousel play={5000}>
            <Image  fit="cover" src="http://localhost:3000/who-are-you.jpg"  />
            <Image src="//v2.grommet.io/assets/IMG_4245.jpg" />
            <Image src="//v2.grommet.io/assets/IMG_4210.jpg" />
          </Carousel> */}
              {/* </Box> */}
            </Container>
          </Grid.Row>
        </Grid.Row>
      </Grid>
    </Segment>
    <Container className="events-section" >
      <Grid >
        <Grid.Row >
        <Container className="events-section" ></Container>
        {/* style={{marginTop: "100px", backgroundColor: "#D6C227"}} */}
        {/* style={{backgroundColor: "#D6C227"}} */}
          <Container   centered textAlign="center">
            <Header style={{marginBottom: "40px"}}>Check out our upcoming events:</Header>
          </Container>
        </Grid.Row>
        <Segment vertical>
          <Grid  >
            <Grid.Row>
              <Container centered>
                <Card.Group centered>
                  {upcoming.map(event => (
                    <HomeUpcomingEvent
                      image={event.image}
                      location={event.location_name}
                      blurb={event.blurb}
                      event_id={event.id}
                      date={event.date}
                      time={event.time}
                      key={event.id}
                    
                      
                    />
                  ))}
                </Card.Group>
              </Container>
            </Grid.Row>
            <Grid.Row>
          
          <Container centered textAlign="center">
          <Divider />
            <Header style={{marginBottom: "40px", marginTop: "20px"}} centered>Check out our past events:</Header>
            <Grid.Row style={{marginBottom: "100px"}}>
            
              <Container centered>
                <Card.Group centered>
                  {PastEvents.map(event => (
                    <HomeUpcomingEvent 
                      image={event.image}
                      location={event.location_name}
                      blurb={event.blurb}
                      event_id={event.id}
                      date={event.date}
                      time={event.time}
                      key={event.id}
                    
                      
                    />
                  ))}
                </Card.Group>
              </Container>
            </Grid.Row>
          </Container>
        </Grid.Row>
          </Grid>
        </Segment>
      </Grid>
    </Container>

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
