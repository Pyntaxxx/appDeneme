import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Bolum24konu9() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Kapsülleme, veri güvenliği için oldukça kullanışlıdır.{"\n"} {"\n"}
      ●Kullanılan Methodlar: get ve set
      </Text>
      <Text style={styles.text}>
        #include{" <iostream>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        class Calisan {"{"} {"\n"} {"\n"}
        private: {"\n"} {"\n"}
        void setMaas(int s) {"{"} {"\n"} {"\n"}
        maas = s;{"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        int getMaas() {"{"}
        {"\n"}
        {"\n"}
        return maas;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"};{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        Calisan calisan1; {"\n"}
        {"\n"}
        calisan1.setMaas(50000);{"\n"}
        {"\n"}
        cout {"<<"} calisan1.getMaas();{"\n"}
        {"\n"}
        return 0;{"\n"}
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
    width: 300,
    height: 96,
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
