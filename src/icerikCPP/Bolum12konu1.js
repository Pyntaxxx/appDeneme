import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum12konu1() {
    return (
        <ScrollView>
          <Text style={styles.text}>
          Bu yapı ile verilen bir değişkendeki veriyi kontrol ederek, program akışını bir çok seçenekten birine yönlendirebilirsin.{"\n"} {"\n"}
          ●Switch() ile değişkendeki veri alınır.{"\n"} {"\n"}
          ●Case ile değişendeki veri kontrol edilir.{"\n"} {"\n"}
          ●Eğer case’deki durumların hiçbirine uymazsa program default’da yer alan komutları çalıştıracaktır.{"\n"} {"\n"}
●Bunu if else yapısı ile de yapabiliriz. Fakat program kodları biraz uzun olacağından programcılar bu yapıyı tercih ediyorlar.{"\n"} {"\n"}
➤Default: Koşulların sağlanmaması durumunda bu komuttan sonra gelen kodlar çalışacaktır. Kullanımı isteğe bağlıdır.{"\n"} {"\n"}
➤Break: Case yapılarının sadece birinin çalıştırılması için kullanılır. Kullanılmadığı durumda doğru olan koşuldan sonra bütün koşullar doğru kabul edilecektir. Kullanımı isteğe bağlıdır.{"\n"} {"\n"}
          </Text>
        </ScrollView>
      )
    }
    
    const styles = StyleSheet.create({
        text: {
            fontSize: 24,
            margin: 20,
          },
    })