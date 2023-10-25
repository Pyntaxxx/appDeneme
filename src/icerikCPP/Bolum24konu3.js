import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

export default function Bolum24konu3() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Kullanacağımız anahtar kelime : class{"\n"}
        {"\n"}
        ●Sınıfın üyelerine (özniteliklere ve yöntemlere) sınıf dışından
        erişilebileceğini belirtmek için: public
      </Text>
      <Text style={styles.text}>
        class MyClass {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        int sayi; {"\n"} {"\n"}
        string metin; {"\n"} {"\n"}
        {"}"};
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
