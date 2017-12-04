import React, { Component } from "react";
import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist.js";

class Playlist extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
        <Tracklist
          tracks={this.props.playlistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
}

export default Playlist;
