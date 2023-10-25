import { StyleSheet, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum11konu2() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        #include {"<iostream>"} {"\n"} {"\n"}
        #include {"<locale.h>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        int main()
        {"{"} {"\n"} {"\n"}
        setlocale(LC_ALL, "Turkish"); {"\n"} {"\n"}
        int sayi; {"\n"} {"\n"}
        cout {"<<"} "LÜTFEN NOTU GİRİNİZ : "; {"\n"} {"\n"}
        cin {">>"}sayi; {"\n"} {"\n"}
        if(sayi{"<"}50){"{"} {"\n"} {"\n"}
        cout {"<<"} "Dersi geçemedin:(" {"<<"}endl; {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        else if(sayi{">"}=50 && sayi{"<"}70){"{"} {"\n"} {"\n"}
        cout {"<<"}"Belge alamadın ama dersi geçtin:)" {"<<"} endl; {"\n"}{" "}
        {"\n"}
        {"}"} {"\n"} {"\n"}
        else if(sayi{">"}=70 && sayi{"<"}=100){"{"} {"\n"} {"\n"}
        cout {"<<"} "Belge alarak dersi geçtinn:)))))))"{"<<"}endl; {"\n"}{" "}
        {"\n"}
        {"}"} {"\n"} {"\n"}
        else{"{"} {"\n"} {"\n"}
        cout{"<<"} "Girdiğin notta bir hata var:("{"<<"}endl; {"\n"} {"\n"}
        {"}"}
        system ("pause"); return 0;
        {"}"}
      </Text>
      <Image
          style={styles.img}
          source={require("../../assets/bolum11konu2-1.webp")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/bolum11konu2-2.webp")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/bolum11konu2-3.webp")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/bolum11konu2-4.webp")}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 20,
    borderWidth: 2,
    padding: 5,
  },
  img: {
 width: 350,
 height: 100,
 alignSelf: "center",
 margin: 5,
  },
});
