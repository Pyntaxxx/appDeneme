import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum12konu2() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        #include {"<iostream>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        int main()
        {"{"} {"\n"} {"\n"}
        int day = 4; {"\n"} {"\n"}
        switch (day) {'{'} {"\n"} {"\n"}
        case 1: {"\n"} {"\n"}
         cout {'<<' }"Pazartesi"; {"\n"} {"\n"}
         break; {"\n"} {"\n"}
        case 2: {"\n"} {"\n"}
         cout {'<<' }"Salı"; {"\n"} {"\n"}
         break; {"\n"} {"\n"}
        case 3: {"\n"} {"\n"}
         cout {'<<' }"Çarşamba"; {"\n"} {"\n"}
         break; {"\n"} {"\n"}
        case 4: {"\n"} {"\n"}
         cout {'<<' }"Perşembe"; {"\n"} {"\n"}
         break; {"\n"} {"\n"}
        case 5: {"\n"} {"\n"}
         cout {'<<' }"Cuma"; {"\n"} {"\n"}
         break; {"\n"} {"\n"}
        case 6: {"\n"} {"\n"}
         cout {'<<' }"Cumartesi"; {"\n"} {"\n"}
         break; {"\n"} {"\n"}
        case 7: {"\n"} {"\n"}
         cout {'<<' }"Pazar"; {"\n"} {"\n"}
         break; {"\n"} {"\n"}
        system ("pause");{"\n"} {"\n"}
         return 0;
        {"}"}
      </Text>
      <Image
          style={styles.img}
          source={require("../../assets/bolum12konu2.webp")}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 20,
    borderWidth: 2,
    padding: 5,
  },
  img: {
 width: 200,
 height: 60,
 alignSelf: "center",
 margin: 5,
  },
});
