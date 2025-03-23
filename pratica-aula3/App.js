import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import imagem from './assets/flamengo.png';
import imagem2 from './assets/steve.png'

let nome = 'Matheus';
let sobrenome = 'Prado';

class App extends Component{
  render(){
    return(
      <View>
        <Text>Hello World</Text>
        <Text>My first project</Text>
        <Text style={{ Color: '#FF0000', fontSize: 25, margin: 15}}>
          Programador
        </Text>
        <Image source={imagem}
          style={{width: 100, height: 100}}
        />
        <Image source={imagem2}
          style={{width: 150, height: 150}}
        />
        <Text>{nome}</Text>
        <Text>{sobrenome}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
