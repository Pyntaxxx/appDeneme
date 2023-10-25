import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum19konu2() {
  return (
    <ScrollView>
      <Text style={styles.text2}>Bir Dizi İçinde Döngü</Text>
      <Text style={styles.text1}>
        Aşağıdaki örnek, renklerdizisindeki tüm öğelerin çıktısını verir:
      </Text>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        #include {"<string>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        string renkler[5] = {"{"}"pembe", "mor", "yeşil", "kırmızı", "mavi"{"}"}
        ;{"\n"}
        {"\n"}
        for (int i = 0; i {"< "} 5; i++) {"{"}
        {"\n"}
        {"\n"}
        cout {"<< "} renkler[i] {"<< "} "\n";{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>

      <Image
        style={styles.img2}
        source={require("../../assets/bolum19konu2.webp")}
      />
      <Text style={styles.text2}>
        Her Bir Öğenin İndeksini Değeriyle Birlikte Verme
      </Text>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        #include {"<string>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        string renkler[5] = {"{"}"pembe", "mor", "yeşil", "kırmızı", "mavi"{"}"}
        ;{"\n"}
        {"\n"}
        for (int i = 0; i {"<"} 5; i++) {"{"}
        {"\n"}
        {"\n"}
        cout {"<< "} i {"<< "} " = " {"<< "}renkler[i] {"<< "} "\n";{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum19konu2-2.webp")}
      />
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
  text2: {
    fontSize: 29,
    margin: 20,
    color: "red",
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
    width: 250,
    height: 230,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
