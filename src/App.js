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
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      baralho: [],
      filteredName: '',
      filteredRare: 'todas',
      filteredSuperTrunfo: false,
    };
  }

  handleFilter = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log(target);
    this.setState({
      [target.name]: value,
    });
  };

  botaoExcluir = (key) => {
    const { baralho } = this.state;
    const array = baralho;
    array.splice(key, 1);
    const superTrunfo = array.some((carta) => carta.cardTrunfo === true);
    if (superTrunfo === false) {
      this.setState(() => ({
        hasTrunfo: false,
      }));
    }
    this.setState(() => ({
      baralho: array,
    }));
  };

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
    const tamanhoArray = 6;
    let estadoVazio = Object.values(this.state)
      .some((estadoAtual, index) => estadoAtual === '' && index < tamanhoArray);
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
    const { cardName, cardDescription, baralho, hasTrunfo, filteredName, filteredRare,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, filteredSuperTrunfo } = this.state;
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
        <p>Filtro pelo nome</p>
        <input
          name="filteredName"
          type="text"
          data-testid="name-filter"
          onChange={ this.handleFilter }
        />
        <select
          name="filteredRare"
          data-testid="rare-filter"
          onChange={ this.handleFilter }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="trunfo-filter" name="filteredSuperTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="filteredSuperTrunfo"
            data-testid="trunfo-filter"
            onChange={ this.handleFilter }
          />
        </label>
        <ul>
          { baralho.map((carta, index) => (
            <Card
              key={ index }
              cardName={ carta.cardName }
              cardDescription={ carta.cardDescription }
              cardAttr1={ carta.cardAttr1 }
              cardAttr2={ carta.cardAttr2 }
              cardAttr3={ carta.cardAttr3 }
              cardImage={ carta.cardImage }
              cardRare={ carta.cardRare }
              cardTrunfo={ carta.cardTrunfo }
              buttonID={ () => { this.botaoExcluir(index); } }
            />
          )).filter((cardFilterSuperTrunfo) => {
            if (filteredSuperTrunfo) {
              if (cardFilterSuperTrunfo.props.cardTrunfo) {
                document.getElementsByName('filteredName')[0].disabled = true;
                document.getElementsByName('filteredRare')[0].disabled = true;
                return cardFilterSuperTrunfo;
              } return null;
            }
            document.getElementsByName('filteredName')[0].disabled = false;
            document.getElementsByName('filteredRare')[0].disabled = false;
            return cardFilterSuperTrunfo;
          }).filter((cardFilterName) => cardFilterName.props.cardName
            .includes(filteredName) && cardFilterName)
            .filter((cardFilterRare) => {
              if ((cardFilterRare.props.cardRare === filteredRare)
                || (filteredRare === 'todas')) {
                return cardFilterRare;
              } return null;
            })}
        </ul>
      </div>
    );
  }
}

export default App;
