import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum17konu1() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Programın herhangi bir noktasından çağırılabilen kod bloklarıdır.
      {'\n'}●Fonksiyonlar yeniden kullanılabilir özellikte yapılardır. {'\n'}●Bu sayede eğer
        bir işlemin aynı proje içerişinde çok sayıda tekrarlanması gerekiyorsa o
        işlemi gerçekleştirmek için bir fonksiyon oluşturmak kurtarıcı
        olacaktır.
      </Text>

      <Text style={styles.text}>
        //Fonksiyon yapısı veri-türü fonksiyon-adı (parametreler){"\n"}
        {"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        //işlem satırı return ifade;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
      </Text>
      <Text style={styles.text}>
        //ÖRNEK 1:{"\n"}
        {"\n"}
        // Create a function{"{"} {"\n"}
        {"\n"}
        void myfunction() {"{"}{"\n"}{"\n"}
        cout {"<<"} "Merhaba :))";{"\n"}{"\n"}
        {"}"}{"\n"}{"\n"}
        int main() {"{"}{"\n"}{"\n"}
        myFunction(); //Fonsiyonun çağrılması{"\n"}{"\n"}
         return 0;{"\n"}{"\n"}
        {"}"}{"\n"}{"\n"}
        // Çıkışı "Merhaba :))"
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
    width: 100,
    height: 40,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
