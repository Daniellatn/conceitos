import React from 'react'
import { ScrollView } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import cars from '../styles/cars'

const carros = [
  { id: 1, marca: 'VW', modelo: 'Voyage', ano: '2016', cor: 'Prata', foto: 'https://2.bp.blogspot.com/-f9xkKlvwHwY/WwNc3ifbEnI/AAAAAAAAFi0/WstAwOuxatcawcCHA865I7xj6TxCu78dQCLcBGAs/s640/VW-Voyage-2019%2B%25284%2529.jpg' },
  { id: 2, marca: 'GM', modelo: 'Onix', ano: '2020', cor: 'Branco', foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/12/01-galeria-onix-my23-1-e1671886765906.webp' },
  { id: 3, marca: 'Hyundai', modelo: 'HB20', ano: '2021', cor: 'Azul', foto: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/uploads/2019/08/09095016/HB20_Saga_front_blue-1160x870-1160x870.jpg' },
  { id: 4, marca: 'vw', modelo: 'Nivus', ano: '2022', cor: 'Cinza', foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/07/Volkswagen-Nivus-Highline-compara-735-1.jpg?quality=70&strip=info' },
  { id: 5, marca: 'Jeep', modelo: 'Renegade', ano: '2023', cor: 'Preto', foto: 'https://carroecarros.com.br/wp-content/uploads/2022/08/novo-jeep-renegade-2023.jpeg' },
  { id: 6, marca: 'Fiat', modelo: 'Fastback', ano: '2023', cor: 'Vermelho', foto: 'https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Fiat/376/Fiat+376+proje%C3%A7%C3%A3o+dianteira.jpg' },
]

const Carros = () => {
  return (
    <>
      <ScrollView>
        {carros.map((item) => (
          <Card key={item.id} style={cars.card}>
            <Card.Cover source={{ uri: item.foto }} />
            <Card.Content>
              <Text variant="titleLarge">{item.modelo} - {item.marca} </Text>
              <Text variant="bodyMedium">Ano: {item.ano}</Text>
              <Text variant="bodyMedium">Cor: {item.cor}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

    </>
  )
}

export default Carros