import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

export default function CourseHome({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("1. Bölüm");
  };
  const handlePress2 = () => {
    navigation.navigate("2. Bölüm");
  };
  const handlePress3 = () => {
    navigation.navigate("3. Bölüm");
  };
  const handlePress4 = () => {
    navigation.navigate("4. Bölüm");
  };
  const handlePress5 = () => {
    navigation.navigate("5. Bölüm");
  };
  const handlePress6 = () => {
    navigation.navigate("6. Bölüm");
  };
  const handlePress7 = () => {
    navigation.navigate("7. Bölüm");
  };
  const handlePress8 = () => {
    navigation.navigate("8. Bölüm");
  };
  const handlePress9 = () => {
    navigation.navigate("9. Bölüm");
  };
  const handlePress10 = () => {
    navigation.navigate("10. Bölüm");
  };
  const handlePress11 = () => {
    navigation.navigate("11. Bölüm");
  };
  const handlePress12 = () => {
    navigation.navigate("12. Bölüm");
  };
  const handlePress13 = () => {
    navigation.navigate("13. Bölüm");
  };
  const handlePress14 = () => {
    navigation.navigate("14. Bölüm");
  };
  const handlePress15 = () => {
    navigation.navigate("15. Bölüm");
  };
  const handlePress16 = () => {
    navigation.navigate("16. Bölüm");
  };
  const handlePress17 = () => {
    navigation.navigate("17. Bölüm");
  };
  const handlePress18 = () => {
    navigation.navigate("18. Bölüm");
  };
  const handlePress19 = () => {
    navigation.navigate("19. Bölüm");
  };
  const handlePress20 = () => {
    navigation.navigate("20. Bölüm");
  };
  const handlePress21 = () => {
    navigation.navigate("21. Bölüm");
  };
  const handlePress22 = () => {
    navigation.navigate("22. Bölüm");
  };
  const handlePress23 = () => {
    navigation.navigate("23. Bölüm");
  };
  const handlePress24 = () => {
    navigation.navigate("24. Bölüm");
  };
  const handlePress25 = () => {
    navigation.navigate("25. Bölüm");
  };

  return (
    <ScrollView style={styles.main}>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title}>C++ Nedir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
        <Text style={styles.title}>Algoritma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
        <Text style={styles.title}>Programlama</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
        <Text style={styles.title}>Akış Diyagramları</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
        <Text style={styles.title}>C++ Dili Türkçe Ayarlama</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress6}>
        <Text style={styles.title}>C++ Ekrana Çıktı Verme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress7}>
        <Text style={styles.title}>C++ Kullanıcıdan Veri Alma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress8}>
        <Text style={styles.title}>C++ Yeni Satır</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress9}>
        <Text style={styles.title}>C++ Yorum Satırı</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress10}>
        <Text style={styles.title}>C++ Veri Tipleri ve Değişken Tanımlama</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress11}>
        <Text style={styles.title}>C++ If-Else Koşul Yapısı</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress12}>
        <Text style={styles.title}>C++ Switch-Case Yapısı</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress13}>
        <Text style={styles.title}>C++ Operatörler</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress14}>
        <Text style={styles.title}>C++ Ternary Operatörü</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress15}>
        <Text style={styles.title}>C++ For Föngüsü</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress16}>
        <Text style={styles.title}>C++ While Föngüsü</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress17}>
        <Text style={styles.title}>C++ Fonksiyonlar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress18}>
        <Text style={styles.title}>C++ Rastgele Sayı Üretme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress19}>
        <Text style={styles.title}>C++ Diziler</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress20}>
        <Text style={styles.title}>C++ Stringler</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress21}>
        <Text style={styles.title}>C++ Structer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress22}>
        <Text style={styles.title}>C++ Enum</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress23}>
        <Text style={styles.title}>C++ Union</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress24}>
        <Text style={styles.title}>C++ Class</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress25}>
        <Text style={styles.title}>C++ Dosyalama</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ffe4c4",
  },
});
