import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum17konu3() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Programlama dillerinde “void” kelimesi tipsiz , tipi belirtilmemiş
        olarak aktırılır.{'\n'} ●Burada kastedilen ise fonksiyonun herhangi bir veri
        tipine sahip olmadığıdır.
      </Text>
      <Text style={styles.text}>
        //FONKSİYON YAPISI{"\n"}
        {"\n"}
        void FonksiyonAdi(){"{"}
        {"\n"}
        {"\n"}
        //Çalıştırılacak kod {"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        //Fonksiyonun çağrılması{"\n"}
        {"\n"}
        int main(){"{"}
        {"\n"}
        {"\n"}
        FonksiyonAdi();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Text style={styles.text}>
        //ÖRNEK:{"\n"}
        {"\n"}
        void yazdir(){"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} "Sedef Altunay" {"<<"} endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        int main(){"{"}
        {"\n"}
        {"\n"}
        yazdir();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
    </ScrollView>
  );
  {
    ("}");
  }
}
const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 5,
    marginLeft: 10,

  },
  img: {
    width: "100%",
    height: 126,
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
    width: 100,
    height: 40,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
