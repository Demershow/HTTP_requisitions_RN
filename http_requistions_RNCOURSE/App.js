import React, {Component} from "react";
import {View, StyleSheet, Text, FlatList, ActivityIndicator} from "react-native";



import api from "./src/services/api";
import Filmes from "./src/components/filmes";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: true
    };
  }

  async componentDidMount() {
    const response = await api.get("/r-api/?api=filmes")
    this.setState({filmes: response.data, loading: false})
;
  }


  render() {

    if (this.state.loading) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1  }}>
          <ActivityIndicator size='large' color="#6ca2f7" />
          <Text style={{fontSize: 30, textAlign: "center"}}>Carregando...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
      );
    }

    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;