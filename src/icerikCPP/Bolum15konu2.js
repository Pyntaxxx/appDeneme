import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Bolum15konu2() {
  return (
    <View>
      <Text style={styles.text}>
        //Dış döngü {"\n"} {"\n"}
        for (int i = 1; i {"<"}= 2; ++i) {"{"} {"\n"} {"\n"}
        cout {"<<"} "Dış: " {"<<"} i {"<<"} "\n"; // 2 kez çalıştırılıyor.{" "}
        {"\n"} {"\n"}
      </Text>
      <Text style={styles.text}>
        // İç döngü {"\n"} {"\n"}
        for (int j = 1; j {"<"}= 3; ++j) {"{"} {"\n"} {"\n"}
        cout {"<<"} " İç: " {"<<"} j {"<<"} "\n"; // 6 kez çalıştırılıyor (2 *
        3). {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum15konu2.webp")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    margin: 15,
    borderWidth: 2,
    padding: 5,
  },
  img2: {
    width: 200,
    height: 140,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
