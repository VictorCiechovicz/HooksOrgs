import React, {useEffect, useState} from 'react';

import {Text, StyleSheet, FlatList} from 'react-native';

import {carregaProdutores} from '../servicos/carregaDados';
import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 25,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  lista: {
    alignItems: 'center',
  },
});
