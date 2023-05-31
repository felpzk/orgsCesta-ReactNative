import { View, Image, StyleSheet } from "react-native"
import Texto from "../../../components/Texto"

export default function Item({ item: { nome, imagem } }) {
  return (
    <View style={estilos.items}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  )
}

const estilos = StyleSheet.create({

  items: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    padding: 16,
    alignItems: 'center'
  },

  imagem: {
    width: 46,
    height: 46,
  },

  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 10,
    color: '#464646'
  }
})