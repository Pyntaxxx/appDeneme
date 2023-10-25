import { StyleSheet, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum13konu4() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Karşılaştırma operatörleri iki değeri (veya değişkeni) karşılaştırmamızı
        sağlar.{"\n"}
        ● Bir karşılaştırmanın dönüş değeri ya 1'dir ya da şeklindedir 0'dır.
        {"\n"}
        ●(1) doğru , (0) yanlış anlamına gelir. Bu değerler Boolean değerleri
        olarak bilinir.
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum13konu4.webp")}
      />

      <Text style={styles.text}>
        #include {"<iostream>"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        int x = 5; {"\n"} {"\n"}int y = 3; {"\n"} {"\n"}
        cout {"<<"}(x {'>'} y); {"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum13konu4-2.webp")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    margin: 20,
  },
  img: {
    width: 380,
    height: 165,
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
    width: 100,
    height: 40,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
