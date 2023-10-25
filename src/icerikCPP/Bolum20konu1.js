import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum20konu1() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Metin depolamak için kullanırız.{"\n"}
        {"\n"}
        ●Bir stringdeğişkene atanan değer, çift tırnak içine alınır.{"\n"}
        {"\n"}
        ●String fonksiyonlarını kullanabilmek için şu kütüphaneyi dahi etmemiz
        gerekli: {"<string>"}
      </Text>
      <Text style={styles.text}>string selam = "SELAM!!!";</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    margin: 20,
  },
  text2: {
    fontSize: 29,
    margin: 20,
    color: "red",
  },
  img: {
    width: "100%",
    height: 126,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 15,
    margin: 15,
    borderWidth: 2,
    padding: 5,
  },
  img2: {
    width: 250,
    height: 110,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
