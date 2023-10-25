import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum1konu3() {
  return (
    <View>
      <Text style={styles.text}>
      ●Dünyanın en popüler programlama dillerinden biridir.
      </Text>
      <Text style={styles.text}>
      ●Günümüzün işletim sistemlerinde, grafiksel kullanıcı arayüzlerinde ve
        gömülü sistemlerde bulunabilir.
      </Text>
      <Text style={styles.text}>
      ●Programlara net bir yapı kazandıran ve kodun yeniden kullanılmasına izin
        vererek geliştirme maliyetlerini düşüren nesne yönelimli bir programlama
        dilidir.
      </Text>
      <Text style={styles.text}>
      ●Taşınabilirdir ve birden fazla platforma uyarlanabilen uygulamalar
        geliştirmek için kullanılabilir.
      </Text>
    </View>
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