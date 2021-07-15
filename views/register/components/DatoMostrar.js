import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DatoMostrar = ({ label, info }) => {
  return (
    <View style={styles.containerDato}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDato: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  label: {
    fontSize: 20,
    color: "#000"
  },
  info: {
    fontSize: 20,
    color: "#00CE34",
  },
});

export default DatoMostrar;
