import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'

import Texto from './Texto'

import logo from '../assets/logo.png'
import topo from '../assets/topo.png'

const width = Dimensions.get('screen').width

export function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>Detalhes da cesta</Texto>

      <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de verduras</Texto>
        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={logo}/>
          <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da
          fazenda direto para a sua cozinha
        </Texto>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width,
  },

  titulo: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16
  },

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold'
  },

  fazenda:{
    flexDirection: 'row',
    paddingVertical: 12,
  },
  
  imagemFazenda:{
    width: 32,
    height: 32,
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  
  },

  descricao: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26
  },

  preco: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  }
})