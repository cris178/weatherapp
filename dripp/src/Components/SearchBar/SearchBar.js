import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  //Constructor fires before component mounted
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //Fires after searchBar component mounts this is when can initialize state with APIs
  componentDidMount() {}

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.name); //Shows which input is currently changging
    console.log(event.target.value); //Shows the value of that specific input bar
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state.city;
    console.log("-----Final Data: " + data);
    this.props.passUp(data);
    //console.log(this.state.city);
  }

  render() {
    return (
      <div className="SearchBar row">
        <div className="centered">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search City"
                onChange={this.handleChange}
                name="city"
              />
              {/*Clever way to set state for specific inputs*/}
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  onClick={this.handleSubmit}
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
