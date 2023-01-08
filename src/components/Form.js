import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteCheckbox from './ComponenteCheckbox';
import ComponenteSuperTrunfo from './ComponenteSuperTrunfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Form.css';

class Form extends Component {
  superTrunfo = () => {
    const { hasTrunfo, cardTrunfo, onInputChange } = this.props;

    if (hasTrunfo === true) {
      return (
        <ComponenteSuperTrunfo />
      );
    } return (
      <>
        <span>Super Trunfo </span>
        <ComponenteCheckbox
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
        />
      </>
    );
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div className="all-form">
        <form className="form-input">
          <label htmlFor="name-input">
            <span>Nome </span>
            <input
              className="form-control"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description-input">
            <span>Descrição </span>
            <input
              className="form-control"
              type="textarea"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr-input">
            <span>Força </span>
            <input
              className="form-control"
              type="number"
              name="cardAttr1"
              max={ 90 }
              min={ 0 }
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
            <span>Ataque </span>
            <input
              className="form-control"
              type="number"
              name="cardAttr2"
              max={ 90 }
              min={ 0 }
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
            <span>Defesa </span>
            <input
              className="form-control"
              type="number"
              name="cardAttr3"
              max={ 90 }
              min={ 0 }
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image-input">
            <span>Imagem </span>
            <input
              placeholder="Use o link da imagem"
              className="form-control"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare-input">
            <select
              className="form-control"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input" name="trunfo-input">
            { this.superTrunfo() }
          </label>
          <button
            className="btn btn-secondary mb-3"
            type="button"
            name="isSaveButtonDisabled"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
