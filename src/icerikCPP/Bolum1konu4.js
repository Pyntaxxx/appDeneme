import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum1konu4() {
  return (
    <View>
      <Text style={styles.text}>
      ●NYP desteği sayesinde modern programlamaya imkan vermesinden dolayı
        Sürücü yazılımları, Oyun, Görüntü işleme, İşletim sistemleri gibi hızın
        önemli olduğu yerlerde kullanılır.
      </Text>
      <Text style={styles.text}>
      ●C++ programlama dilinin kullanıldığı diğer alanlar ise web uygulamaları,
        konsol uygulamaları, mobil uygulamalar ve Windows araçlarıdır.
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