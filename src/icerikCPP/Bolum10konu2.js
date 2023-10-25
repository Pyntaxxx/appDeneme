import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum10konu2() {
  return (
    <View>
      <Text style={styles.text}>
        (Değişken Türü) (Değişken Adı); {"\n"} {"\n"}
        Değişken yukarıda yazıldığı gibi tanımlanır.
      </Text>
      <Text style={styles.text2}>
        int sayi1; {"\n"} {"\n"}
        int sayi2; {"\n"} {"\n"}
        string metin; {"\n"} {"\n"}
        char karakter1; {"\n"} {"\n"}
        double sayi3;
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    margin: 20,
  },
  text2: {
    fontSize: 20,
    margin: 20,
    borderWidth: 2,
    padding: 5,
  },
});
