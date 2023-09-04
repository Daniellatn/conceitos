import { Text } from 'react-native-paper'

const Array = ({navigation}) => {

  const carros = ['Fusca', 'Celta', 'Pálio', 'Gol', 'Ka']
  const carro = { marca: 'vw', modelo: 'Voyage', ano: '2011', cor: 'prata', foto: 'https://2.bp.blogspot.com/-f9xkKlvwHwY/WwNc3ifbEnI/AAAAAAAAFi0/WstAwOuxatcawcCHA865I7xj6TxCu78dQCLcBGAs/s640/VW-Voyage-2019%2B%25284%2529.jpg' }

  return (
    <>
      {carros.map(item => (
        <Text>{item}</Text>
      ))}
    </>
  )
}

export default Array