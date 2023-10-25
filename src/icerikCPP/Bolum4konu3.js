import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum4konu3() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        1-Matematiksel Operatörler:{"\n"}● Toplama: + (artı){"\n"}● Çıkarma: —
        (eksi){"\n"}● Çarpma: * (yıldız){"\n"}● Bölme: / (slash){"\n"}● Üs alma:
        ^ (caret){"\n"}● Mod: % (yüzde){"\n"}
        {"\n"}
        2-Karşılaştırma Operatörleri:{"\n"}● Eşit mi: =={"\n"}● Eşit değil mi:
        !={"\n"}● Küçüktür: {"<"}
        {"\n"}● Büyüktür:{">"}
        {"\n"}● Küçük veya eşittir: {"<="}
        {"\n"}● Büyük veya eşittir: {">="}
        {"\n"}
        {"\n"}
        3-Mantıksal Operatörler:{"\n"}● Ve(and): &&{"\n"}● Veya(or): II{"\n"}●
        Değil (not): !{"\n"}
        {"\n"}
        4-Genel Operatörler:{"\n"}● Atama: ={"\n"}● İşlem gruplama: (){"\n"}
        {"\n"}
        İŞLEM ÖNCELİĞİ{"\n"}
        1)parantez içleri{"\n"}
        2)Üs alma işlemleri{"\n"}
        3)Çarpma ve bölme işlemleri{"\n"}
        4)Toplama ve çıkarma işlemleri{"\n"}{"\n"}
        ⚠️UNUTMA: Kodlamadaki işlem önceliği hataları, yanlış sonuçlar
        alınmasına neden olabilir!!!
      </Text>
    </ScrollView>
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
