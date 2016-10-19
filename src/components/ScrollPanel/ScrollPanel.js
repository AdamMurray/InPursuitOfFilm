import React from 'react';
import _ from 'lodash';
import Card from '../Card/Card';
import './ScrollPanel.css';

/**
 * Scroll Panel
 */
const ScrollPanel = ({
  title,
  data,
  cardTitleProp,
  cardImagePath,
  cardImageProp,
  dateProp }) => {

  // When scroll panels get new data, reset their scroll positions
  let scrollPanels = document.getElementsByClassName('ipof__scroll-panel');
  _.forEach(scrollPanels, p => {
    p.scrollLeft = 0;
    p.scrollTop = 0;
  });

  // Create scroll panel cards from props data
  let items;
  if (data && Object.keys(data).length) {
    items = _.map(data, (value, key) =>
      <Card
        key={key}
        itemId={key}
        title={value[cardTitleProp]}
        date={value[dateProp]}
        imageUrl={`${cardImagePath}${value[cardImageProp]}`}
        />
    );
  }
  else {
    items =
      <div className="ipof__card ipof__card--empty">
        <div className="ipof__card__text">
          <div style={{ padding: '1rem' }}>
            There is nothing to see yet :(
          </div>
        </div>
      </div>;
  }

  return (
    <div>
      <div className="ipof__scroll-panel-title">
        <h2>{title}</h2>
      </div>
      <div className="ipof__scroll-panel">
        {items}
      </div>
    </div>
  );
}

export default ScrollPanel;