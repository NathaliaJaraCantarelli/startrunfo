import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import BaralhoEstrelas from './baralho/BaralhoEstrelas';
import salvaCarta from './functions/SalvaCarta';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: true,
      baralho: [...BaralhoEstrelas],
      filteredName: '',
      filteredRare: 'todas',
      filteredSuperTrunfo: false,
    };
  }

  handleFilter = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  botaoExcluir = (key) => {
    const { baralho } = this.state;
    const array = baralho;
    array.splice(key, 1);
    const superTrunfo = array.some((carta) => carta.cardTrunfo);
    if (!superTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    this.setState({ baralho: array });
  };

  testaValoresAtt = (attr, nomeAttr) => {
    let attrValue = parseInt(attr, 10);
    const valueMax = 90;
    if (attrValue > valueMax) {
      attrValue = valueMax;
      this.setState({ isSaveButtonDisabled: true });
    } else if ((Number.isNaN(attrValue)) || (attrValue < 0)) {
      attrValue = 0;
      this.setState({ isSaveButtonDisabled: true });
    }
    this.setState({ [nomeAttr]: attrValue });
    return attrValue;
  };

  somaAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const cardAttrValueTotal = [cardAttr1, cardAttr2, cardAttr3];
    const soma = cardAttrValueTotal
      .reduce((acc, curr, i) => acc + this.testaValoresAtt(curr, `cardAttr${i + 1}`), 0);
    return soma;
  };

  habilitaBotao = () => {
    const tamanhoArray = 6;
    let estadoVazio = Object.values(this.state)
      .some((estadoAtual, index) => estadoAtual === '' && index < tamanhoArray);
    const somaAtual = this.somaAttr();
    const limite = 210;
    if (somaAtual > limite) {
      estadoVazio = true;
    }
    return estadoVazio;
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [target.name]: value }), () => {
      this.setState(() => ({ isSaveButtonDisabled: this.habilitaBotao() }));
    });
  };

  onSaveButtonClick = () => {
    const arrayCompleto = salvaCarta(this.state);
    const superTrunfo = arrayCompleto.some((carta) => carta.cardTrunfo);
    if (superTrunfo) {
      this.setState(() => ({ hasTrunfo: true }));
    }
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      baralho: arrayCompleto,
    }));
  };

  render() {
    const { cardName, cardDescription, baralho, hasTrunfo, filteredName, filteredRare,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, filteredSuperTrunfo } = this.state;

    const filterName = document.getElementsByName('filteredName')[0];
    const filterRare = document.getElementsByName('filteredRare')[0];

    return (
      <div>
        <h1 className="title-geral">StarTrunfo </h1>
        <div className="form-card">
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
        <h2 className="title-geral">Cartas</h2>
        <div className="filtro-cards">
          <input
            placeholder="Filtro pelo nome"
            className="form-control"
            name="filteredName"
            type="text"
            data-testid="name-filter"
            onChange={ this.handleFilter }
          />
          <select
            className="form-control"
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
            <div className="super-trunfo-filtro form-control">
              <p>Super Trunfo </p>
              <input
                type="checkbox"
                name="filteredSuperTrunfo"
                data-testid="trunfo-filter"
                onChange={ this.handleFilter }
              />
            </div>
          </label>
        </div>
        <ul>
          { baralho.map((carta, index) => (
            <Card
              key={ index }
              index={ index }
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
                filterName.disabled = true;
                filterRare.disabled = true;
                return cardFilterSuperTrunfo;
              } return null;
            }
            if (filterName) {
              filterName.disabled = false;
              filterRare.disabled = false;
              return cardFilterSuperTrunfo;
            } return cardFilterSuperTrunfo;
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
