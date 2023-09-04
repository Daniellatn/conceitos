import { Button } from "react-native-paper"


const Botoes = (props) => {
  return (
    <>
      <Button icon="camera" buttonColor="red" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </>
  )
}

export default Botoes