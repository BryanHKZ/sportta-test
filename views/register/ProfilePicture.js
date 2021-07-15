import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Logo from "../components/Logo";
import Title from "../components/Title";
import NextButton from "../components/NextButton";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";

const ProfilePicture = ({ datosJugador }) => {
  const navigation = useNavigation();
  const [profilePicture, setProfilePicture] = useState("");
  const [hasPermissions, setHasPermissions] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermissions(status === "granted");
    })();
  }, []);

  if (hasPermissions == null) {
    return <View />;
  }

  const foto =
    profilePicture.length == 0
      ? require("../../assets/images/defaultpp.png")
      : { uri: profilePicture };

  const handleOnPress = () => {
    if (hasPermissions === false) {
      Alert.alert(
        "Permisos no Concedidos",
        "No se han otorgado permisos a la cámara.",
        [{ text: "OK" }]
      );
    } else {
      navigation.navigate("Camera", { setPp: setProfilePicture });
    }
  };

  return (
    <View>
      <BackButton text="Volver" to={null} />
      <View style={styles.container}>
        <Logo />

        <Title
          title="Foto de perfil"
          description="Usaremos la cámara de su celular para tomar foto de perfil"
        />

        <Image style={styles.requestPp} source={foto} />
        <TouchableOpacity style={styles.cameraButton} onPress={handleOnPress}>
          <Image
            style={styles.camera}
            source={require("../../assets/images/photo-camera.png")}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 18 }}>Elige un Usuario</Text>
        <Text style={{ fontSize: 20, color: "#00CE34", fontWeight: "bold" }}>
          {datosJugador.username}
        </Text>
        <NextButton text="Siguiente" to="Confirm" />
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
  requestPp: {
    margin: 30,
    borderRadius: 200,
    width: 250,
    height: 250,
  },
  cameraButton: {
    position: "absolute",
    backgroundColor: "#00CE34",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    top: 240,
  },
  camera: {
    width: 60,
    height: 60,
  },
});

export default ProfilePicture;
