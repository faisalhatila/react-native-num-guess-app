import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { BodyText, TitleText } from "../../components";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over</TitleText>
      <Image source={require("../../assets/success.png")} />
      <BodyText>No of rounds {props.roundsNumber}</BodyText>
      <BodyText>Number was {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
