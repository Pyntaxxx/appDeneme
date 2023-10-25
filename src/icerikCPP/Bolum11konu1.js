import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum11konu1() {
  return (
    <View>
      <Text style={styles.text}>
      ●if {'->'} koşul sağlandığında bir işlem yapılmasını sağlar.{"\n"} {"\n"}
●else {'->'} if içerisindeki koşul sağlanmadığında bir işlem yapılmasını sağlar ve if‘ten hemen sonra kullanılmalıdır.{"\n"} {"\n"}
●else if {'->'} if içerisindeki koşul sağlanmadığında başka bir koşula uyduğunda kullanılır.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        margin: 20,
      },
})