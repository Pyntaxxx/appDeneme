import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum25konu1() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Dosya işlemleri için fstream kütüphanesinde yer alan ifstream ve
        ofstream sınıfları kullanılır.{"\n"} {"\n"}
        ⚠️Dikkat!⚠️{"\n"} 
        Dosyayı;{"\n"}
        ●txt olarak kaydedince text formatında kaydetmiş oluruz (erişilebilir)
        {"\n"} 
        ●binery formatında kaydedince erişilemez, şifrelidir. (.dat){"\n"} {"\n"}
      </Text>
      <Text style={styles.text}>
        //Yukarıda belirtilen kütüphaneyi kullanmak için tanımlanması gerekir.
        {"\n"} {"\n"}
        #include {"<iostream>"}
        {"\n"} {"\n"}
        #include {"<fstream>"}
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
