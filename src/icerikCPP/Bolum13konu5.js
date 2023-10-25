import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum13konu5() {
    return (
        <ScrollView>
          <Text style={styles.text1}>Karşılaştırma operatörlerinde olduğu gibi , mantıksal operatörlerle de doğru ( 1) veya yanlış ( 0) değerlerini test edebiliriz .
          </Text>
          <Image
            style={styles.img}
            source={require("../../assets/bolum13konu5.webp")}
          />
    
          <Text style={styles.text}>
            #include {"<iostream>"}
            using namespace std;{"\n"} {"\n"}
            int main() {"{"} {"\n"} {"\n"}
            int x = 5; {"\n"} {"\n"}int y = 3; {"\n"} {"\n"}
            cout {"<<"}(x{' >'} 3 || x {'< '}4); ; {"\n"} {"\n"}
            return 0;{"\n"} {"\n"}
            {"}"}
          </Text>
          <Image
            style={styles.img2}
            source={require("../../assets/bolum13konu4-2.webp")}
          />
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      text1: {
        fontSize: 24,
        margin: 20,
      },
      img: {
        width: "100%",
        height: 126,
        marginVertical: 5,
        marginBottom: 10,
        alignSelf: "center",
      },
      text: {
        fontSize: 15,
        margin: 15,
        borderWidth: 2,
        padding: 5,
      },
      img2: {
        width: 100,
        height: 40,
        alignSelf: "center",
        marginVertical: 5,
        marginBottom: 10,
      },
    });