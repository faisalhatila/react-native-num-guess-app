import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { BodyText, TitleText } from "../../components";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          // source={require("../../assets/success.png")}
          source={{
            uri:
              "https://www.geeky-gadgets.com/wp-content/uploads/2010/10/Everest-Summit.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
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
  imageContainer: {
    borderWidth: 3,
    borderColor: "#000",
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    // borderRadius: 200,
  },
});

export default GameOverScreen;
