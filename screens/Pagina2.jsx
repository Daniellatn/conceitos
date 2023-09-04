import { Avatar, Button, Card, Text } from 'react-native-paper'

const Pagina2 = ({ navigation }) => {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return (
    <>
      <Button title='Página 1' onPress={() => navigation.navigate('Page1')}>Pagina 1</Button>
      <Button title='Página 3' onPress={() => navigation.navigate('Page3')}>Pagina 3</Button>

      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={{ marginTop: 20, marginBottom: 20 }}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content style={{ marginTop: 10 }}>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </>
  )
}

export default Pagina2