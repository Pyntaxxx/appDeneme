import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum3konu1() {
  return (
    <View>
      <Text style={styles.text}>
      ●Bilgisayarın belirli görevleri yerine getirmesi için dili kullanarak
        yazılmış yapılardır.{"\n"}
        ●Bilgisayara ne yapması gerektiğini söyler.{"\n"}
        ●Problemlere çözümler üretir ve bunları algoritmalar ile destekler.
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
