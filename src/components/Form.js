import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  superTrunfo = () => {
    const { hasTrunfo } = this.props;
    if (hasTrunfo === true) {
      const teste = document.getElementsByName('teste');
      teste[0].textContent = 'Você já tem um Super Trunfo em seu baralho';
    }
  };

  render() {
    this.superTrunfo();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    console.log(hasTrunfo);
    // const { estados } = (event) => this.setState = (
    //   console.log(event.target.value)
    // )
    return (
      <form>
        <label htmlFor="name-input">
          <input
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          <input
            type="textarea"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr-input">
          <input
            type="number"
            name="cardAttr1"
            max={ 90 }
            min={ 0 }
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
          <input
            type="number"
            name="cardAttr2"
            max={ 90 }
            min={ 0 }
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
          <input
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
          <input
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal" selected>Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="teste" name="teste">
          <label htmlFor="trunfo-input" name="trunfo-input">
            <p name="cardTrunfo">Super Trunfo</p>
            <input
              type="checkbox"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            />
          </label>
        </label>
        <button
          type="button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
