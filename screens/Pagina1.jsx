import { Button, Text } from 'react-native'
import Card from '../components/Card'

const Pagina1 = ({ navigation }) => {
  return (
    <>
      <Button title='Página 2' onPress={() => navigation.navigate('Page2')} />
      <Button title='Página 3' onPress={() => navigation.navigate('Page3')} />

      <Text>Pagina 1</Text>
      <Card titulo="Sem conteudo" />
      <Card titulo="Sem conteudo 2" />
      <Card titulo="Com conteúdo">
        <Text> Paragrafo 1 </Text>
        <Text> Paragrafo 2 </Text>
        <Text> Paragrafo 3 </Text>
        <Text> Paragrafo 4 </Text>
        <Button title='Detalhes' />
      </Card>
      <Card titulo="Sem conteudo 3" />
      <Card titulo="Com conteúdo 2">
        <Text> Paragrafo 1 </Text>
        <Text> Paragrafo 2 </Text>
        <Text> Paragrafo 3 </Text>
        <Text> Paragrafo 4 </Text>
      </Card>
    </>
  )
}

export default Pagina1