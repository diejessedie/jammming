import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      term: ""
    };
=======
>>>>>>> parent of eb221b2... reset savePlaylist state, initialize search term state
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  search() {
    if (this.state.term) {
      this.props.onSearch(this.state.term);
    }
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <a onClick={this.search}>
          SEARCH
        </a>
      </div>
    );
  }
}

export default SearchBar;
