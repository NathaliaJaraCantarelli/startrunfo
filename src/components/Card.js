import React, { Component } from 'react';
import PropTypes from 'prop-types';
import superTrunfoImg from '../images/supertrunfo.jpeg';
import './Styles/Card.css';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    const buttonIDFunc = () => {
      const { buttonID, index } = this.props;
      if (index >= 0) {
        return (
          <button
            className="btn-excluir-card btn btn-secondary mb-3"
            type="button"
            data-testid="delete-button"
            index={ index }
            onClick={ buttonID }
          >
            Excluir
          </button>
        );
      }
    };

    return (
      <div className={ `all ${cardRare}-style` }>
        <div className="card-view">
          { cardTrunfo && (
            <img src={ superTrunfoImg } alt="Super Trunfo" className="super-trunfo-img" />
          )}
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <div className={ `infos-card ${cardRare}-style` }>
            <h1 data-testid="name-card">{ cardName }</h1>
            <h5 data-testid="description-card">{ cardDescription }</h5>
            <div className="atrr-div">
              <span>Força </span>
              <p data-testid="attr1-card">{ cardAttr1 }</p>
            </div>
            <div className="atrr-div">
              <span>Ataque </span>
              <p data-testid="attr2-card">{ cardAttr2 }</p>
            </div>
            <div className="atrr-div">
              <span>Defesa </span>
              <p data-testid="attr3-card">{ cardAttr3 }</p>
            </div>
          </div>
        </div>
        { buttonIDFunc() }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardAttr2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardAttr3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  buttonID: PropTypes.func,
  index: PropTypes.number,
};

Card.defaultProps = {
  index: -1,
  buttonID: () => false,
};

export default Card;
