import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Card, Input } from "../../components";
import Colors from "../../constants/colors";
const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input />
        {/* <TextInput /> */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapperView}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.buttonWrapperView}>
            <Button
              title="Confirm"
              onPress={() => {}}
              color={Colors.primaryColor}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  buttonWrapperView: {
    width: "35%",
  },
});

export default StartGameScreen;
