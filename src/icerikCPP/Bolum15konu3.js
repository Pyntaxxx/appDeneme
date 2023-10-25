import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum15konu3() {
  return (
    <View>
      <Text style={styles.text1}>
      ●Break ve continue komutları döngünün durması veya devam etmesi için
        kullanılır. Break komutu bulunulan döngüden çıkmaya yarar.{"\n"} {"\n"}
        ⚠️DİKKAT: Döngü ifadelerinde dikkat edilmesi gereken temel nokta döngünün
        bir noktada kırılması (break) yada şart kısmının döngünün bir aşamasında
        gerçeklemek zorunda olduğudur.{"\n"} {"\n"}● Eğer şart gerçekleşmezse
        yada döngü kırılmazsa, döngü sonsuz döngüye girecek ve programın
        kilitlenmesine sebep olacaktır.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    margin: 20,
  },
});
