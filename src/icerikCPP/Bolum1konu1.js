import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum1konu1() {
  return (
    <View>
      <Text style={styles.text}>
        C++, yüksek performanslı, genel amaçlı, orta seviyeli, Nesne Yönelimli
        Programlama yöntemlerine imkan veren bir programlama dilidir.
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