import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum21konu3() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        #include {"<iostream>"}
        #include{" <string>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        struct {"{"} {"\n"}
        {"\n"}
        string ad; {"\n"}
        {"\n"}
        string bolum; {"\n"}
        {"\n"}
        int no; {"\n"}
        {"\n"}
        {"}"} ogrenci1, ogrenci2; {"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        araba araba1;{"\n"}{"\n"}
  araba1.marka = "BMW";{"\n"}{"\n"}
  araba1.model = "X5";{"\n"}{"\n"}
  araba1.yil = 1999;{"\n"}{"\n"}
        {"\n"}
        {"\n"}
        araba araba2;{"\n"}{"\n"}
  araba2.marka = "Ford";{"\n"}{"\n"}
  araba2.model = "Mustang";{"\n"}{"\n"}
  araba2.yil = 1969;{"\n"}{"\n"}
        cout {"<<"} araba1.marka {"<<"} " " {"<<"} araba1.model {"<<"} " "{"<<"}{" "}
        araba1.yil{"<<"}"\n";{"\n"}
        {"\n"}
        cout {"<<"} araba2.marka{"<<"} " " {"<<"} araba2.model {"<<"} " " {"<<"}{" "}
        araba2.yil {"<<"} "\n";{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum21konu4.webp")}
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
    width: 340,
    height: 70,
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
