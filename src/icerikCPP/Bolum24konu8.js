import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum24konu8() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      C++’da üç erişim belirteci vardır:{"\n"}{"\n"}

      ●public- üyelere sınıf dışından erişilebilir{"\n"}{"\n"}
      ●private- üyelere sınıf dışından erişilemez (veya görüntülenemez){"\n"}{"\n"}
      ●protected- Üyelere sınıf dışından erişilemez ancak kalıtsal sınıflardan erişilebilir.
      </Text>
      <Text style={styles.text}>
        #include{" <iostream>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        class Sinif1  {"{"} {"\n"} {"\n"}
        public:     {"\n"} {"\n"}
           int x;   {"\n"} {"\n"}
        maas = s;{"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        private:   
        {"\n"}
        {"\n"}
        int y;  {"\n"}{"\n"} 
        {"}"};{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        Sinif1 obje1;{"\n"}{"\n"}
  obje1.x = 25; {"\n"}{"\n"} 
  obje1.y = 50; {"\n"}{"\n"} 
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum24konu8.webp")}
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
    height: 56,
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
