import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum16konu2() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
        ➤Do while döngüsü, while döngüsü ile neredeyse aynıdır. Tek fark do
        while döngüsü bir kere kesinlikle çalışır, sonra koşula bakar, koşul
        sağlandığı taktirde döngü tekrar çalışır.
      </Text>

      <Text style={styles.text}>
        #include {"<iostream>"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        int i = 0; {"\n"} {"\n"}
        do {"{"}
        cout {"<<"} i {"<<"} "\n"; i++;
        {"}"}
        while (i {"<"} 5); return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum16konu2.webp")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    margin: 20,
  },
  text: {
    fontSize: 15,
    margin: 15,
    borderWidth: 2,
    padding: 5,
  },
  img2: {
    width: 100,
    height: 210,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
