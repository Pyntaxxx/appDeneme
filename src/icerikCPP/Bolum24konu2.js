import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum24konu2() {
    return (
        <ScrollView>
          <Text style={styles.text1}>
          ●Sınıflar ve nesneler, nesne yönelimli programlamanın iki ana yönüdür.
            {"\n"}
          </Text>
          <Image
            style={styles.img}
            source={require("../../assets/bolum24konu2.webp")}
          />
          <Image
            style={styles.img}
            source={require("../../assets/bolum24konu2-2.webp")}
          />
        </ScrollView>
      );
    }
    const styles = StyleSheet.create({
      text1: {
        fontSize: 24,
        marginRight: 5,
        marginVertical: 5,
        marginLeft: 10,
    
      },
      text2: {
        fontSize: 29,
        margin: 20,
        color: "red",
      },
      img: {
        width: 400,
        height: 100,
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
    