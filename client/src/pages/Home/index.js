import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import ColorButtons from "../../components/ColorButtons";
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

        <div className="row appContent">
          <div className="col s4">
            <ColorButtons>
              <button type="button" class="btn btn-outline-dark">
                Random Color
              </button>
              <br></br>
              <button type="button" class="btn btn-outline-dark">
                Red
              </button>
              <br></br>
              <button type="button" class="btn btn-outline-dark">
                Orange
              </button>
              <br></br>
              <button type="button" class="btn btn-outline-dark">
                Yellow
              </button>
              <br></br>
              <button type="button" class="btn btn-outline-dark">
                Green
              </button>
              <br></br>
              <button type="button" class="btn btn-outline-dark">
                Blue
              </button>
              <br></br>
              <button type="button" class="btn btn-outline-dark">
                Purple
              </button>
              <br></br>
              <button type="button" class="btn btn-outline-dark">
                Brown
              </button>
              <br></br>
              <button type="button" class="btn btn-outline-dark">
                Gray
              </button>
              <br></br>
            </ColorButtons>
          </div>

          <div className="col s8">
            <p>White space for now</p>
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
