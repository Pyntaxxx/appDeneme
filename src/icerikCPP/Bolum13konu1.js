import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum13konu1() {
  return (
    <View>
      <Text style={styles.text}>
      Operatörleri değişkenler ve değerler üzerinde işlem yapmak için
        kullanırız.{"\n"} {"\n"}
        C++ operatörleri aşağıdaki gruplara ayrılır :{"\n"} {"\n"}
        ●Aritmetik (Arithmetic) operatörler{"\n"}
        ●Atama (Assignment) operatörleri{"\n"}
        ●Karşılaştırma (Comparison) operatörleri{"\n"}
        ●Mantıksal (Logical) operatörler{"\n"}
        ●Bitsel (Bitwise) operatörler{"\n"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 10,
    marginLeft: 10,
  },
});
