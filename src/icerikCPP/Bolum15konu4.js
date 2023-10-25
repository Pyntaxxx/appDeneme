import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum15konu4() {
  return (
    <View>
      <Text style={styles.text}>
        //Örnek: Asal sayı bulma uygulaması(break komutu için) {"\n"} {"\n"}
        #include {"<iostream>"}
        {"\n"} {"\n"}
        #include {"<string>"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        int sayi;{"\n"} {"\n"}
        cout{"<<"}"Bir sayi giriniz: ";{"\n"} {"\n"}
        cin{">>"}sayi;{"\n"} {"\n"}
        int i = 2;{"\n"} {"\n"}
        while(i{"<"}sayi){"{"}
        {"\n"} {"\n"}
        if(sayi % i == 0){"{"}
        {"\n"} {"\n"}
        cout{"<<"}"Sayi asal degildir.";{"\n"} {"\n"}
        break;{"\n"} {"\n"}
        {"}"}
        {"\n"} {"\n"}
        i++;{"\n"} {"\n"}
        {"}"}
        {"\n"} {"\n"}
        if(sayi == i){"{"}
        {"\n"} {"\n"}
        cout{"<<"}"Sayi asaldir.";{"\n"} {"\n"}
        {"}"}
        {"\n"} {"\n"}
        return 0; {"\n"} {"\n"}
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
