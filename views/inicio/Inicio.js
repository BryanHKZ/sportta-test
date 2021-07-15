import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Logo from "../components/Logo";
import Title from "../components/Title";
import AccessButton from "./components/AccessButton";

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.containerInfo}>
        <View style={{ marginLeft: 20 }}>
          <Title
            title="La mejor opción para reserva de canchas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam
        maximus."
          />
        </View>
        <Image
          source={require("../../assets/images/futbol.png")}
          style={styles.image}
        />
      </View>
      <AccessButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInfo: {
    marginTop: 60,
  },
  image: {
    marginTop: 20,
    marginBottom: 40,
    width: 240,
    height: 240,
  },
});

export default Inicio;
