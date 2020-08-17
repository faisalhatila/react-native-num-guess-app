import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";
import { TitleText } from "..";
const Header = (props) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primaryColor,
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
