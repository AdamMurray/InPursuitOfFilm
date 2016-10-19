import React, { Component } from 'react';
import './ItemView.css';

class ItemView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"ipof__item-view" + (this.props.show ? " ipof__item-view--show" : "") }>
        <div className="ipof__item-view__top">
          <button
            onClick={this.props.closeView}
            className="ipof__button">
            Close
          </button>
        </div>

        <div className="ipof__item-view__middle">
          <div className="ipof__item-view__middle__title">
            <h2>{this.props.title}</h2>
          </div>
          <div className="ipof__item-view__middle__image">
            <img src={this.props.imageUrl}  />
          </div>
        </div>

      </div>
    );
  }
}

export default ItemView;