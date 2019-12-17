import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container } from '../../components/Grid';
import './style.css';
import Footer from '../../components/Footer';


class Home extends Component {


  // Renders content onto main home page
  render() {
    return (
      <Container fluid>

        <div className="row">
          <div className="col s12" id='paddingRemover'>
            <Jumbotron>
              <h1 className="appTitle">Placeholder text</h1>
            </Jumbotron>
          </div>
        </div>

        <div className="row">
          <div className="col s12" id='paddingRemover'>
            <Footer></Footer>
          </div>
        </div>

      </Container>
    )
  }
}

export default Home;