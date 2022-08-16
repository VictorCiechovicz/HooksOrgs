import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import logo from '../assets/logo.png';

import {carregaTopo} from '../servicos/carregaDados';

class Topo extends React.Component {
  
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({topo: retorno});
  }
  componentDidMount() {
    this.atualizaTopo();
  }
  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasvindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
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

export default Topo;
