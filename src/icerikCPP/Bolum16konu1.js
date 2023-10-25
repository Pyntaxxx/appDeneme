import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum16konu1() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Döngüler, belirli komutları tekrar tekrar çalıştırılmasını sağlar.{" "}
        {"\n"} {"\n"}●While döngüsü verilen koşulu yerine getirdiği taktirde
        kodları tekrar çalıştırır. {"\n"} {"\n"}
        ●Ekrana 5 kere “bilgisayar” kelimesini yazdıralım. {"\n"} 
      </Text>

      <Text style={styles.text}>
        #include {"<iostream>"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        int sayac = 0; {"\n"} {"\n"}
        while(sayac{"<"}5){"{"}
        {"\n"} {"\n"}
        cout {"<<"}"bilgisayar" {"<<"}endl; {"\n"} {"\n"}
        sayac++; {"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum16konu1.webp")}
      />
      <Text style={styles.text1}>
      ●Yukarıdaki örnekte gördüğünüz gibi bir sayaç değişkeni tanımladık.{"\n"} {"\n"}
      ●While koşulu olarak “sayac” değişkeni 5’ten küçük olduğu taktirde komutlar tekrar çalışsın dedik.{"\n"} {"\n"}
      ●While döngüsünün içinde “sayac” değişkenini bir artırdık.{"\n"} {"\n"}
      ●Böylece döngü her çalıştığında sayaç bir artacak ve döngü toplam 5 kere çalışmış olacaktır.{"\n"} {"\n"}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 15,
    margin: 15,
    borderWidth: 2,
    padding: 5,
  },
  img2: {
    width: 195,
    height: 250,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
