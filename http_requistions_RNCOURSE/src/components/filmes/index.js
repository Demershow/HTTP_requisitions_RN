import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,  TouchableOpacity } from 'react-native'

export default class Filmes extends Component {
  render() {
    const {nome, foto} = this.props.data;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo} >{nome}</Text>
          <Image
            source={{uri: foto}}
            style={styles.capa}
          />
          <View style={styles.areabotao}>
            <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
              <Text style={styles.botaoTexto}>LEIA MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFF",
    margin: 15,
    shadowRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 1
    },
    elevation: 3
  },
  capa: {
    height: 250,
    zIndex: 2
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    fontWeight: "bold"
  },
  areabotao: {
    alignItems: "flex-end",
    marginTop: -40,
    zIndex: 9
  },
  botao: {
    width: 100,
    backgroundColor: "#09A6FF",
    opacity: 1,
    padding: 8,
    borderRadius: 5, 
    alignItems: "center"
  },
  botaoTexto: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#FFF"
  }

});
