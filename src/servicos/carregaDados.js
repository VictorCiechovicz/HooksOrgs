import produtores from '../Mocks/produtores';
import topo from '../Mocks/topo';

export const carregaProdutores = () => {
  return produtores;
};

export const carregaTopo = () => {
  return topo;
};

//Neste caso estamos simulando um carregamento de dados,
//como fizemos os mocks que são um banco de dados onde contem as informações
//dos produtores e do topo.
