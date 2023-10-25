import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

export default function CppNedir({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Nedir");
  };
  const handlePress2 = () => {
    navigation.navigate("C++ Özellikleri");
  };
  const handlePress3 = () => {
    navigation.navigate("Neden C++ Kullanmalıyız?");
  };
  const handlePress4 = () => {
    navigation.navigate("C++ nerelerde kullanılır?");
  };
  const handlePress5 = () => {
    navigation.navigate("C++ Hangi IDE’ler kullanılabilir");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title}>C++ Nedir?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>Özellikleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title}>Neden C++ Kullanmalıyız?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title}>C++ nerelerde kullanılır?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title}>Hangi IDE’ler kullanılabilir?</Text>
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
