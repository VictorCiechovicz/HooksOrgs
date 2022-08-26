import React, {useState,useReducer} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Estrelas from './Estrelas';

export default function Produtor({nome, imagem, distancia, estrela}) {
  //const [selecionado, setSelecionado] = useState(false);
  const [selecionado,inverterSelecionado]= useReducer(
    (selecionado)=> !selecionado,
    false
  );

  return (
    <TouchableOpacity
      onPress={inverterSelecionado}
      style={estilos.cardContainer}>
      <View style={estilos.wrapper}>
        <Image source={imagem} style={estilos.imagem} />

        <View style={estilos.wrapperwrapper}>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrela}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
      </View>

      <View style={estilos.wrapperdistancia}>
        <Text style={estilos.distancia}>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    elevation: 4,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperwrapper: {},
  imagem: {
    width: 50,
    height: 50,
    margin: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  wrapperdistancia: {
    alignItems: 'center',
    margin: 15,
  },
  distancia: {
    fontSize: 12,
  },
});
