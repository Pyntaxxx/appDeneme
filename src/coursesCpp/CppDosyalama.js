import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppDosyalama({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Dosyalama İşlemleri");
  };
  const handlePress2 = () => {
    navigation.navigate("Dosya oluşturma");
  };
  const handlePress3 = () => {
    navigation.navigate("Dosyaya yazma");
  };
  const handlePress4 = () => {
    navigation.navigate("Dosya okuma");
  };
  const handlePress5 = () => {
    navigation.navigate("Dosyayı kapatma");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title}>C++ Dosyalama İşlemleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Dosya oluşturma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title}>Dosyaya yazma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title}>Dosya okuma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title}>Dosyayı kapatma</Text>
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