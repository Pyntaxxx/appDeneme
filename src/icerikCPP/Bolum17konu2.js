import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum17konu2() {
  return (
    <ScrollView>
      <Text style={styles.text1}>
      ●Eğer bir fonksiyon main() fonksiyonun altında çağrıldıysa kullanılabilir
        mi? {"\n"}●Evet kullanılabilir ancak fonksiyonu yukarıda deklare edilmesi
        gerekmektedir. Yani global alanda tanımlanmasıdır.
      </Text>
      <Text style={styles.text}>
        #include {"<iostream>"}{"\n"}{"\n"}
        using namespace std;{"\n"} {"\n"}
        void myfunction();//fonksiyon denklerasyonu {"\n"}{"\n"}
        int main(){"{"}{"\n"}{"\n"}
        myFunction();{"\n"}{"\n"}
         return 0;{"\n"}{"\n"}
        {"}"}{"\n"}{"\n"}
        //Fonksiyon main() fonksiyonunun altında kaldı. {"\n"}{"\n"}
        void myfunction() {"{"}{"\n"}{"\n"}
        cout{"<<"} "Merhaba :))";{"\n"}{"\n"}
        {"}"}{"\n"}{"\n"}
      </Text>
    </ScrollView>
  );
  {
    ("}");
  }
}
const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    margin: 20,
  },
  img: {
    width: "100%",
    height: 126,
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
    width: 100,
    height: 40,
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 10,
  },
});
