import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum24konu6() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
        ●Bir class nesnesi oluşturulduğunda otomatik olarak çağrılan özel bir
        methottur.
      </Text>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        class MyClass {"{"} // The class{"\n"}
        {"\n"}
        public: // Access specifier{"\n"}
        {"\n"}
        MyClass() {"{"} // Constructor{"\n"}
        {"\n"}
        cout{"<<"} "Hello World!";{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"};{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        MyClass myObj; // Create an object of MyClass (this will call the
        constructor){"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum24konu6.webp")}
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
    width: 300,
    height: 96,
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
