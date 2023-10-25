import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

export default function Bolum17konu4() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Bu fonksiyon tipi geriye değer döndürmez. {'\n'}●İlk fonksiyon ile yapı olarak
        benzese de bu fonksiyonlar parametreyi içinde bulundurur.
      </Text>
      <Text style={styles.text}>
        //FONKSİYON YAPISI {"\n"}
        {"\n"}
        void fonksiyonAdi(parametre){"{"} {"\n"}
        {"\n"}
        //Çalıştırılacak kodlar {"\n"}
        {"\n"}
        {"}"} {"\n"}
        {"\n"}
        //Fonsiyonun çağrılması {"\n"}
        {"\n"}
        int main(){"{"} {"\n"}
        {"\n"}
        fonksiyonAdi(parametre); {"\n"}
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
    margin: 20,
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
