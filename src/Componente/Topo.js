import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import logo from '../assets/logo.png';

export default function Topo() {
  return (
    <View style={estilos.topo}>
      <Image source={logo} style={estilos.imagem} />
      <Text style={estilos.nome}>Olá Victor</Text>
      <Text style={estilos.boasvindas}>Encontre os melhores Produtores</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {},
  imagem: {
    width: 24,
    height: 20,
  },
  nome: {},
  boasvindas: {},
});
