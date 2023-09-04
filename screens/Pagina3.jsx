import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import Botoes from '../components/Botoes'

const Pagina3 = ({ navigation }) => {

  const LeftContent = props => <Avatar.Icon {...props} icon="bell" />

  const cards = [
    {
      id: 1,
      title: 'Card Title 1',
      subtitle: 'Card Subtitle 1'
    },
    {
      id: 2,
      title: 'Card Title 2',
      subtitle: 'Card Subtitle 2'
    },
    {
      id: 3,
      title: 'Card Title 3',
      subtitle: 'Card Subtitle 3'
    },
    {
      id: 4,
      title: 'Card Title 4',
      subtitle: 'Card Subtitle 4'
    }
  ]

  return (
    <>

      <Button title='Página 1' onPress={() => navigation.navigate('Page1')}>Pagina 1 </Button>
      <Button title='Página 2' onPress={() => navigation.navigate('Page2')}>Pagina 2</Button>
      
      {cards.map((item) => (
        <Card key={item.id} style={{ marginBottom: 15 }}>
          <Card.Title title={item.title} subtitle={item.subtitle} left={LeftContent} />
        </Card>
      ))}
      <Botoes />
    </>
  )
}

export default Pagina3