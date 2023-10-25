import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum1konu5() {
  return (
    <View>
      <Text style={styles.text}>●Visual Studio Code</Text>
      <Text style={styles.text}>●Eclipse</Text>
      <Text style={styles.text}>●NetBeans</Text>
      <Text style={styles.text}>●Sublime Text</Text>
      <Text style={styles.text}>●Atom</Text>
      <Text style={styles.text}>●Code::Blocks</Text>
      <Text style={styles.text}>●Dev C++</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 10,
    marginLeft: 10,
  },
})