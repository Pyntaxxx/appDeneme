import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum10konu3() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      Tanımladığımız değişkeni isimlendirirken belli kurallara uymalıyız. Bu
        kuralları şöyle sıralayabiliriz: {"\n"} {"\n"}
        ●Değişken isimleri sayı ile başlayamaz. İsimdeki ilk karakter hariç sayı
        kullanabiliriz. Örnek: int sayi1; int sayi2; vb. {"\n"} {"\n"}
        ●C++ dili büyük ve küçük harfe duyarlıdır. Yani int rakam; ile int RAKAM;
        değişkenleri farklı değişkenler olarak hafızaya tanımlanırlar. {
          "\n"
        }{" "}
        {"\n"}
        ●Değişken isminde Türkçe karakter olamaz. int sayı; string yazı; gibi
        tanımlamalar yanlıştır. {"\n"} {"\n"}
        İlk karakterde alt çizgi (_) harici bir özel karakter kullanamayız. Yani
        int _sayi; kullanımı doğrudur. Ama int ?sayi; kullanımı yanlıştır.{" "}
        {"\n"} {"\n"}
        ●Değişken isminde boşluk kullanamayız. {"\n"} {"\n"}
        Değişken isimlerinde C++ dilindeki özel terimleri kullanamayız. Örnek
        int class; int void; vb.{'\n'}{'\n'}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 10,
    marginLeft: 10,
  },
});
