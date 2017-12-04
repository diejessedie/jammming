import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "In an Emergency",
          artist: "Ross From Friends",
          album: "Dont Sleep, There are Snakes"
        },

        {
          name: "Murderous",
          artist: "Mosca",
          album: "Eva Mendes EP"
        }
      ],
      playlistName: "New Playlist",
      playlistTracks: [
        {
          name: "Mercy",
          artist: "Shawn Mendes",
          album: "Illuminate"
        },
        {
          name: "Jealous",
          artist: "Nick Jonas",
          album: "Nick Jonas X2"
        }
      ]
    };
    this.addtrack = this.addtrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }


  addtrack(track) {
    let array = this.state.playlistTracks.slice();
    let index = array.indexOf(track);
    if (index >= 0) {
      return;
    }

    array.push(track);
    this.setState({ playlistTracks: array });
  }

  removeTrack(track) {
    let array = this.state.playlistTracks.slice();
    let index = array.indexOf(track);
    array.splice(index, 1);
    this.setState({ playlistTracks: array });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
  let trackUris = Array.from(this.state.playlistTracks.uri);
}

  search(term) {
    console.log(term);
  }

render() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addtrack}
          />
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onChangeName={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

}
export default App;
