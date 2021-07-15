import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";

const Camara = ({ route, navigation }) => {
  const { setPp } = route.params;
  const [type, setType] = useState(Camera.Constants.Type.back);

  const _handleTakePicture = async () => {
    if (!camera) return;
    let photo = await camera.takePictureAsync({ quality: 0.4, base64: true });
    setPp(photo.uri);
    navigation.navigate("ProfilePicture");
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(r) => {
          camera = r;
        }}
      ></Camera>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Image
            style={styles.flipCamera}
            source={require("../../../assets/images/flip.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.takePicture}
          onPress={_handleTakePicture}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "stretch",
    backgroundColor: "#000",
    marginTop: 60,
  },
  camera: {
    height: "80%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap-reverse",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 20
  },
  takePicture: {
    width: 80,
    height: 80,
    backgroundColor: "#2d88ff",
    borderRadius: 50,
    borderWidth: 6,
    borderColor: "#1b549e",
  },
  flipCamera: {
    width: 40,
    height: 40,
  },
});

export default Camara;
