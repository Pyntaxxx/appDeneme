import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum10konu1() {
  return (
    <ScrollView>
      <Text style={styles.text}>●Değişken, elde bulunan verileri geçici olarak hafızada tutmaya yarayan araçlardır. {'\n'} {'\n'}

      ●C++ Veri Tipleri: {'\n'}{'\n'}
1) Char: Tek bir karakteri tutmak için kullanılan veri tipidir. Char veri tipine atayacağımız değeri tek tırnak içerisine almalıyız.(örnek: ’a’) {'\n'}{'\n'}

2) String: Metinsel ifadeleri saklamak için kullanılan veri tipidir. String değişkenine atayacağımız değerleri çift tırnaklar içine yazmalıyız.(örnek: “yazilim”) {'\n'}{'\n'}

3) Short: Kısa tamsayı değerlerini tutan veri tipidir. {'\n'}{'\n'}

4) Int: Tamsayıları tutmak için kullanacağımız veri tipidir. {'\n'}{'\n'}

5) Long: Uzun tamsayıları tutmak için kullanılan veri tipidir. {'\n'}{'\n'}

6) Boolean: True veya False değeri döndürmek için kullanılan veri tipidir. Sadece iki değer alır. {'\n'}{'\n'}

7) Float: Ondalıklı sayı saklamak için kullanılan veri tipidir. {'\n'}{'\n'}

8) Double: Uzun ondalıklı sayı saklamak için kullanılan veri tipidir.{'\n'}{'\n'}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 10,
    marginLeft: 10,
  },
})