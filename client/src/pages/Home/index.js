import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Container } from "../../components/Grid";
import "./style.css";
import Footer from "../../components/Footer";

class Home extends Component {
  // Renders content onto main home page
  render() {
    return (
      <Container fluid>
        <div className="row">
          <div className="col s12" id="paddingRemover">
            <Navbar>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </Navbar>
          </div>
        </div>

        <div className="row">
          <div className="col s12" id="paddingRemover">
            <Footer></Footer>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
