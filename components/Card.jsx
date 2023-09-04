import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.titulo}>{ props.titulo }</Text>
        {props.children}
        <StatusBar style="auto" />
      </View>
    </>
  )
}

export default Card

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