import { StyleSheet, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum24konu5() {
  return (
    <ScrollView>
      <Text style={styles.text2}>
        Sınıf içi tanımı
      </Text>
      <Text style={styles.text}>
        #include{" <iostream>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        class MyClass {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void selam() {"{"} {"\n"} {"\n"}
        cout {"<<"} "Selam Dünya!"; {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        {"}"};{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        MyClass myObj; {"\n"}
        {"\n"}
        myObj.selam();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum24konu4.webp")}
      />
      <Text style={styles.text2}>
        Sınıf dışı tanımı
      </Text>
      <Text style={styles.text1}>
      ●Bunun için class adı ardından ::operatörünü ve ardından method adını
        belirtiriz.
      </Text>
      <Text style={styles.text}>
        #include{" <iostream>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        class MyClass {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void selam();{"\n"}
        {"\n"}
        void MyClass::selam() {"{"}
        {"\n"}
        {"\n"}
        cout{"<<"} "Selam Dünya!";{"\n"}
        {"\n"}
        {"}"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        MyClass myObj; {"\n"}
        {"\n"}
        myObj.selam();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum24konu4.webp")}
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
