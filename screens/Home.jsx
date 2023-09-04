import { View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';

const Home = ({ navigation }) => {
  return (
    <>
      <Button mode="contained" title='Página 1' onPress={() => navigation.navigate('page1')}>Página 1</Button>
      <Button mode="contained" title='Página 2' onPress={() => navigation.navigate('page2')}>Página 2</Button>
      <Button mode="contained" title='Página 3' onPress={() => navigation.navigate('page3')}>Página 3</Button>
      <Button mode="contained" title='Objetos' onPress={() => navigation.navigate('objeto')}>Objetos</Button>
      <Button mode="contained" title='Array' onPress={() => navigation.navigate('array')}>Array</Button>
      <Button mode="contained" title='Estados' onPress={() => navigation.navigate('estado')}>Estados</Button>
      <Button mode="contained" title='Carros' onPress={() => navigation.navigate('carros')}>Carros</Button>
    </>
  )
}

export default Home