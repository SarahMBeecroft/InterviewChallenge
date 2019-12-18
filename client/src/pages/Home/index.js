import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import { Container } from '../../components/Grid';
import './style.css';
import Footer from '../../components/Footer';


class Home extends Component {


  // Renders content onto main home page
  render() {
    return (
      <Container fluid>

        <div className='row'>
          <div className='col s12' id='paddingRemover'>

          <Navbar></Navbar>
    
          </div>
        </div>

        <div className='row'>
          <div className='col s12' id='paddingRemover'>
            <Footer></Footer>
          </div>
        </div>

      </Container>
    )
  }
}

export default Home;