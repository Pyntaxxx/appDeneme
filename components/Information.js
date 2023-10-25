import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Information({ title, imageSource, desc }) {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.img} source={imageSource} />
      <View style={styles.descTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textDesc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 100,
    borderRadius: 10
  },
  descTitle: {
    alignItems: 'flex-start',
    paddingVertical: 10,
    marginLeft: 20,
  },
  title: {
    fontSize: 30,
  },
  textDesc: {
    fontSize: 20,
    marginBottom: 10,
  },
  wrapper: {
    flexDirection: "row",
    marginVertical: 20,
    marginLeft: 20,
  },
});
