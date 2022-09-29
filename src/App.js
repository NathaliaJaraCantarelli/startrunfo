import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      baralho: [],
    };
  }

  testaValoresAtt = (attr, nomeAttr) => {
    const attrValue = parseFloat(attr);
    const valueMax = 90;
    let valueAtual = attrValue;
    if (attrValue > valueMax) {
      valueAtual = valueMax;
      this.setState(() => ({
        isSaveButtonDisabled: true,
      }));
    }
    if ((Number.isNaN(attrValue)) || (attrValue < 0)) {
      valueAtual = 0;
      this.setState(() => ({
        isSaveButtonDisabled: true,
      }));
    }
    this.setState(() => ({
      [nomeAttr]: valueAtual,
    }));
    return valueAtual;
  };

  somaAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const cardAttrValue = this.testaValoresAtt(cardAttr1, 'cardAttr1');
    const cardAttrValue2 = this.testaValoresAtt(cardAttr2, 'cardAttr2');
    const cardAttrValue3 = this.testaValoresAtt(cardAttr3, 'cardAttr3');
    const soma = cardAttrValue + cardAttrValue2 + cardAttrValue3;
    return soma;
  };

  habilitaBotao = () => {
    let estadoVazio = Object.values(this.state).some((estadoAtual) => estadoAtual === '');
    const somaAtual = this.somaAttr();
    const limite = 210;
    if ((somaAtual <= limite) && (estadoVazio === false)) {
      estadoVazio = false;
    } else if (somaAtual > limite) {
      estadoVazio = true;
    }
    return estadoVazio;
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [target.name]: value,
    }), () => {
      this.setState(() => ({
        isSaveButtonDisabled: this.habilitaBotao(),
      }));
    });
  };

  salvaCarta = () => {
    const objetoPadrao = {};
    const { baralho, cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    objetoPadrao.cardName = cardName;
    objetoPadrao.cardDescription = cardDescription;
    objetoPadrao.cardAttr1 = cardAttr1;
    objetoPadrao.cardAttr2 = cardAttr2;
    objetoPadrao.cardAttr3 = cardAttr3;
    objetoPadrao.cardImage = cardImage;
    objetoPadrao.cardRare = cardRare;
    objetoPadrao.cardTrunfo = cardTrunfo;
    objetoPadrao.isSaveButtonDisabled = isSaveButtonDisabled;
    const arrayCompleto = baralho;
    arrayCompleto.push(objetoPadrao);
    return arrayCompleto;
  };

  onSaveButtonClick = () => {
    const arrayCompleto = this.salvaCarta();
    const superTrunfo = arrayCompleto.some((carta) => carta.cardTrunfo === true);
    if (superTrunfo === true) {
      this.setState(() => ({ hasTrunfo: true }));
    }
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      baralho: arrayCompleto,
    }));
  };

  render() {
    const { cardName, cardDescription, hasTrunfo, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
