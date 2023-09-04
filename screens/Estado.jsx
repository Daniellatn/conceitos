import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import styles from '../styles/styles'

const Estado = ({ navigation }) => {

  const [qtd, setQtd] = useState(0)

  function adicionar() {
    setQtd(qtd + 1)
  }

  function diminuir() {
    setQtd(qtd - 1)
  }

  return (
    <>
      <Button mode="contained" onPress={() => navigation.navigate('home')}>Home</Button>
      <View style={styles.linha}>
        <Button mode="contained" onPress={diminuir}>
          -
        </Button>
        <Text style={styles.texto}>{qtd}</Text>
        <Button mode="contained" onPress={adicionar}>
          +
        </Button>
      </View>
    </>
  )
}

export default Estado