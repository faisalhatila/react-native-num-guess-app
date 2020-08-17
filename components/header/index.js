import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";
import { TitleText } from "..";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  headerTitle: {
    color: "#000",
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "#fff",
  },
  title: {
    color: Platform.OS === "ios" ? Colors.primaryColor : "#fff",
  },
});

export default Header;
