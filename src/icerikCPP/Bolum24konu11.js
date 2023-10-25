import { StyleSheet, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum24konu11() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Miras yoluyla birbiriyle ilişkili birçok sınıfa sahip olduğumuzda ortaya
        çıkar.
      </Text>
      <Text style={styles.text}>
        #include{" <iostream>"} {"\n"} {"\n"}
        #include{" <string>"}
        {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        // Base class{"\n"} {"\n"}
        class Hayvanlar {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void hayvanSesi() {"{"} {"\n"} {"\n"}
        cout {"<<"} "Hayvaların kendine özgü sesleri vardır \n"; {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        {"}"};{"\n"}
        {"\n"}
        class Domuz : public Hayvanlar {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void hayvanSesi() {"{"} {"\n"} {"\n"}
        cout{"<<"} "Domuzlar şöyle ses çıkarır : wee wee \n"; {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        {"}"}; class Kopek : public Hayvanlar {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void hayvanSesi() {"{"} {"\n"} {"\n"}
        cout{"<<"} "Köpekler şöyle ses çıkarır: bow wow \n"; {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        {"}"};{"\n"} {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        Hayvanlar hayvanim; {"\n"} {"\n"}
        Domuz domuz1; {"\n"} {"\n"}
        Kopek kopek1; {"\n"} {"\n"}
        hayvanim.hayvanSesi(); {"\n"} {"\n"}
        domuz1.hayvanSesi(); {"\n"} {"\n"}
        kopek1.hayvanSesi();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img}
        source={require("../../assets/bolum24konu11.webp")}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    marginRight: 5,
    marginVertical: 5,
    marginLeft: 10,

  },
  text2: {
    fontSize: 29,
    margin: 20,
    color: "red",
  },
  img: {
    width: 400,
    height: 86,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 15,
    margin: 15,
    borderWidth: 2,
    padding: 5,
  },
  img2: {
    width: 200,
    height: 130,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
