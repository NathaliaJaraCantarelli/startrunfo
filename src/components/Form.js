import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          <input type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="attr-input">
          <input type="number" data-testid="attr1-input" />
          <input type="number" data-testid="attr2-input" />
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          <select data-testid="rare-input">
            <option value="normal" selected>Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
