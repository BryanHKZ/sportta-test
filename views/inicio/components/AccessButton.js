import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccessButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Datos")}
        style={styles.button}
      >
        <Text style={{ fontSize: 15, color: "#fff" }}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={styles.registered} onPress={() => alert("Ya tengo cuenta")}>
        Ya tengo una cuenta
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000531",
    paddingLeft: 115,
    paddingRight: 115,
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
