import { StyleSheet, View } from 'react-native'

import Topo from './Components/Topo'
import Detalhes from './Components/Detalhes'
import Itens from './Components/Itens'

export function Cesta({ topo, detalhes}) {
  return (
    <>
      <Topo {...topo}/>
      <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
        <Itens />
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})