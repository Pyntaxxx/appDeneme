import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppArrays({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Diziler (Array)");
  };
  const handlePress2 = () => {
    navigation.navigate("Bir Dizi İçinde Döngü");
  };
  const handlePress3 = () => {
    navigation.navigate("foreach Döngüsü");
  };
  const handlePress4 = () => {
    navigation.navigate("Bir Dizinin Boyutunu Alma");
  };
  const handlePress5 = () => {
    navigation.navigate("Çok Boyutlu Diziler");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title}>C++ Diziler (Array)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Bir Dizi İçinde Döngü</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title}>foreach Döngüsü</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title}>Bir Dizinin Boyutunu Alma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title}>Çok Boyutlu Diziler</Text>
      </TouchableOpacity>
    </ScrollView>
  );
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
});