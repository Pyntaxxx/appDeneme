import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Bolum14konu2() {
  return (
    <View>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"} {"\n"}
        #include {"<string>"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        int saat = 20; {"\n"} {"\n"}int y = 3; {"\n"} {"\n"}
        string sonuc = (saat {"<"} 18) ? "İyi Günler." : "İyi Akşamlar."; {"\n"}{" "}
        {"\n"}
        cout {"<<"}sonuc; {"\n"} {"\n"}
        return 0; {"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img2}
        source={require("../../assets/bolum14konu2.webp")}
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
    width: 100,
    height: 40,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
