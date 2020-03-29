import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App denis</Text>
    </View>
  );
}

const styles = StyleSheet.create({    //Todos elementos por padrão são display flex
  container: {
    flex: 1,  //Faz ocupar a tela toda
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title :{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
});
