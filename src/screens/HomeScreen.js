import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("ISUBÜ BM");
  };
  const handlePress2 = () => {
    navigation.navigate("ISUBÜ EEM");
  };
  const handlePress3 = () => {
    navigation.navigate("ISUBÜ BİM");
  };
  const handlePress4 = () => {
    navigation.navigate("ISUBÜ İM");
  };
  const handlePress5 = () => {
    navigation.navigate("ISUBÜ MM");
  };
  const handlePress6 = () => {
    navigation.navigate("ISUBÜ MEM");
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.isubu}>
        <Image
          style={styles.imgIsubu}
          source={require("../../assets/istekLogosu.png")}
        />
        <Text style={styles.content}>ISTEK</Text>
      </View>
      <View style={styles.viewWrapper}>
        <View style={styles.left1}>
          <TouchableOpacity onPress={handlePress1}>
            <Image
              style={styles.img1}
              source={require("../../assets/bilgisayarMuhendislik.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress1}>
            <Text
              style={{
                backgroundColor: "#ffa500",
                borderRadius: 8,
                marginTop: -22,
                paddingVertical: 1,
                paddingHorizontal: 20,
                width: 160,
              }}
            >
              {" "}
              Bilgisayar Müh{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.right1}>
          <TouchableOpacity onPress={handlePress2}>
            <Image
              style={styles.img2}
              source={require("../../assets/elektrikMuhendislik.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress2}>
            <Text
              style={{
                position: "absolute",
                top: 125,
                right: 16,
                backgroundColor: "#ff4500",
                borderRadius: 8,
                marginTop: 22,
                paddingVertical: 1,
                paddingHorizontal: 14,
                width: 160,
              }}
            >
              E. Elektronik Müh
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewWrapper}>
        <View style={styles.left2}>
          <TouchableOpacity onPress={handlePress3}>
            <Image
              style={styles.img3}
              source={require("../../assets/biyomedikalMuhendislik.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress3}>
            <Text
              style={{
                backgroundColor: "#6a5acd",
                borderRadius: 8,
                marginTop: -23,
                paddingVertical: 1,
                paddingHorizontal: 20,
                width: 160,
              }}
            >
              
              Biyomedikal Müh
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.right2}>
          <TouchableOpacity onPress={handlePress4}>
            <Image
              style={styles.img4}
              source={require("../../assets/insaatMühendislik.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress4}>
            <Text
              style={{
                position: "absolute",
                top: 125,
                right: 16,
                backgroundColor: "#00ff00",
                borderRadius: 8,
                marginTop: 22,
                paddingVertical: 1,
                paddingHorizontal: 36,
                width: 160,
              }}
            >
              {" "}
              İnşaat Müh{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewWrapper}>
        <View style={styles.left3}>
          <TouchableOpacity onPress={handlePress5}>
            <Image
              style={styles.img5}
              source={require("../../assets/makineMuhendislik.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress5}>
            <Text
              style={{
                backgroundColor: "#00bfff",
                borderRadius: 8,
                marginTop: -23,
                paddingVertical: 1,
                paddingHorizontal: 20,
                width: 160,
              }}
            >
              {" "}
              Makine Müh{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.right3}>
          <TouchableOpacity onPress={handlePress6}>
            <Image
              style={styles.img6}
              source={require("../../assets/mekatronikMuhendis.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress6}>
            <Text
              style={{
                position: "absolute",
                right: 16,
                backgroundColor: "#ffff00",
                borderRadius: 8,
                marginTop: 147,
                paddingVertical: 1,
                paddingHorizontal: 14,
                width: 160,
              }}
            >
              {" "}
              Mekatronik Müh{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgIsubu: {
    width: 50,
    height: 40,
    alignSelf: "center",
    borderRadius: 30,
    marginRight: 5,
  },
  content: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30,
  },
  img1: {
    width: 170,
    height: 170,
    borderRadius: 40,
  },
  img2: {
    width: 170,
    height: 170,
    position: "absolute",
    right: 10,
    borderRadius: 40,
  },
  img3: {
    width: 170,
    height: 170,
    borderRadius: 40,
  },
  img4: {
    width: 170,
    height: 170,
    position: "absolute",
    right: 10,
    borderRadius: 40,
  },
  img5: {
    width: 170,
    height: 170,
    borderRadius: 40,
  },
  img6: {
    width: 170,
    height: 170,
    position: "absolute",
    right: 10,
    borderRadius: 40,
  },
  wrapper: {
    width: "100%",
    height: "100%",
  },
  bolumler: {},
  viewWrapper: {
    flexDirection: "row",
  },
  left1: {
    position: "absolute",
    left: 20,
    top: 0,

  },
  left2: {
    position: "absolute",
    left: 20,
    top: 230,
  },
  left3: {
    position: "absolute",
    left: 20,
    top: 460,
  },
  right1: {
    position: "absolute",
    right: 5,
    top: 0,
  },
  right2: {
    position: "absolute",
    right: 5,
    top: 230,
  },
  right3: {
    position: "absolute",
    right: 5,
    top: 460,
  },
  isubu: {
    marginBottom: 10,
    marginTop: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderLeftColor: "white",
    borderTopColor: "white",
    borderColor: "#b0c4de",
    padding: 1,
  },
});
