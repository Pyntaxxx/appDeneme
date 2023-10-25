import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum19konu4() {
  return (
    <ScrollView>
      <Text style={styles.text2}>Bir Dizinin Boyutunu Alma</Text>
      <Text style={styles.text1}>
      ●Bunu sağlayan fonksiyon: sizeof(){"\n"}
        {"\n"}
        ●Bir dizinin kaç öğeye sahip olduğunu bulmak için dizinin boyutunu,
        içerdiği veri türünün boyutuna bölmemiz gerekir.
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
        int sayilar[5] = {"{"}10, 20, 30, 40, 50 {"}"};{"\n"}
        {"\n"}
        cout {"<< "}sizeof(sayilar) / sizeof(int) ;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
      </Text>

      <Image
        style={styles.img2}
        source={require("../../assets/bolum19konu4.webp")}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
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
    width: 165,
    height: 80,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
