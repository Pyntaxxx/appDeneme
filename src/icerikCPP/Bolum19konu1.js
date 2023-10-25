import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum19konu1() {
    return (
        <ScrollView>
          <Text style={styles.text1}>
          Dizileri birden fazla değeri tek bir değişkende depolamak için kullanılırız.
          </Text>
          <Text style={styles.text2}>Dizi Tanımlama</Text>
          <Text style={styles.text}>
          string renkler[4];
          </Text>
          <Text style={styles.text2}>
          Diziye Değer Atama
          </Text>
          <Text style={styles.text}>
          string renkler[4] = {'{'}"beyaz", "siyah", "mavi", "pembe"{'}'};
          </Text>
          <Text style={styles.text2}>
          Bir Dizinin Elemanlarına Erişim
          </Text>
          <Text style={styles.text}>
          string renkler[4] = {'{'}"beyaz", "siyah", "mavi", "pembe"{'}'};{"\n"}{"\n"}
cout {'<< '}renkler[0];{"\n"}{"\n"}
          </Text>

          <Image
            style={styles.img2}
            source={require("../../assets/bolum19konu1.webp")}
          />
          <Text style={styles.text}>
          string renkler[4] = {'{'}"beyaz", "siyah", "mavi", "pembe"{'}'};
          renkler[0] = "kırmızı";
cout {'<< '}renkler[0];
          </Text>
          <Image
            style={styles.img2}
            source={require("../../assets/bolum19konu1-2.webp")}
          />
        </ScrollView>
      );
      {
        ("}");
      }
    }
    const styles = StyleSheet.create({
      text1: {
        fontSize: 24,
        margin: 20,
      },
      text2: {
        fontSize: 29,
        margin: 20,
        color:"red",
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
        width: 250,
        height: 110,
        alignSelf: "center",
        marginVertical: 5,
        marginBottom: 10,
      },
    });
    