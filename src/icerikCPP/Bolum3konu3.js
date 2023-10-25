import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum3konu3() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        ➦ İKİ SAYININ TOPLAMI PROGRAMI 🔴Problemi bul.{"\n"}
        {"\n"}
        ✔️Problem: matematiksel bir toplama işlemi{"\n"}
        {"\n"}
        🔴Çözüm için gerekli olanlar neler?{"\n"}
        {"\n"}
        ✔️Çözüm için iki sayıya ve bu sayıları saklayacağımız değişkenlere
        ihtiyacımız var.{"\n"}
        {"\n"}
        🔴Girdi, çıktı ve işlemleri bul.{"\n"}
        {"\n"}
        ✔️Sayılar ve toplama{"\n"}
        {"\n"}
        🔴Algoritmayı yaz.{"\n"}
        {"\n"}
        ✔️değişkenler: sayı1, sayı2, toplam{"\n"}
        {"\n"}
        ✔️toplam, sayı1,sayı2 değişkenlerini tanımla sayı1=? sayı2=?
        toplam=s1+s2{"\n"}
        🔴 Programlama diliyle yeniden yaz.
      </Text>
      <Text style={styles.text}>
        int sayi1, sayi2, toplam;{"\n"}
        {"\n"}
        toplam = sayi1 + sayi2;{"\n"}
        {"\n"}
        cout {"<<"} toplam {"<<"} endl;{"\n"}
        {"\n"}
      </Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
    padding: 10,
    borderWidth: 5,
  },
});
