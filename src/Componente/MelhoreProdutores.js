import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';

import {carregaProdutores} from '../servicos/carregaDados';
import Produtor from './Produtor';

export default function MelhoresProdutores() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();

    setLista(retorno.lista);
  }, []);

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}) => nome}
    />
  );
}
