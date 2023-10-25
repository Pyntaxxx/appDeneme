import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum20konu2() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●“+” operatörü kullanma
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
        int main () {"{"}
        {"\n"}
        {"\n"}
        string ad = "Bjarne ";{"\n"}
        {"\n"}
        string soyad = "Stroustrup ";{"\n"}
        {"\n"}
        string tamAd = ad + soyad;{"\n"}
        {"\n"}
        cout{"<< "} tamAd;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum20konu2.webp")}
      />
      <Text style={styles.text1}>
      ●append() fonksiyonu kullanma
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
        int main () {"{"}
        {"\n"}
        {"\n"}
        string ad = "Bjarne ";{"\n"}
        {"\n"}
        string soyad = "Stroustrup ";{"\n"}
        {"\n"}
        string tamAd = ad.append(soyad);{"\n"}
        {"\n"}
        cout {"<<"} tamAd;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum20konu2.webp")}
      />
      <Text style={styles.text1}>
        İki sayıyı toplarsak sonuç bir sayı olur:{"\n"}
        {"\n"}
      </Text>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main (){"{"}
        {"\n"}
        {"\n"}
        int sayi1= 10;{"\n"}
        {"\n"}
        int sayi2= 20;{"\n"}
        {"\n"}
        int sonuc= sayi1+ sayi2;{"\n"}
        {"\n"}
        cout {"<<"}sonuc;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum20konu2-2.webp")}
      />
      <Text style={styles.text1}>
      İki sayıyı toplarsak sonuç bir sayı olur:{"\n"}
        {"\n"}
      </Text>
      <Text style={styles.text}>
      #include {"<iostream>"}{"\n"}
        {"\n"}
using namespace std;{"\n"}
        {"\n"}
 
int main (){"{"}{"\n"}
        {"\n"}
        string string1 = "10";{"\n"}
        {"\n"}
        string string2 = 20;{"\n"}
        {"\n"}
        string birlesim = string1 + string2;{"\n"}
        {"\n"}
  cout{"<<"}birlesim;{"\n"}
        {"\n"}
  return 0;{"\n"}
        {"\n"}
  {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum20konu2-3.webp")}
      />
      <Text style={styles.text1}>
      ⚠️String ile sayıyı birleştirmeye çalışırsak kodumuz hatalı olur!..{"\n"}
        {"\n"}
      </Text>
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
    width: 200,
    height: 116,
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
    width: 300,
    height: 110,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
