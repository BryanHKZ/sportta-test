import React, { useState, useEffect } from "react";
import Inicio from "./views/inicio/Inicio";
import Datos from "./views/register/Datos";
import ProfilePicture from "./views/register/ProfilePicture";
import Confirm from "./views/register/Confirm";
import Camera from "./views/register/components/Camera";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [datosJugador, setDatosJugador] = useState({
    nombre: "",
    email: "",
    ciudad: "",
    barrio: "",
    username: "",
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Datos">
          {() => <Datos setDatosJugador={setDatosJugador} />}
        </Stack.Screen>
        <Stack.Screen name="ProfilePicture">
          {() => (
            <ProfilePicture
              datosJugador={datosJugador}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Confirm">
          {() => <Confirm datosJugador={datosJugador} />}
        </Stack.Screen>
        <Stack.Screen
          options={{ cardStyle: { backgroundColor: "#000" } }}
          name="Camera"
          component={Camera}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
