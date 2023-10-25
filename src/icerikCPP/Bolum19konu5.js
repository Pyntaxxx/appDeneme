import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum19konu5() {
  return (
    <ScrollView>
      <Text style={styles.text2}>Çok Boyutlu Diziler</Text>
      <Text style={styles.text1}>
      ●Çok boyutlu bir dizi bildirmek için değişken tipini tanımlarız, {"\n"}dizinin
        adını belirtiriz,{"\n"}ardından ana dizinin kaç öğeye sahip olduğunu belirten
        köşeli parantezleri ve ardından alt dizilerin kaç öğeye sahip olduğunu
        gösteren başka bir köşeli parantez kümesini belirtiriz.
      </Text>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        string harfler[2][4] = {"{"}
        {"{"} "A", "B", "C", "D" {"}"},{"{"} "E", "F", "G", "H" {"}"}
        {"}"};{"\n"}
        {"\n"}
        cout {"<< "} harfler[0][2] ;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
      </Text>

      <Image
        style={styles.img2}
        source={require("../../assets/bolum19konu5.webp")}
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
    width: 85,
    height: 90,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
