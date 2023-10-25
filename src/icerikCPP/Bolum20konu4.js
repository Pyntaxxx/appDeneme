import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum20konu4() {
    return (
        <ScrollView>
          <Text style={styles.text1}>
          ●Bir string karakterlerine, köşeli parantez içindeki dizin numarasına bakarak erişebiliriz.
          </Text>
          <Text style={styles.text}>
            #include {"<iostream>"}
            {"\n"}
            {"\n"}
            #include {"<string>"}
            {"\n"}
            {"\n"}
            using namespace std;{"\n"}
            {"\n"}
            int main() {"{"}
            {"\n"}
            {"\n"}
            string selam = "Merhaba";{"\n"}
            {"\n"}
            cout {"<<"} selam[0];{"\n"}
            {"\n"}
            return 0;{"\n"}
            {"\n"}
            {"}"}
          </Text>
          <Image
            style={styles.img}
            source={require("../../assets/bolum20konu4.webp")}
          />
        </ScrollView>
      );
    }
    const styles = StyleSheet.create({
      text1: {
        fontSize: 24,
        margin: 20,
      },
      text2: {
        fontSize: 29,
        margin: 20,
        color: "red",
      },
      img: {
        width: 300,
        height: 96,
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
        width: 200,
        height: 130,
        alignSelf: "center",
        marginVertical: 5,
        marginBottom: 10,
      },
    });
    