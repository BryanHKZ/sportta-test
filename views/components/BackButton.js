import React from "react";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ text }) => {
  const navigation = useNavigation();
  return (
    <Text style={styles.backButton} onPress={() => navigation.goBack()}>
      &lsaquo; {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  backButton: {
    fontSize: 18,
    marginTop: 40,
    marginLeft: 25,
    color: "#707070",
  },
})

export default BackButton;
