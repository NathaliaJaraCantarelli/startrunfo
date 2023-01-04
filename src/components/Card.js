import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Styles/Card.css';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    const superTrunfo = (cardTrunfoDado) => {
      if (cardTrunfoDado === true) {
        return <p data-testid="trunfo-card">Super Trunfo</p>;
      }
    };

    const buttonIDFunc = () => {
      const { buttonID, key } = this.props;
      if (buttonID) {
        return (
          <button
            type="button"
            data-testid="delete-button"
            key={ key }
            onClick={ buttonID }
          >
            Excluir
          </button>
        );
      }
    };

    return (
      <div className="card-view">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        { superTrunfo(cardTrunfo) }
        { buttonIDFunc() }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  buttonID: PropTypes.bool.isRequired,
  key: PropTypes.number.isRequired,
};

export default Card;
