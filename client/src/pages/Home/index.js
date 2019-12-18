import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import ColorButtons from "../../components/ColorButtons";
import Results from "../../components/Results";
import "./style.css";

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
              <div className="colorButtons">
                <button type="button" class="btn btn-dark">
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
              </div>
            </ColorButtons>
          </div>

          <div className="col s8">
            <Results>
              <div className="colorResults"></div>
              <br></br>
              <button type="button" class="btn btn-dark clearButton">
                Clear
              </button>
            </Results>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
