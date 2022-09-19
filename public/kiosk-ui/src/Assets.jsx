import React, { Component } from "react";
import { PlayerApi, SERVER } from "./api";

export default class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
    };
    this.handleAsset = this.handleAsset.bind(this);
    this.loadAssets = this.loadAssets.bind(this);
  }

  componentWillMount() {
    this.loadAssets();
  }

  loadAssets() {
    PlayerApi.getAssets()
      .then((filess) =>
        this.setState({
          assets: files,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  handleAsset = (event, asset) => {
    PlayerApi.playAsset(asset)
      .then()
      .catch((err) => {
        console.log(err);
      });
    this.loadAssets();
  };

  render() {
    return (
      <div class="mmmmmm">
        {this.state.assets.length === 0 && (
          <h3 className="is-size-3 has-text-weight-semibold has-text-grey">
            There are no assets to select
          </h3>
        )}
        {this.state.assets.map((asset) => (
		
          <a
            key={asset}
            className="media"
            onClick={(event) => this.handleAsset(event, asset)}
          >
            <figure className="media-left">
              <p className="image is-96x96">
                <img
                  src={`${SERVER}/media/${asset}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${SERVER}/img/placeholder.png`;
                  }}
                />
              </p>
            </figure>
            <div className="media-content content is-size-3 has-text-weight-semibold has-text-grey">
              <div>
                <h1>{asset}</h1>
              </div>
            </div>
          </a>
		  
        ))}
      </div>
    );
  }
}
