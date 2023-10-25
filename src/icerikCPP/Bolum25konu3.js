import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

export default function Bolum25konu3() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Dosya yazma işleminde yazılacak değerin ofstream değişkenine
        yönlendirilmesi yeterli olacaktır.
      </Text>
      <Text style={styles.text}>
        int main(){"{"}
        {"\n"} {"\n"}
        ofstream dosyaYaz("cikti.dat",ios::out);{"\n"} {"\n"}
        int x = 123;{"\n"} {"\n"}
        string isim = "Sedef";{"\n"} {"\n"}
        dosyaYaz {"<<"} x {"<<"}" " {"<<"}isim {"<<"} endl;{"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Text style={styles.text1}>
      ●Dosyanın var olup olmadığı ve açılabilir olup olmadığının is_open()
        metodu ile kontrol edilmesi faydalı olacaktır.
      </Text>
      <Text style={styles.text}>
        int main(){"{"}
        {"\n"}
        {"\n"}
        ofstream dosyaYaz("cikti.dat",ios::out);{"\n"}
        {"\n"}
        if(dosyaYaz.is_open()){"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} "Dosya açıldı." {"<<"} endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"}
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 5,
    marginLeft: 10,

  },
  text2: {
    fontSize: 29,
    margin: 20,
    color: "red",
  },
  img: {
    width: 200,
    height: 86,
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
