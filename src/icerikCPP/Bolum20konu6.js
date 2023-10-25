import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum20konu6() {
    return (
        <ScrollView>
            <Text style={styles.text1}>●Metin içine özel bir karakter yazmak isteyip, bunu vurgulamak için çift tırnak içinde çift tırnak kullanırsak aşağıdaki gibi bir hata alırız:</Text>
          <Text style={styles.text}>
          string metin = "Burada karakter "Thor" rolünü oynuyor.";
          </Text>
          <Text style={styles.text1}>
          ●Bu sorunu önlemenin çözümü ters eğik çizgi karakterini kullanmaktır .
          </Text>
          <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        string metin1 = "Burada karakter \"Thor\" rolünün oynuyor.";{"\n"}
        {"\n"}
        cout {"<<"} metin1{"<<"} endl{"\n"}
        {"\n"}
        string metin2 = "Thor\'un çekicini yalnızca o kaldırabilir.";{"\n"}
        {"\n"}
        cout {"<<"} metin2{"<<"} endl{"\n"}
        {"\n"}
        string metin3 = "Asgard \\ Thor.";{"\n"}
        {"\n"}
        cout {"<<"} metin3{"<<"} endl{"\n"}
        {"\n"}
        string metin4 ="Asgard \\ Loki.";{"\n"}
        {"\n"}
        cout {"<<"} metin4{"<<"} endl{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
          <Image
            style={styles.img}
            source={require("../../assets/bolum20konu6.webp")}
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
        width: 350,
        height: 110,
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
    