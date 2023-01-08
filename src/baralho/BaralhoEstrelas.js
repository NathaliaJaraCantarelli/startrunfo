import Protoestrela from '../images/Protoestrela.jpg';
import AnaMarrom from '../images/AnaMarrom.jpg';
import AnaVermelha from '../images/AnaVermelha.jpg';
import AnaNegra from '../images/AnaNegra.jpg';
import AnaAmarela from '../images/AnaAmarela.jpg';
import AnaBranca from '../images/AnaBranca.jpg';
import GiganteVermelha from '../images/GiganteVermelha.jpg';
import SupergiganteAzul from '../images/SupergiganteAzul.jpg';
import SuperNova from '../images/SuperNova.jpg';
import Nebulosa from '../images/Nebulosa.jpg';
import BuracoNegro from '../images/BuracoNegro.jpg';
import EstrelaDeNeutrons from '../images/EstrelaDeNeutrons.jpg';

const muitoRaro = 'muito raro';

const BaralhoEstrelas = [{
  cardName: 'protoestrela',
  cardDescription: 'Contração de uma nuvem molecular gigante no meio interestelar',
  cardAttr1: 85,
  cardAttr2: 10,
  cardAttr3: 55,
  cardImage: Protoestrela,
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'anã marrom',
  cardDescription:
  'Objeto formado de plasma e composto em maior quantidade de hidrogênio e hélio',
  cardAttr1: 55,
  cardAttr2: 70,
  cardAttr3: 25,
  cardImage: AnaMarrom,
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'anã vermelha',
  cardDescription:
  'Uma das menores e mais frias estrelas da sequência principal',
  cardAttr1: 60,
  cardAttr2: 20,
  cardAttr3: 70,
  cardImage: AnaVermelha,
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'anã negra',
  cardDescription:
  'Hipotética resultante do consumo total da energia térmica de uma anã branca',
  cardAttr1: 45,
  cardAttr2: 75,
  cardAttr3: 90,
  cardImage: AnaNegra,
  cardRare: muitoRaro,
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'anã amarela',
  cardDescription:
  'O Sol, um exemplo típico de sequência principal de classe G',
  cardAttr1: 30,
  cardAttr2: 85,
  cardAttr3: 35,
  cardImage: AnaAmarela,
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'anã branca',
  cardDescription:
  'É um remanescente composto principalmente por matéria eletronicamente degenerada',
  cardAttr1: 50,
  cardAttr2: 55,
  cardAttr3: 75,
  cardImage: AnaBranca,
  cardRare: 'raro',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'gigante vermelha',
  cardDescription: 'Em uma fase tardia',
  cardAttr1: 35,
  cardAttr2: 35,
  cardAttr3: 80,
  cardImage: GiganteVermelha,
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'supergigante azul',
  cardDescription: 'Quente e luminosa',
  cardAttr1: 70,
  cardAttr2: 60,
  cardAttr3: 50,
  cardImage: SupergiganteAzul,
  cardRare: 'raro',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'supernova',
  cardDescription: 'Chega ao fim de sua vida produz-se uma explosão',
  cardAttr1: 80,
  cardAttr2: 40,
  cardAttr3: 60,
  cardImage: SuperNova,
  cardRare: 'raro',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'nebulosa',
  cardDescription: 'Grandes nuvens espalhadas pelo espaço interestelar',
  cardAttr1: 65,
  cardAttr2: 30,
  cardAttr3: 85,
  cardImage: Nebulosa,
  cardRare: 'raro',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'estrela de nêutrons',
  cardDescription: 'Superdensos',
  cardAttr1: 75,
  cardAttr2: 90,
  cardAttr3: 45,
  cardImage: EstrelaDeNeutrons,
  cardRare: muitoRaro,
  cardTrunfo: false,
  isSaveButtonDisabled: false,
},
{
  cardName: 'buraco negro',
  cardDescription: 'Campo gravitacional tão intenso que nada escapa',
  cardAttr1: 90,
  cardAttr2: 80,
  cardAttr3: 40,
  cardImage: BuracoNegro,
  cardRare: muitoRaro,
  cardTrunfo: true,
  isSaveButtonDisabled: false,
}];

export default BaralhoEstrelas;
