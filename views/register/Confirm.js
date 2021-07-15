import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import DatoMostrar from "./components/DatoMostrar";

const Confirm = ({ datosJugador }) => {
  return (
    <View>
      <BackButton text="Volver" to={null} />
      <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>
          Hola{" "}
          <Text style={{ color: "#00CE34", fontWeight: "bold" }}>
            {datosJugador.username}
          </Text>
        </Text>
        <Image
          style={styles.image}
          source={require("../../assets/images/futbol2.png")}
        />
        <Text style={{...styles.title, margin: 20}}>
          Conoce los datos de tu{" "}
          <Text style={{ color: "#00CE34" }}>
            jugador
          </Text>
        </Text>
        <View style={styles.datosContainer}>
          <DatoMostrar label="Nombre" info={datosJugador.nombre} />
          <DatoMostrar label="Correo" info={datosJugador.email} />
          <DatoMostrar label="Ciudad" info={datosJugador.ciudad} />
          <DatoMostrar label="Barrio" info={datosJugador.barrio} />
        </View>
        <NextButton text="OK" to="Inicio" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "black",
  },
  image: {
    margin: 20,
    width: 250,
    height: 250,
  },
  datosContainer: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  }
});

export default Confirm;
