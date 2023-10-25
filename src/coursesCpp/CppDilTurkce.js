import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CppDilTurkce() {
  return (
    <View>
      <Text style={styles.text2}>C++ Dili Türkçe ayarlama</Text>
      <Text style={styles.text}>
      #include {"<stdio.h>"} {'\n'}{'\n'}
#include {"<locale.h>"} // Dil ayarlamak için{'\n'}//kütüphane{'\n'}{'\n'}

int main(){'{'}   {'\n'}{'\n'}

  setlocale(LC_ALL, "Turkish"); // Dil ayarlamak için fonksiyon{'\n'}{'\n'}
 
  cout {'<<'}("Merhaba, Dünya!");{'\n'}{'\n'}

  return 0;{'\n'}{'\n'}
{'}'}
      </Text>
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
      text2: {
        fontSize: 30,
        margin: 20,
        padding: 5,
        color: "red",
      },
})