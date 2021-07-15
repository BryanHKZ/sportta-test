import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = ({ title, description }) => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerText: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: 20,
    // marginBottom: 20,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "#000531",
  },
  description: {
    marginTop: 10,
    fontSize: 13,
    textAlign: "center",
    color: "#a9a9a9",
  },
});

export default Title;
