import { StyleSheet, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum24konu10() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
        C++’da nitelikleri ve yöntemleri bir sınıftan diğerine miras almamız
        mümkün.{"\n"} {"\n"}
        Miras kavramını iki kategoriye ayırıyoruz:{"\n"} {"\n"}● derived class
        (child) : miras alan sınıf{"\n"} {"\n"}●base class (parent) : miras
        alınan sınıf{"\n"} {"\n"}
        miras almak için :sembolünü kullanıyoruz.
      </Text>
      <Text style={styles.text}>
        #include{" <iostream>"} {"\n"} {"\n"}
        #include{" <string>"}
        {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        // Base class{"\n"} {"\n"}
        class Arac {"{"}
        public: string marka = "Ford"; void korna() {"{"}
        cout {"<<"} "Tuut, tuut! \n" ;{"}"}
        {"}"};{"\n"}
        {"\n"}
        // Derived class {"\n"} {"\n"}
        class Araba: public Arac {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        string model = "Mustang"; {"\n"} {"\n"}
        {"}"}; {"\n"} {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        Araba araba1; {"\n"} {"\n"}
        araba1.korna(); {"\n"} {"\n"}
        cout {"<<"} araba1.marka + " " + araba1.model;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum24konu10.webp")}
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
