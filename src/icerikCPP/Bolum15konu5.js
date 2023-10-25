import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum15konu5() {
  return (
    <View>
      <Text style={styles.text}>
        //Örnek: 30’a kadar 3’ün katı olmayan sayıları ekrana
        yazdırılması(continue için){"\n"} {"\n"}
        #include {"<iostream>"}
        {"\n"} {"\n"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        for(int i=1; i{"<"}30; i++){"{"}
        {"\n"} {"\n"}
        if(i%3 == 0){"{"}
        {"\n"} {"\n"}
        continue;{"\n"} {"\n"}
        {"}"}
        {"\n"} {"\n"}
        else{"{"}
        {"\n"} {"\n"}
        cout{"<<"}i{"<<"}" ";{"\n"} {"\n"}
        {"}"}
        {"\n"} {"\n"}
        {"}"}
        {"\n"} {"\n"}
        return 0;
        {"}"}
      </Text>
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
});
