import { StyleSheet, Text,Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum23konu2() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
        ●Bir struct’ın tüm üyelerine bir kerede tüm üyelere yeterli bellek
        tahsis edildiğinde erişebiliriz. {"\n"} {"\n"}● Ancak Union’larda durum
        böyle değil. Bir kerede yalnızca bir birliğin bir üyesine erişebiliriz.{" "}
        {"\n"} {"\n"}● Aynı değişkeni oluşturmak için bellekte kapladıkları
        alanlar farklıdır.{"\n"}
        {"\n"}
        Union’ları tanımlamak için union anahtar sözcüğünü kullanıyoruz.
      </Text>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        union unionJob{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[32];{"\n"}
        {"\n"}
        float maas;{"\n"}
        {"\n"}
        int calisanNo; {"\n"} {"\n"}
        {"}"}uJob; struct structJob{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[32];{"\n"}
        {"\n"}
        float maas;{"\n"}
        {"\n"}
        int calisanNo; {"\n"} {"\n"}
        {"}"}sJob; int main(){"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} "size of union = "{"<<"}sizeof(uJob){"<<"} " bytes"{"<<"}{" "}
        endl;{"\n"}
        {"\n"}
        cout {"<<"} "size of structure = " {"<<"}sizeof(sJob) {"<<"} " bytes"{" "}
        {"<<"} endl;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}{" "}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum23konu2.webp")}
      />
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
    width: 376,
    height: 100,
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
