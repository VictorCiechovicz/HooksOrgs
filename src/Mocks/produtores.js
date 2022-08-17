import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jennyjack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Grenn',
      imagem: green,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrela: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrela: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Jenny Jack Farm',
      imagem: jennyjack,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrela: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrela: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrela: gerarNumeroAleatorio(1, 5),
    },
  ],
};

export default produtores;
