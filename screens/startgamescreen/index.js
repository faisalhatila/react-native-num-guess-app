import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Card, Input } from "../../components";
import Colors from "../../constants/colors";
const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), "");
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number  has to be a number between 1 & 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnteredValue("");
  };
  let confirmedOutput;
  if (confirmed)
    confirmedOutput = (
      <Text style={styles.confirmedOutputText}>
        Chosen Number: {selectedNumber}
      </Text>
    );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapperView}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.buttonWrapperView}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primaryColor}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: "center",
  },
  confirmedOutputText: {
    color: "#fff",
    marginVertical: 10,
    backgroundColor: Colors.primaryColor,
    // flex: 1,
    flexDirection: "row",
    width: "80%",
    borderRadius: 5,
    padding: 5,
    textAlign: "center",
  },
});

export default StartGameScreen;
