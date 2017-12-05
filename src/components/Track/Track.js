import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.addtrack = this.addtrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <a className="trackAction" onClick={this.removeTrack}>
          -
        </a>
      );
    } else {
      return (
        <a className="trackAction" onClick={this.addtrack}>
          +
        </a>
      );
    }
  }

  addtrack(event) {
    return this.props.onAdd(this.props.track);
  }

  removeTrack(event) {
    return this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        <a className="Track-action">{this.renderAction()}</a>
      </div>
    );
  }
}

export default Track;
