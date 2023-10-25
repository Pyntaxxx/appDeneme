import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum21konu2() {
  return (
    <ScrollView>
      <Text style={styles.text1}> ●Bunlara nokta(.) ile erişebiliriz.</Text>
      <Text style={styles.text}>
        #include {"<iostream>"}
        #include {"<string>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        struct {"{"} {"\n"}
        {"\n"}
        int sayi; {"\n"}
        {"\n"}
        string metin; {"\n"}
        {"\n"}
        {"}"} myStructure;{"\n"}
        {"\n"}
        myStructure.sayi= 1;{"\n"}
        {"\n"}
        myStructure.metin = "Merhaba Dünya!";
        {"\n"}
        {"\n"}
        cout {"<<"} myStructure.sayi {"<<"} endl{"\n"}
        {"\n"}
        cout {"<<"} myStructure.sayi {"<<"} endl{"\n"}
        {"\n"}
        cout {"<<"} myStructure.metin{"<<"} endl{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum21konu2.webp")}
      />
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
