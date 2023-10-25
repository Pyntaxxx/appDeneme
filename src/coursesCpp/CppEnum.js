import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function CppEnum() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Eğer bir değişken içerisine girilecek olan veri sayılabilen yani
        sınırlıysa örneğin aylar, günler ve yönler gibi durumlarda enum yapısı
        kullanılır.
      </Text>
      <Text style={styles.text}>
        enum günler
        {"\n"}
        {"{"}
        Pazartesi,Sali,Carsamba,Persembe,Cuma,Cumartesi,Pazar
        {"}"}
        {"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        //enumun kullanımı {"\n"}
        {"\n"}
        gunler gun;{"\n"}
        {"\n"}
        gun = Pazar;//Arka planda sayısal değer tutuyor.{"\n"}
        {"\n"}
        cout {"<<"}gun{"<<"} endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
      </Text>
      <Text style={styles.text1}>
      ⚠️DİKKAT ET!!!{"\n"}
        ●Enum yapısında dizi mantığıyla 0'dan başlar, eğer 1'den başlatılırsa
        diğerleri buna göre düzenlenir.{"\n"}
        {"\n"}
        🔴 NOT: Enum yapısında değişken tanımlar gibi Türkçe karakter
        kullanılmamalıdır.{"\n"}
        {"\n"}
      </Text>
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
    width: 350,
    height: 110,
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
    height: 130,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
