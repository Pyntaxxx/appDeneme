import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum25konu2() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Dosyaya veri yazdırmak için ofstream sınıfı kullanılır.
      </Text>
      <Text style={styles.text}>
        int main(){"{"}
        {"\n"} {"\n"}
        ofstream dosyaYaz("cikti.dat",ios::out);{"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum25konu2.webp")}
      />
      <Text style={styles.text1}>
      ●Çıktı dosyaları aşağıdaki farklı dosya açama modları kullanılarak
        açılabilir.{"\n"} {"\n"}
        ●ios::out : Yazma işlemi dosyanın başından başlayarak yapılır ve daha
        önceden veri girilmişse yeni veriler bu verilerin üstüne yazılır.{
          "\n"
        }{" "}
        {"\n"}
        ●ios::app : Yazma işlemi dosyanın en son verisin olduğu yerden başlayarak
        yapılır ve daha önceden veri girilmişse herhangi bir veri kaybı
        yaşanmaz.{"\n"} {"\n"}
        🔴Not: Eğer dosya tanımında dosya açma modu kullanmazsak varsayılan mod
        ios::out olacaktır.{"\n"} {"\n"}
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
    width: 390,
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
    width: 200,
    height: 130,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
