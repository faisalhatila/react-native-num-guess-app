import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Colors from "../../constants/colors";

const MainButton = (props) => {
  }
  return (
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
