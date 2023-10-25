import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum25konu5() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Dosyayı kapatmak için için close() fonksiyonu kullanılır. close()
        fonksiyonu işletim sisteminin dosya nesnesi ile dosya adı arasındaki
        ilişkiyi sonlandırmasını ve dosyayla ilgili son işlemlerin yapılmasını
        sağlar.
      </Text>
      <Text style={styles.text2}>Dosya sonu</Text>
      <Text style={styles.text1}>
      ●eof(): dosya sonu (end of file ) fonksiyonu{"\n"}
        {"\n"}
        ●Dosyanın sonuna gelindiyse true, daha okunacak veriler varsa ise false
        döndürür.
      </Text>
      <Text style={styles.text}>
        //ÖRNEK: {"\n"}
        {"\n"}
        #include{"<iostream>"}
        {"\n"}
        {"\n"}
        #include{"<string>"}
        {"\n"}
        {"\n"}
        #include{"<fstream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main(){"\n"}
        {"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        string isim, yuksekisim,soyisim,yukseksoyisim;{"\n"}
        {"\n"}
        int not,yukseknot=0;{"\n"}
        {"\n"}
        ifstream dosyaoku("fatih.txt",ios::in);{"\n"}
        {"\n"}
        while(!dosyaoku.eof()){"\n"}
        {"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        dosyaoku {">>"}not{">>"}isim{">>"}soyisim;{"\n"}
        {"\n"}
        if(not{">"}yukseknot){"\n"}
        {"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        yukseknot=not;{"\n"}
        {"\n"}
        yuksekisim=isim;{"\n"}
        {"\n"}
        yukseksoyisim=soyisim;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        cout {"<<"}"En yuksek not: " {"<<"}yuseknot;{"\n"}
        {"\n"}
        cout {"<<"}" Isım: " {"<<"}yuksekisim;{"\n"}
        {"\n"}
        cout {"<<"}" Soyisim:" {"<<"}yukseksoyisim {"<<"}endl,{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        system(“pause”);{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Text style={styles.text1}>
      ⚠️DİKKAT!!!⚠️{"\n"}
        {"\n"}
        ●seekp() fonksiyonu(işaretçi) : Dosyanın herhangi bir yerine gitmek için
        kullanılır.
        {"\n"}
      </Text>
      <Text style={styles.text}>
        //Örneğin{"\n"}
        {"\n"}
        dosya1.seekp(500);{"\n"}
        {"\n"}
        dosya1{">>"}x;// dosyanın 500. byte’ında yer alan değeri okur
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
