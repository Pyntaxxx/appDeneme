import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum23konu1() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Union, bileşenlerine ortak bir bellek alanını kullandıran bir veri
        türüdür.{"\n"}
        {"\n"}
        ●Union’ları tanımlamak için union anahtar sözcüğünü kullanıyoruz.
      </Text>
      <Text style={styles.text}>
        union araba{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[50];{"\n"}
        {"\n"}
        int fiyat;{"\n"}
        {"\n"}
        {"}"};
      </Text>
      <Text style={styles.text2}>Union Değişkenleri Oluşturmak</Text>
      <Text style={styles.text}>
        union araba{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[50];{"\n"}
        {"\n"}
        int fiyat;{"\n"}
        {"\n"}
        {"}"};{"\n"}
        {"\n"}
        int main(){"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        union araba araba1, araba2, *araba3;{"\n"}
        {"\n"}
        return 0;
        {"}"}
      </Text>
      <Text style={styles.text}>
        union araba{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[50];{"\n"}
        {"\n"}
        int fiyat;{"\n"}
        {"\n"}
        {"}"}araba1, araba2, *araba3;
      </Text>
      <Text style={styles.text1}>●Diğer yol;</Text>
      <Text style={styles.text}>
        union araba{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[50];{"\n"}
        {"\n"}
        int fiyat;{"\n"}
        {"\n"}
        {"}"} araba1, araba2, *araba3;
      </Text>
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
