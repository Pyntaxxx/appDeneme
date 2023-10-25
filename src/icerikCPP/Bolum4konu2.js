import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum4konu2() {
  return (
    <View>
      <ScrollView>
        <Image
          style={styles.img}
          source={require("../../assets/bolum4konu2.webp")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 430,
    height: 520,
    marginTop: 70,
    alignSelf: "center",
  },
});
