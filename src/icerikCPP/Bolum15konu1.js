import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum15konu1() {
  return (
    <View>
      <Text style={styles.text}>
      {'\n'}●C++ da for döngüsü belirli bir koşul sağlanana kadar bir ifade bloğunu
        tekrar tekrar yürütmek için kullanılır.{'\n'}{'\n'}●For döngüsünde değişken
        tanımlama, koşul ve artırma azaltma değeri bir arada yer alır.{'\n'}
      </Text>
      <Text style={styles.text1}>
        #include {"<iostream>"}
        {"\n"} {"\n"}
        #include {"<string>"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        for(int i=1; i{"<"}10; i+=2){"{"}
        cout{"<<"}i{"<<"}endl;{"\n"} {"\n"}
        return 0; {"\n"} {"\n"}
        {"}"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    margin: 20,
    borderWidth:3,
  },
  text: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 5,
    marginLeft: 10,

  },
});
