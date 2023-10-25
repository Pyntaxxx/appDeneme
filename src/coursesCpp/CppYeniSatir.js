import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CppYeniSatir() {
  return (
    <ScrollView>
      <Text style={styles.text2}>C++ Yeni Satır</Text>
      <Text style={styles.text3}>
        ◆ \n{"\n"}
        {"\n"}
        veya{"\n"}
        {"\n"}◆ endl
      </Text>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} "Hello World! \n"{";"}
        {"\n"}
        {"\n"}
        cout {"<<"} "I am learning C++"{";"}
        {"\n"}
        {"\n"}
        return 0{";"}
        {"\n"}
        {"\n"}
        {"{"}
      </Text>
      <Text style={styles.text}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std; int main() {"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} "Hello World!" {"<<"} endl{";"}
        {"\n"}
        {"\n"}
        cout {"<<"} "I am learning C++"{";"}
        {"\n"}
        {"\n"}
        return 0{";"}
        {"\n"}
        {"\n"}
        {"{"}
      </Text>
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
  text2: {
    fontSize: 30,
    margin: 10,
    padding: 5,
    color: "red",
  },
  text3: {
    fontSize: 20,
    marginHorizontal: 20,
    padding: 5,
  },
});
