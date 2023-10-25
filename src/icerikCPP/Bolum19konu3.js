import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum19konu3() {
  return (
    <ScrollView>
      <Text style={styles.text2}>foreach Döngüsü</Text>
      <Text style={styles.text1}>
        Yalnızca bir dizideki öğeler arasında döngü yapmak için kullanılırız.
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
        int main(){"{"}
        {"\n"}
        {"\n"}
        int sayilar[5] = {"{"}10, 20, 30, 40, 50{"{"};{"\n"}
        {"\n"}
        for (int i : sayilar) {"{"}
        {"\n"}
        {"\n"}
        cout {"<< "} i {"<< "} "\n";{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>

      <Image
        style={styles.img2}
        source={require("../../assets/bolum19konu3.webp")}
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
    width: 200,
    height: 240,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
