import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum1konu2() {
  return (
    <View>
        <Text style={styles.text}>
        ●C dilinin bir uzantısı olarak geliştirildi.
        </Text>
        <Text style={styles.text}>
        ●Programcılara sistem kaynakları ve bellek üzerinde yüksek düzeyde
          kontrol sağlar.
        </Text>
        <Text style={styles.text}>
        ●Programlama dilleri donanıma müdahalesine göre düşük, orta ve yüksek
          seviyeli olarak isimlendirilebilmektedir.
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
