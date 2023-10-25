import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum20konu5() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        #include {"<string>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        string myString = "Hello";{"\n"}
        {"\n"}
        myString[0] = 'J';{"\n"}
        {"\n"}
        cout {"<<"} myString;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum20konu5.webp")}
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
    width: 140,
    height: 76,
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
