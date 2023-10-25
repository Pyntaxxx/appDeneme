import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum2konu2() {
  return (
    <View>
      <Text style={styles.text}># Örnek-1: Çay Demleme Algoritması
Adım 1: Başla.{'\n'}
Adım 2: Mutfağa git.{'\n'}
Adım 3: Çaydanlığa su koy.{'\n'}
Adım 4: Çaydanlığı ocağa koy.{'\n'}
Adım 5: Ocağı yak.{'\n'}
Adım 6: Su kaynadı mı, kontrol et.{'\n'}
Adım 7: Cevap evet ise demliğe çay koy ve demle hayırsa adım 5'e git.{'\n'}
Adım 8: 10 dakika bekle.{'\n'}
Adım 9: Çayı doldur.{'\n'}
Adım 10: Bitir.</Text>
<Text style={styles.text}>#Örnek-2: İki sayının toplamını bulan algoritma
Adım 1: Başla.{'\n'}
Adım 2: Toplamı, birinci ve ikinci sayıları tanımla.{'\n'}
Adım 3: Birinci sayıyı oku.{'\n'}
Adım 4: İkinci sayıyı oku.{'\n'}
Adım 5: Sayıları topla ve toplam değişkenine at.{'\n'}
Adım 6: Toplamı görüntüle.{'\n'}
Adım 7: Bitir.{'\n'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 20,
    borderWidth: 2,
    padding: 5,
  },
})