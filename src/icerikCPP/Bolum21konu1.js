import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum21konu1() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Birçok ilgili değişkeni tek bir yerde gruplandırmamızı sağlar.{"\n"}
        {"\n"}
        ●Diziden farklı olarak bir structure, birçok farklı veri türünü (int,
        string, bool vb.) içerebilir.
      </Text>
      <Text style={styles.text2}>Struct Oluşturma</Text>
      <Text style={styles.text1}>
      ● struct anahtar kelimesini kullanırız.{"\n"}
        {"\n"}● Atamalardan sonra struct değişkeninin adını belirtiriz.
      </Text>
      <Text style={styles.text}>
        struct{"{"}
        {"\n"}
        {"\n"}
        int sayi; {"\n"}
        {"\n"}
        string metin; {"\n"}
        {"\n"}
        {"}"} myStructure; {"\n"}
        {"\n"}
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text1: {fontSize: 24,
    marginRight: 5,
    marginVertical: 5,
    marginLeft: 10,

  },
  text2: {
    fontSize: 29,
    margin: 20,
    color: "red",
  },
  img: {
    width: 350,
    height: 110,
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
    width: 200,
    height: 130,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
