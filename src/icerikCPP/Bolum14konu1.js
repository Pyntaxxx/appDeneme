import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum14konu1() {
  return (
    <View>
      <Text style={styles.text1}>
      ● Koşul operatörü olarak geçer.{"\n"} {"\n"}●Tek satırda bir koşul
        satırı oluşturmak için kullanılır.{"\n"} {"\n"}
        Anlamı:{"\n"} {"\n"}● koşul true ise ifade1 dönülsün.{"\n"} {"\n"}●
        koşul false ise ifade2 dönülsün
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 5,
    marginLeft: 10,

  },
});
