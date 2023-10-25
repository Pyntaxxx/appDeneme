import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Information from '../../components/Information';

export default function MakineMuh() {
  return (
    <Text style={styles.text1}> ÇOK YAKINDA!</Text>
   );
 }
 
 const styles = StyleSheet.create({
   text1: {
     fontSize: 40,
     fontWeight: 'bold',
     alignSelf: 'center',
     marginVertical: 240,
   }
 });
 