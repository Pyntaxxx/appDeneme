import { ScrollView, StyleSheet, Text, View,} from 'react-native'
import React from 'react'

export default function CppVeriAlma() {
  return (
    <ScrollView>
      <Text style={styles.text2}>C++ Kullanıcıdan Veri Alma</Text>
      <Text style={styles.text3}>◆Kullanılan komut: cin{'\n'}{'\n'}
      ◆Kullanıcıdan almak için “cin” komutundan sonra: {'>>'}</Text>   
      <Text style={styles.text}>
      #include {'<iostream>'}{'\n'}{'\n'}
      #include {'<locale.h>'}{'\n'}{'\n'}
using namespace std;{'\n'}{'\n'}

int main() {'{'}{'\n'}{'\n'}
setlocale(LC_ALL,"Turkish");{'\n'}{'\n'}
int yas;{'\n'}{'\n'}
  cout {'<<'} {"Yaşınızı giriniz: "} {';'}{'\n'}{'\n'}
  cin {'>>'} x;{'\n'}{'\n'}
  cout {'<<'} "Yaşınız: " {'<<'} yas;{'\n'}{'\n'}
  return 0;{'\n'}{'\n'}
{'}'}
      </Text>
    </ScrollView>
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