import { StyleSheet, Text, View, ScrollView,TouchableOpacity  } from 'react-native'
import React from 'react'

export default function CppSwitchCase({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Switch-Case Yapısı");
  };
  const handlePress2 = () => {
    navigation.navigate("C++ Switch-Case Yapısı Örneği");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title}>C++ Switch-Case Yapısı</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>C++ Switch-Case Yapısı Örneği</Text>
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