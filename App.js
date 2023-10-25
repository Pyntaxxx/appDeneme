import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BilgisayarMuh from "./src/screens/BilgisayarMuh";
import EEMuh from "./src/screens/EEMuh";
import MakineMuh from "./src/screens/MakineMuh";
import BiyoMuh from "./src/screens/BiyoMuh";
import İnsMuh from "./src/screens/insMuh";
import MekatronikMuh from "./src/screens/MekatronikMuh";
import CppNedir from "./src/coursesCpp/CppNedir";
import CppAlgoritma from "./src/coursesCpp/CppAlgoritma";
import CppProgramlama from "./src/coursesCpp/CppProgramlama";
import CppAkisDiyagrami from "./src/coursesCpp/CppAkisDiyagram";
import CppDilTurkce from "./src/coursesCpp/CppDilTurkce";
import CppCiktiVerme from "./src/coursesCpp/CppCiktiVerme";
import CppVeriAlma from "./src/coursesCpp/CppVeriAlma";
import CppYeniSatir from "./src/coursesCpp/CppYeniSatir";
import CppYorumSatiri from "./src/coursesCpp/CppYorumSatiri";
import CppVeriTipleri from "./src/coursesCpp/CppVeriTipleri";
import CppIfElse from "./src/coursesCpp/CppIfElse";
import CppSwitchCase from "./src/coursesCpp/CppSwitchCase";
import CppTernary from "./src/coursesCpp/CppTernary";
import CppFor from "./src/coursesCpp/CppFor";
import CppWhile from "./src/coursesCpp/CppWhile";
import CppOperators from "./src/coursesCpp/CppOperators";
import CppArrays from "./src/coursesCpp/CppArrays";
import CppString from "./src/coursesCpp/CppStrings";
import CppFunction from "./src/coursesCpp/CppFunction";
import CppRandom from "./src/coursesCpp/CppRandom";
import CppStruct from "./src/coursesCpp/CppStruct";
import CppEnum from "./src/coursesCpp/CppEnum";
import CppUnion from "./src/coursesCpp/CppUnion";
import CppClass from "./src/coursesCpp/CppClass";
import CppDosyalama from "./src/coursesCpp/CppDosyalama";
import CourseHome from "./src/coursesCpp/CourseHome";
import Bolum1konu1 from "./src/icerikCPP/Bolum1konu1";
import Bolum1konu2 from "./src/icerikCPP/Bolum1konu2";
import Bolum1konu3 from "./src/icerikCPP/Bolum1konu3";
import Bolum1konu4 from "./src/icerikCPP/Bolum1konu4";
import Bolum1konu5 from "./src/icerikCPP/Bolum1konu5";
import Bolum2konu1 from "./src/icerikCPP/Bolum2konu1";
import Bolum2konu2 from "./src/icerikCPP/Bolum2konu2";
import Bolum3konu1 from "./src/icerikCPP/Bolum3konu1";
import Bolum3konu2 from "./src/icerikCPP/Bolum3konu2";
import Bolum3konu3 from "./src/icerikCPP/Bolum3konu3";
import Bolum3konu4 from "./src/icerikCPP/Bolum3konu4";
import Bolum4konu1 from "./src/icerikCPP/Bolum4konu1";
import Bolum4konu2 from "./src/icerikCPP/Bolum4konu2";
import Bolum4konu3 from "./src/icerikCPP/Bolum4konu3";
import Bolum4konu4 from "./src/icerikCPP/Bolum4konu4";
import Bolum10konu1 from "./src/icerikCPP/Bolum10konu1";
import Bolum10konu2 from "./src/icerikCPP/Bolum10konu2";
import Bolum10konu3 from "./src/icerikCPP/Bolum10konu3";
import Bolum10konu4 from "./src/icerikCPP/Bolum10konu4";
import Bolum10konu5 from "./src/icerikCPP/Bolum10konu5";
import Bolum11konu1 from "./src/icerikCPP/Bolum11konu1";
import Bolum11konu2 from "./src/icerikCPP/Bolum11konu2";
import Bolum12konu1 from "./src/icerikCPP/Bolum12konu1";
import Bolum12konu2 from "./src/icerikCPP/Bolum12konu2";
import Bolum13konu1 from "./src/icerikCPP/Bolum13konu1";
import Bolum13konu2 from "./src/icerikCPP/Bolum13konu2";
import Bolum13konu3 from "./src/icerikCPP/Bolum13konu3";
import Bolum13konu4 from "./src/icerikCPP/Bolum13konu4";
import Bolum13konu5 from "./src/icerikCPP/Bolum13konu5";
import Bolum14konu1 from "./src/icerikCPP/Bolum14konu1";
import Bolum14konu2 from "./src/icerikCPP/Bolum14konu2";
import Bolum15konu1 from "./src/icerikCPP/Bolum15konu1";
import Bolum15konu2 from "./src/icerikCPP/Bolum15konu2";
import Bolum15konu3 from "./src/icerikCPP/Bolum15konu3";
import Bolum15konu4 from "./src/icerikCPP/Bolum15konu4";
import Bolum15konu5 from "./src/icerikCPP/Bolum15konu5";
import Bolum16konu1 from "./src/icerikCPP/Bolum16konu1";
import Bolum16konu2 from "./src/icerikCPP/Bolum16konu2";
import Bolum17konu1 from "./src/icerikCPP/Bolum17konu1";
import Bolum17konu2 from "./src/icerikCPP/Bolum17konu2";
import Bolum17konu3 from "./src/icerikCPP/Bolum17konu3";
import Bolum17konu4 from "./src/icerikCPP/Bolum17konu4";
import Bolum17konu5 from "./src/icerikCPP/Bolum17konu5";
import Bolum17konu6 from "./src/icerikCPP/Bolum17konu6";
import Bolum19konu1 from "./src/icerikCPP/Bolum19konu1";
import Bolum19konu2 from "./src/icerikCPP/Bolum19konu2";
import Bolum19konu3 from "./src/icerikCPP/Bolum19konu3";
import Bolum19konu4 from "./src/icerikCPP/Bolum19konu4";
import Bolum19konu5 from "./src/icerikCPP/Bolum19konu5";
import Bolum20konu1 from "./src/icerikCPP/Bolum20konu1";
import Bolum20konu2 from "./src/icerikCPP/Bolum20konu2";
import Bolum20konu3 from "./src/icerikCPP/Bolum20konu3";
import Bolum20konu4 from "./src/icerikCPP/Bolum20konu4";
import Bolum20konu5 from "./src/icerikCPP/Bolum20konu5";
import Bolum20konu6 from "./src/icerikCPP/Bolum20konu6";
import Bolum21konu1 from "./src/icerikCPP/Bolum21konu1";
import Bolum21konu2 from "./src/icerikCPP/Bolum21konu2";
import Bolum21konu3 from "./src/icerikCPP/Bolum21konu3";
import Bolum21konu4 from "./src/icerikCPP/Bolum21konu4";
import Bolum23konu1 from "./src/icerikCPP/Bolum23konu1";
import Bolum23konu2 from "./src/icerikCPP/Bolum23konu2";
import Bolum24konu1 from "./src/icerikCPP/Bolum24konu1";
import Bolum24konu2 from "./src/icerikCPP/Bolum24konu2";
import Bolum24konu3 from "./src/icerikCPP/Bolum24konu3";
import Bolum24konu4 from "./src/icerikCPP/Bolum24konu4";
import Bolum24konu5 from "./src/icerikCPP/Bolum24konu5";
import Bolum24konu6 from "./src/icerikCPP/Bolum24konu6";
import Bolum24konu7 from "./src/icerikCPP/Bolum24konu7";
import Bolum24konu8 from "./src/icerikCPP/Bolum24konu8";
import Bolum24konu9 from "./src/icerikCPP/Bolum24konu9";
import Bolum24konu10 from "./src/icerikCPP/Bolum24konu10";
import Bolum24konu11 from "./src/icerikCPP/Bolum24konu11";
import Bolum25konu1 from "./src/icerikCPP/Bolum25konu1";
import Bolum25konu2 from "./src/icerikCPP/Bolum25konu2";
import Bolum25konu3 from "./src/icerikCPP/Bolum25konu3";
import Bolum25konu4 from "./src/icerikCPP/Bolum25konu4";
import Bolum25konu5 from "./src/icerikCPP/Bolum25konu5";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="ISUBÜ BM" component={BilgisayarMuh} />
        <Stack.Screen name="ISUBÜ EEM" component={EEMuh} />
        <Stack.Screen name="ISUBÜ BİM" component={BiyoMuh} />
        <Stack.Screen name="ISUBÜ İM" component={İnsMuh} />
        <Stack.Screen name="ISUBÜ MM" component={MakineMuh} />
        <Stack.Screen name="ISUBÜ MEM" component={MekatronikMuh} />
        <Stack.Screen name="1. Bölüm" component={CppNedir} />
        <Stack.Screen name="2. Bölüm" component={CppAlgoritma} />
        <Stack.Screen name="3. Bölüm" component={CppProgramlama} />
        <Stack.Screen name="4. Bölüm" component={CppAkisDiyagrami} />
        <Stack.Screen name="5. Bölüm" component={CppDilTurkce} />
        <Stack.Screen name="6. Bölüm" component={CppCiktiVerme} />
        <Stack.Screen name="7. Bölüm" component={CppVeriAlma} />
        <Stack.Screen name="8. Bölüm" component={CppYeniSatir} />
        <Stack.Screen name="9. Bölüm" component={CppYorumSatiri} />
        <Stack.Screen name="10. Bölüm" component={CppVeriTipleri} />
        <Stack.Screen name="11. Bölüm" component={CppIfElse} />
        <Stack.Screen name="12. Bölüm" component={CppSwitchCase} />
        <Stack.Screen name="13. Bölüm" component={CppOperators} />
        <Stack.Screen name="14. Bölüm" component={CppTernary} />
        <Stack.Screen name="15. Bölüm" component={CppFor} />
        <Stack.Screen name="16. Bölüm" component={CppWhile} />
        <Stack.Screen name="17. Bölüm" component={CppFunction} />
        <Stack.Screen name="18. Bölüm" component={CppRandom} />
        <Stack.Screen name="19. Bölüm" component={CppArrays} />
        <Stack.Screen name="20. Bölüm" component={CppString} />
        <Stack.Screen name="21. Bölüm" component={CppStruct} />
        <Stack.Screen name="22. Bölüm" component={CppEnum} />
        <Stack.Screen name="23. Bölüm" component={CppUnion} />
        <Stack.Screen name="24. Bölüm" component={CppClass} />
        <Stack.Screen name="25. Bölüm" component={CppDosyalama} />
        <Stack.Screen name="Courses" component={CourseHome} />
        <Stack.Screen name="C++ Nedir" component={Bolum1konu1} />
        <Stack.Screen name="C++ Özellikleri" component={Bolum1konu2} />
        <Stack.Screen name="Neden C++ Kullanmalıyız?" component={Bolum1konu3} />
        <Stack.Screen
          name="C++ nerelerde kullanılır?"
          component={Bolum1konu4}
        />
        <Stack.Screen
          name="C++ Hangi IDE’ler kullanılabilir"
          component={Bolum1konu5}
        />
        <Stack.Screen name="Algoritma Nedir" component={Bolum2konu1} />
        <Stack.Screen name="Algoritma Örnek" component={Bolum2konu2} />
        <Stack.Screen name="Programlama Nedir" component={Bolum3konu1} />
        <Stack.Screen name="Programlama Aşamaları" component={Bolum3konu2} />
        <Stack.Screen name="Programlama Örneği" component={Bolum3konu3} />
        <Stack.Screen name="Programlama Dilleri" component={Bolum3konu4} />
        <Stack.Screen name="Akış Diyagramı Nedir" component={Bolum4konu1} />
        <Stack.Screen
          name="Kullanılan şekiller ve görevleri"
          component={Bolum4konu2}
        />
        <Stack.Screen name="Operatörler" component={Bolum4konu3} />
        <Stack.Screen name="Akış Şeması Örnek" component={Bolum4konu4} />
        <Stack.Screen name="C++ Veri Tipleri" component={Bolum10konu1} />
        <Stack.Screen
          name="C++ da Değişken Tanımlama"
          component={Bolum10konu2}
        />
        <Stack.Screen name="Değişken İsimlendirme" component={Bolum10konu3} />
        <Stack.Screen name="Değişkene Değer Atama" component={Bolum10konu4} />
        <Stack.Screen name="Sabitler" component={Bolum10konu5} />
        <Stack.Screen name="C++ if-else Koşulu" component={Bolum11konu1} />
        <Stack.Screen
          name="C++ if-else Koşulu Örneği"
          component={Bolum11konu2}
        />
        <Stack.Screen name="C++ Switch-Case Yapısı" component={Bolum12konu1} />
        <Stack.Screen
          name="C++ Switch-Case Yapısı Örneği"
          component={Bolum12konu2}
        />
        <Stack.Screen name="C++ Operatörleri Nedir?" component={Bolum13konu1} />
        <Stack.Screen name="Aritmetik operatörler" component={Bolum13konu2} />
        <Stack.Screen name="Atama Operatörleri" component={Bolum13konu3} />
        <Stack.Screen
          name="Karşılaştırma Operatörleri"
          component={Bolum13konu4}
        />
        <Stack.Screen name="Mantıksal operatörler" component={Bolum13konu5} />

        <Stack.Screen
          name="C++ Ternary Operatörü Nedir?"
          component={Bolum14konu1}
        />
        <Stack.Screen
          name="C++ Ternary Operatörü Örnek"
          component={Bolum14konu2}
        />
        <Stack.Screen
          name="C++ da For Döngüsü Nedir?"
          component={Bolum15konu1}
        />
        <Stack.Screen name="İç İçe Döngüler" component={Bolum15konu2} />
        <Stack.Screen
          name="Break ve Continue Komutları"
          component={Bolum15konu3}
        />
        <Stack.Screen
          name="C++ da For Döngüsü Örnek 1"
          component={Bolum15konu4}
        />
        <Stack.Screen
          name="C++ da For Döngüsü Örnek 2"
          component={Bolum15konu5}
        />
        <Stack.Screen name="C++ While Döngüsü" component={Bolum16konu1} />
        <Stack.Screen name="Do While Döngüsü" component={Bolum16konu2} />

        <Stack.Screen name="C++ Fonksiyonlar" component={Bolum17konu1} />
        <Stack.Screen name="Fonksiyonun Deklarasyonu" component={Bolum17konu2} />
        <Stack.Screen name="1) Geriye Değer Döndürmeyen Fonksiyon" component={Bolum17konu3} />
        <Stack.Screen name="2) Kendisine Parametre Gönderilen Fonksiyon" component={Bolum17konu4} />
        <Stack.Screen name="3) Geriye Değer Döndüren Fonksiyon" component={Bolum17konu5} />
        <Stack.Screen name="4) Referans Olarak Parametre Gönderen Fonksiyon" component={Bolum17konu6} />
        <Stack.Screen name="C++ Diziler (Array)" component={Bolum19konu1} />
        <Stack.Screen name="Bir Dizi İçinde Döngü" component={Bolum19konu2} />
        <Stack.Screen name="foreach Döngüsü" component={Bolum19konu3} />
        <Stack.Screen name="Bir Dizinin Boyutunu Alma" component={Bolum19konu4} />
        <Stack.Screen name="Çok Boyutlu Diziler" component={Bolum19konu5} />
        <Stack.Screen name="C++ Strings" component={Bolum20konu1} />
        <Stack.Screen name="String Birleştirme" component={Bolum20konu2} />
        <Stack.Screen name="String Uzunluğu" component={Bolum20konu3} />
        <Stack.Screen name="Stringlerde Erişim" component={Bolum20konu4} />
        <Stack.Screen name="String Karakterlerini Değiştirmek" component={Bolum20konu5} />
        <Stack.Screen name="Özel Karakterler" component={Bolum20konu6} />
        <Stack.Screen name="C++ Structures (struct)" component={Bolum21konu1} />
        <Stack.Screen name="Struct Üyelerine Erişim" component={Bolum21konu2} />
        <Stack.Screen name="Çoklu Değişkenlerde Tek Struct" component={Bolum21konu3} />
        <Stack.Screen name="Adlandırılmış Struct" component={Bolum21konu4} />
        <Stack.Screen name="C++ Unions" component={Bolum23konu1} />
        <Stack.Screen name="Union ve Struct arasındaki farklar" component={Bolum23konu2} />
        <Stack.Screen name="C++ Classlar" component={Bolum24konu1} />
        <Stack.Screen name="Class ve Object" component={Bolum24konu2} />
        <Stack.Screen name="Class Oluşturmak" component={Bolum24konu3} />
        <Stack.Screen name="Nesne Oluşturmak" component={Bolum24konu4} />
        <Stack.Screen name="Class Methodları" component={Bolum24konu5} />
        <Stack.Screen name="Constructor" component={Bolum24konu6} />
        <Stack.Screen name="Constructor Parametreleri" component={Bolum24konu7} />
        <Stack.Screen name="Erişim Belirleyicileri" component={Bolum24konu8} />
        <Stack.Screen name="Private Üyelere Erişim (Encapsulation / Kapsülleme)" component={Bolum24konu9} />
        <Stack.Screen name="Inheritance (Miras)" component={Bolum24konu10} />
        <Stack.Screen name="Polymorphism (Polimorfizm)" component={Bolum24konu11} />
        <Stack.Screen name="C++ Dosyalama İşlemleri" component={Bolum25konu1} />
        <Stack.Screen name="Dosya oluşturma" component={Bolum25konu2} />
        <Stack.Screen name="Dosyaya yazma" component={Bolum25konu3} />
        <Stack.Screen name="Dosya okuma" component={Bolum25konu4} />
        <Stack.Screen name="Dosyayı kapatma" component={Bolum25konu5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
