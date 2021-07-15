import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Inputs from "./components/Inputs";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";

const Datos = ({setDatosJugador, datosJugador}) => {
  const [confirmData, setConfirmData] = useState(false);
  return (
    <View>
      <BackButton text="Volver" to={null} />
      <View style={styles.container}>
        <Logo />
        <View style={styles.containerInfo}>
          <View style={{ marginLeft: 36, marginBottom: 20 }}>
            <Title
              title="Datos Personales"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin."
            />
          </View>
          <Inputs setConfirmData={setConfirmData} setDatosJugador={setDatosJugador} datosJugador={datosJugador}/>
        </View>
        {confirmData ? (
          <NextButton text="Siguiente" to="ProfilePicture" />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInfo: {
    marginTop: 40,
  },
});

export default Datos;
