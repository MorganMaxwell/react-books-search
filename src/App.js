import React, { Component } from 'react';
import './App.css';
import API from "./utils/API";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            Oh, oh, I see! Running away, eh? You yellow bastards! Come back here and take what's coming to you! I'll bite your legs off! Are you suggesting coconuts migrate? What is the capital of Assyria? Come and see the violence inherent in the system. Help! Help! I'm being repressed! The Lady of the Lake, her arm clad in the purest shimmering samite held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. THAT is why I am your king.
          </Col>
          <Col>
            <Button>test</Button>
          </Col>
          <Col>
            Oh, oh, I see! Running away, eh? You yellow bastards! Come back here and take what's coming to you! I'll bite your legs off! Are you suggesting coconuts migrate? What is the capital of Assyria? Come and see the violence inherent in the system. Help! Help! I'm being repressed! The Lady of the Lake, her arm clad in the purest shimmering samite held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. THAT is why I am your king.
          </Col>
        </Row>
      </Container>
    );
  };
};

export default App;