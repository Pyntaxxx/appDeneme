import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum4konu4() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        🔶Verilen iki sayının toplamını bulan program:
      </Text>
      <Image
        style={styles.img1}
        source={require("../../assets/akisSemaOrnek1.webp")}
      />
      <Text style={styles.text}>
        🔶Girilen sayının tek mi çift mi olduğunu gösteren akış diyagramı:
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/akisSemaOrnek2.webp")}
      />
      <Text style={styles.text}>
        🔶)Girilen 10 adet sayının toplamını bularak ekranda gösteren akış
        diyagramı:
      </Text>
      <Image
        style={styles.img3}
        source={require("../../assets/akisSemaOrnek3.webp")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img1: {
    width: 200,
    height: 650,
    marginTop: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    margin: 10,
    padding: 10,
  },
  img2: {
    height: 600,
    marginTop: 20,
    marginHorizontal: 0,
    alignSelf: "center",
  },
  img3: {
    width: 270,
    height: 700,
    marginTop: 20,
    alignSelf: "center",
  },
});
