import { StatusBar, SafeAreaView, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import { Cesta } from './src/Telas/Cesta';

import mock from './src/mocks/cesta'


export default function App() {
  const [fonteCarregada] = useFonts({
    'MontSerratRegular': Montserrat_400Regular,
    'MontSerratBold': Montserrat_700Bold,
  })

  if(!fonteCarregada){
    return <View />
  }

  return (
    <SafeAreaView>
      <Cesta {...mock}/>
      <StatusBar />
    </SafeAreaView>
  );
}

