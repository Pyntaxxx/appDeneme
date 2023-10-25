import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function CppClass({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Classlar");
  };
  const handlePress2 = () => {
    navigation.navigate("Class ve Object");
  };
  const handlePress3 = () => {
    navigation.navigate("Class Oluşturmak");
  };
  const handlePress4 = () => {
    navigation.navigate("Nesne Oluşturmak");
  };
  const handlePress5 = () => {
    navigation.navigate("Class Methodları");
  };
  const handlePress6 = () => {
    navigation.navigate("Constructor");
  };
  const handlePress7 = () => {
    navigation.navigate("Constructor Parametreleri");
  };
  const handlePress8 = () => {
    navigation.navigate("Erişim Belirleyicileri");
  };
  const handlePress9 = () => {
    navigation.navigate("Private Üyelere Erişim (Encapsulation / Kapsülleme)");
  };
  const handlePress10 = () => {
    navigation.navigate("Inheritance (Miras)");
  };
  const handlePress11 = () => {
    navigation.navigate("Polymorphism (Polimorfizm)");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title}>C++ Classlar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
        <Text style={styles.title}>Class ve Object</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
        <Text style={styles.title}>Class Oluşturmak</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
        <Text style={styles.title}>Nesne Oluşturmak</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
        <Text style={styles.title}>Class Methodları</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress6}>
        <Text style={styles.title}>Constructor</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress7}>
        <Text style={styles.title}>Constructor Parametreleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress8}>
        <Text style={styles.title}>Erişim Belirleyicileri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress9}>
        <Text style={styles.title}>Private Üyelere Erişim (Encapsulation
        / Kapsülleme)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress10}>
        <Text style={styles.title}>Inheritance (Miras)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress11}>
        <Text style={styles.title}>Polymorphism (Polimorfizm)</Text>
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
