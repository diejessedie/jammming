import React, { Component } from "react";
import "./Playlist.css";
import TrackList from '../TrackList/TrackList.js';

export class Playlist extends Component {

  render() {
    return (
      <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
        <Tracklist />
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
  );
  }
}
