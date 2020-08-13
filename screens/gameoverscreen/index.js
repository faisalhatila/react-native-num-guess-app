import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { BodyText, TitleText } from "../../components";
import Colors from "../../constants/colors";

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
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
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
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    // width: "80%",
    marginHorizontal: 50,
    marginVertical: 15,
  },
  highlight: {
    color: Colors.primaryColor,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
