import { StyleSheet, View } from 'react-native'

import Topo from './Components/Topo'
import Detalhes from './Components/Detalhes'

export function Cesta({ topo, detalhes}) {
  return (
    <>
      <Topo {...topo}/>
      <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
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