import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccessButton = ({ text, to }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity
        onPress={() => navigation.navigate(to)}
        style={styles.button}
      >
        <Text style={{ fontSize: 15, color: "#fff" }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  button: {
    height: 50,
    width: 300,
    alignItems: "center",
    backgroundColor: "#00CE34",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
  },
  registered: {
    color: "#000531",
    margin: 10,
  },
});

export default AccessButton;
