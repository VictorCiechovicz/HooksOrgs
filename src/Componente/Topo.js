import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import logo from '../assets/logo.png';

export default function Topo() {
  return (
    <View style={estilos.topo}>
      <Image source={logo} style={estilos.imagem} />
      <Text style={estilos.boasvindas}>Olá Victor</Text>
      <Text style={estilos.legenda}>Encontre os melhores Produtores</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasvindas: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
  },
  legenda: {
    fontSize: 16,
    lineHeigh: 6,
  },
});
