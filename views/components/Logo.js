import React from "react";
import { StyleSheet, Image } from "react-native";
import logo from "../../assets/images/sportta.png";

const Logo = () => {
  return <Image source={logo} style={styles.logo}/>;
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 70
  },
});

export default Logo;
