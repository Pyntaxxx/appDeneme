import { StyleSheet, Text, Image, ScrollView, View } from "react-native";
import React from "react";

export default function Bolum25konu4() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Okunacak dosya programda bir nesne olarak tanımlanır.{"\n"}
        {"\n"}
        ●Dosya okuma işlemi için ifstream sınıfının kurucu metoduna dosya adının
        verilmesi ve okuma biçimine göre getline veya get metodunun kullanılması
        yeterli olacaktır.
      </Text>
      <Text style={styles.text}>
        int main(){"{"}
        {"\n"}
        {"\n"}
        ifstream dosyaOku("cikti.dat",ios::in);{"\n"}
        {"\n"}
        string satir = "";{"\n"}
        {"\n"}
        if (dosyaOku.is_open()){"{"}
        {"\n"}
        {"\n"}
        while(getline(dosyaOku, satir) ){"{"}
        {"\n"}
        {"\n"}
        cout {"<<"}satir {"<<"}endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        dosyaOku.close();{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum25konu4.webp")}
      />
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
    width: 390,
    height: 150,
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
