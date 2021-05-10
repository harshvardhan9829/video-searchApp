import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className=" search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
              <label >Video search</label>
              <div className=" field">
              <input
                type="text"
                onChange={this.onInputChange}
                value={this.state.term}
              />
              </div>
              <div className=" field">
              <input type="submit" className="ui button" value="Search" />
            </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
