import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Pagina1 from './screens/Pagina1';
import Pagina2 from './screens/Pagina2';
import Pagina3 from './screens/Pagina3';
import Array from './screens/Array';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Objetos from './screens/Objetos';
import Estado from './screens/Estado';
import Home from './screens/Home';
import Carros from './screens/Carros';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home} options={{ title: "Home" }} />
        <Stack.Screen name='estado' component={Estado} options={{ title: "Estados" }} />
        <Stack.Screen name='page1' component={Pagina1} options={{ title: "Página 1" }} />
        <Stack.Screen name='page2' component={Pagina2} options={{ title: "Página 2" }} />
        <Stack.Screen name='page3' component={Pagina3} options={{ title: "Página 3" }} />
        <Stack.Screen name='objeto' component={Objetos} options={{ title: "Objetos" }} />
        <Stack.Screen name='array' component={Array} options={{ title: "Arrays" }} />
        <Stack.Screen name='carros' component={Carros} options={{ title: "Carros" }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: '#FF69B4',
    borderStyle: 'solid',
    borderWidth: 5,
    marginBottom: 20
  },
  titulo: {
    color: 'white',
    fontSize: 35,
    padding: 20,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#FF69B4'
  },
  paragrafo: {
    fontSize: 25
  }
});
