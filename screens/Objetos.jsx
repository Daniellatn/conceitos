import { Text } from 'react-native-paper'

const Objetos = () => {

  const carro = { marca: 'vw', modelo: 'Voyage', ano: '2011', cor: 'prata', foto: '' }
  const carros = ['Fusca', 'Celta', 'Pálio', 'Gol', 'Ka']

  return (
    <>
      {carros.map(item => (
        <Text>{item}</Text>
      ))}
    </>
  )
}

export default Objetos