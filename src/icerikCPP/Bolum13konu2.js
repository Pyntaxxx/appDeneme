import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Bolum13konu2() {
  return (
    <View>
      <Text style={styles.text1}>
        Matematiksel işlemleri gerçekleştirmek için kullanırız.{"\n"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum13konu2.webp")}
      />

      <Text style={styles.text}>
        #include {"<iostream>"}
        using namespace std; int main() {"{"} {"\n"} {"\n"}
        int toplam = 100 + 50; {"\n"} {"\n"}
        cout {"<<"} toplam; {"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum13konu2-2.webp")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    margin: 20,
  },
  img: {
    width: 400,
    height: 220,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    margin: 20,
    borderWidth: 2,
    padding: 5,
  },
  img2: {
    width: 160,
    height:64,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
