const salvaCarta = ({ baralho, cardName, cardDescription, cardAttr1, cardAttr2,
  cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled }) => {
  const objetoPadrao = {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    isSaveButtonDisabled,
  };
  const arrayCompleto = baralho;
  arrayCompleto.push(objetoPadrao);
  return arrayCompleto;
};

export default salvaCarta;
