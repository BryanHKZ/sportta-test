import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Inputs = ({ setConfirmData, setDatosJugador, datosJugador }) => {
  const [selectedCity, setSelectedCity] = useState("Medellin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [barrio, setBarrio] = useState("");

  useEffect(() => {
    if (name.length != 0 && email.length != 0 && barrio.length != 0) {
      setDatosJugador({
        nombre: name,
        email: email,
        ciudad: selectedCity,
        barrio: barrio,
        username: name.split(" ")[0].concat(Math.round(Math.random()*100))
      });
      setConfirmData(true);
    }
  }, [name, email, barrio, selectedCity]);
  return (
    <View>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Pedro Ramirez"
        placeholderTextColor="#ccc"
        keyboardType="default"
        autoCapitalize="words"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="pedro@mail.com"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Ciudad</Text>
      <Picker
        style={styles.input}
        selectedValue={selectedCity}
        onValueChange={(itemValue) => setSelectedCity(itemValue)}
      >
        <Picker.Item label="Medellin" value="Medellin" />
        <Picker.Item label="Bogotá" value="Bogota" />
        <Picker.Item label="Barranquilla" value="Barranquilla" />
        <Picker.Item label="Cali" value="Cali" />
        <Picker.Item label="Santa Marta" value="Santa Marta" />
      </Picker>

      <Text style={styles.label}>Sector o Barrio</Text>
      <TextInput
        style={styles.input}
        placeholder="Poblado"
        placeholderTextColor="#ccc"
        keyboardType="default"
        value={barrio}
        onChangeText={(text) => setBarrio(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 270,
    fontSize: 16,
    marginBottom: 20,
    borderBottomColor: "#939393",
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 16,
  },
});

export default Inputs;
