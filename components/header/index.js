import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#000",
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "#fff",
  },
});

export default Header;
