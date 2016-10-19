import React, { Component } from 'react';
import './Card.css';
import ItemView from '../ItemView/ItemView';
import moment from 'moment';

const noImageIcon = `${window.location.href}/no-image-icon.png`;

/**
 * Card component class
 */
class Card extends Component {
  /**
   * Create Card
   */
  constructor(props) {
    super(props);
    this.state = {
      showItemView: false
    };
    
    this.showItemView = this.showItemView.bind(this);
    this.hideItemView = this.hideItemView.bind(this);
  }

  /**
   * Show item view
   * 
   * @description
   * Show this Card's ItemView
   */
  showItemView(evt) {
    evt.stopPropagation();

    this.setState({
      showItemView: true
    });
  }

  /**
   * Hide item view
   * 
   * @description
   * Show this Card's ItemView
   */
  hideItemView(evt) {
    evt.stopPropagation();

    this.setState({
      showItemView: false
    });
  }

  /**
   * Render Card
   */
  render() {
    const {
      itemId,
      title,
      imageUrl,
      date
    } = this.props;

    let url = imageUrl.indexOf('null') === -1 ? imageUrl : noImageIcon;

    const dateStyle = {
      color: '#ddd',
      fontSize: '1rem',
      marginTop: '.2rem'
    };

    return (
      <div className="ipof__card" onClick={this.showItemView}>
        <div className="ipof__card__image">
          <img alt={title} src={url} />
        </div>
        <div className="ipof__card__title">
          {title}
          <div style={dateStyle}>
            {date ? moment(date).format('YYYY') : ''}
          </div>
        </div>

        <ItemView
          show={this.state.showItemView}
          title={title}
          imageUrl={url}
          closeView={this.hideItemView}
          />
      </div>
    );
  }
}

export default Card;