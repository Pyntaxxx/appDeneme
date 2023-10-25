import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CppCiktiVerme() {
  return (
    <View>
      <Text style={styles.text2}>C++ Ekrana Çıktı Verme</Text>
      <Text style={styles.text3}>◆Kullanılan komut: cout{'\n'}{'\n'}
◆Ekrana vermek için “cout” komutundan sonra: {'<<'}</Text>   
      <Text style={styles.text}>
      #include {'<iostream>'}{'\n'}{'\n'}
using namespace std;{'\n'}{'\n'}

int main() {'{'}{'\n'}{'\n'}
  cout {'<<'} {"Hello World!"} {';'}{'\n'}{'\n'}
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
  text3: {
    fontSize: 20,
    margin: 20,
    padding: 5,
  },
})