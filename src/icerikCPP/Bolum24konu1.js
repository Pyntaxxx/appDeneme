import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

export default function Bolum24konu1() {
  return (
    <ScrollView>
      <Text style={styles.text2}>OOP nedir?</Text>
      <Text style={styles.text1}>
      ●object oriented programming{"\n"}
        {"\n"}
        ●Dış dünyadaki nesneleri dijital ortamda somutlaştırmamıza kolaylık
        sağlayan bir yaklaşımdır.
      </Text>
      <Text style={styles.text2}>Avantajları</Text>
      <Text style={styles.text1}>
      ●Yürütülmesi daha hızlı ve kolay{"\n"}
        {"\n"}
        ●Daha az kod ve daha kısa süreyle tamamen yeniden kullanılabilir
        uygulamalar oluşturmayı mümkün kılar
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
    width: 350,
    height: 110,
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
