import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Bolum24konu7() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        #include{" <iostream>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        class Araba  {"{"}   {"\n"}{"\n"}    
  public:          {"\n"}{"\n"}
    string marka; {"\n"}{"\n"}
    string model;  {"\n"}{"\n"}
    int yil;      {"\n"}{"\n"}
    Araba(string x, string y, int z)  {"{"} {"\n"}{"\n"}
      marka = x;{"\n"}{"\n"}
      model = y;{"\n"}{"\n"}
      yil = z;{"\n"}{"\n"}
      {"}"}{"\n"}{"\n"}
      {"}"};{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        Araba arabaNesne1("BMW", "X5", 1999);{"\n"}{"\n"}
  Araba arabaNesne2("Ford", "Mustang", 1969);{"\n"}
        {"\n"}
        cout{"<<"} arabaNesne1.marka{"<<"}  " " {"<<"}  arabaNesne1.model {"<<"} " " {"<<"} arabaNesne1.yil{"<<"} "\n";{"\n"}{"\n"}
  cout {"<<"}  arabaNesne2.marka {"<<"}  " " {"<<"}  arabaNesne2.model{"<<"}  " " {"<<"} arabaNesne2.yil {"<<"}  "\n";{"\n"}{"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum24konu7.webp")}
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
