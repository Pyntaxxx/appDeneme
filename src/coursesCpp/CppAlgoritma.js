import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppAlgoritma({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("Algoritma Nedir");
  };
  const handlePress2 = () => {
    navigation.navigate("Algoritma Örnek");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title}>Algoritma Nedir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Algoritma Örnek</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#e9967a",
  },
})