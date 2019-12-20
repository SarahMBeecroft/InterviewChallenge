import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import ColorButtons from "../../components/ColorButtons";
import Results from "../../components/Results";
import "./style.css";
import colorList from "../../colorList";

class Home extends Component {
  state = {
    search: "",
    colors: [],
  };

  // Takes value from search input
  handleInputChange = event => {
    this.setState({ search: `q=${event.target.value}` });
  };

  // Function to handle form submit
  handleFormSubmit = event => {
    // Prevents page from reloading
    event.preventDefault();
    // Connects to colorList.js file with color array
      colorList(this.state.search)
      .then(res => {
        if (res.data.data === "error") {
          throw new Error(res.data.data);
        } else {
          // Stores responses in array
          let results = res.data.data;
          console.log(results);
          // Maps through the array
          results = results.map(result => {
         

            result = {
            
              color: result.color,
              hex: result.hex             
           
            };
            console.log(result);

            return result;
          });
          // Sets empty color array to new array of objects
          this.setState({ colors: results, error: "" });
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };

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
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
              <div className="colorResults">
                colors={this.state.colors}
              </div>
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
