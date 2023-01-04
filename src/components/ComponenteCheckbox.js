import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponenteCheckbox extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfo-input" name="trunfo-input">
        <input
          type="checkbox"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
      </label>
    );
  }
}

ComponenteCheckbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default ComponenteCheckbox;
