import { StatusBar, SafeAreaView, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import { Cesta } from './src/Telas/Cesta';

import mock from './src/mocks/cesta'


export default function App() {
  const [fonteCarregada] = useFonts({
    'MontSerratRegular': Montserrat_400Regular,
    'MontSerratBold': Montserrat_700Bold,
  })

  if(!fonteCarregada){
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <Cesta {...mock}/>
      <StatusBar />
    </SafeAreaView>
  );
}

