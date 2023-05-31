import { StyleSheet, View, FlatList } from 'react-native'

import Topo from './Components/Topo'
import Detalhes from './Components/Detalhes'
import Item from './Components/Item'
import Texto from '../../components/Texto'

export function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return <>
            <Topo {...topo} />
            <View style={estilos.cesta}>
              <Detalhes {...detalhes} />
              <Texto style={estilos.titulo}>{itens.titulo}</Texto>
            </View>
          </>
        }}
      />


    </>
  )
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  titulo: {
    color: '#363636',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },

})