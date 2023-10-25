import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'

export default function Bolum13konu3() {
    return (
        <ScrollView>
          <Text style={styles.text1}>
          Değişkenlere değer atamak için kullanırız.
          </Text>
          <Image
            style={styles.img}
            source={require("../../assets/bolum13konu3.webp")}
          />
    
          <Text style={styles.text}>
            #include {"<iostream>"}
            using namespace std;{"\n"} {"\n"}
             int main() {"{"} {"\n"} {"\n"}
             int x = 10; {"\n"} {"\n"}
             x += 5; {"\n"} {"\n"}
             cout {'<<'} x;{"\n"} {"\n"}
            return 0;{"\n"} {"\n"}
            {"}"}
          </Text>
          <Image
            style={styles.img2}
            source={require("../../assets/bolum13konu3-2.webp")}
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
        height: 220,
        marginVertical: 5,
        marginBottom: 10,
      },
      text: {
        fontSize: 15,
        margin: 15,
        borderWidth: 2,
        padding: 5,
      },
      img2: {
        width: 150,
        height:90,
        alignSelf: "center",
        marginVertical: 5,
        marginBottom: 10,
      },
    });
    