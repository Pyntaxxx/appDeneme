import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum17konu6() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Bu fonksiyon tipinde değişkenin adresi geçirildiğinden, fonksiyon içinde
        değişken üzerinde yapılan değişiklikler, fonksiyon sona erdiğinde de
        geçerliliğini korur.
      </Text>
      <Text style={styles.text}>
        //FONKSİYON YAPISI{"\n"}
        {"\n"}
        void FonksiyonAdi(veriTipi &değişken1, veriTipi &değişken2){"{"}
        {"\n"}
        {"\n"}
        //Çalıştırılacak kodlar {"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        int main(){"{"}
        {"\n"}
        {"\n"}
        veriTipi d1 = değer1 ,d2 = değer2;{"\n"}
        {"\n"}
        FonksiyonAdi(d1,d2);{"\n"}
        {"\n"}
        cout {"<<"} "D1: " {"<<"} d3 {"<<"}endl;{"\n"}
        {"\n"}
        cout{"<<"} "D2: " {"<<"} d4{"<<"} endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
      </Text>
      <Text style={styles.text}>
        //ÖRNEK:{"\n"}
        {"\n"}
        void swapNums(int &x, int &y) {"{"}
        {"\n"}
        {"\n"}
        int z = x;{"\n"}
        {"\n"}x = y;{"\n"}
        {"\n"}y = z;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        int main(){"{"}
        {"\n"}
        {"\n"}
        int ilkNo= 10;{"\n"}
        {"\n"}
        int ikinciNo = 20;{"\n"}
        {"\n"}
        cout {"<<"} "Değiştirmeden önce: "{"<<"}endl;{"\n"}
        {"\n"}
        cout{"<<"} ilkNo {"<<"} ikinciNo{"<<"} endl;{"\n"}
        {"\n"}
        swapNums(ilkNo, ikinciNo);{"\n"}
        {"\n"}
        cout {"<<"}"Değiştirdikten sonra: "{"<<"}endl;{"\n"}
        {"\n"}
        cout {"<<"}ilkNo{"<<"} ikinciNo {"<<"} endl;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum17konu6.webp")}
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
    marginRight: 5,
    marginVertical: 5,
    marginLeft: 10,

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
    height: 110,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
