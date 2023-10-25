import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum3konu2() {
  return (
    <View>
      <Text style={styles.text}>
        ●Problemin ne olduğunu bul.{"\n"}
        ●Problemin çözümü için nelerin gerekli olduğunu bul.{"\n"}
        ●Probleme ait girdi, çıktı, işlemleri belirle.{"\n"}
        ●Problemi çözmeni sağlayacak algoritmayı yaz.{"\n"}
        ●Bir programlama diliyle yeniden yaz.{"\n"}
        ●Programın doğruluğunu test et.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 10,
    marginLeft: 10,
  },
});
