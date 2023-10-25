import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'

export default function CppYorumSatiri() {
  return (
    <ScrollView>
      <Text style={styles.text2}>C++ Yorum Satırı</Text>
      <Text style={styles.text3}>
      Yorum satırı oluşturmak için önce şu ifadeyi kullan: “//”
      </Text>
      <Text style={styles.text}>
      // This is a comment{"\n"}{"\n"}
      cout {"<<"} "Hello World!" {"<<"} endl{";"}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 20,
    borderWidth: 2,
    padding: 5,
  },
  text2: {
    fontSize: 30,
    margin: 20,
    padding: 5,
    color: "red",
  },
  text3: {
    fontSize: 20,
    margin: 20,
    padding: 5,
  },
});