import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native";
const {
  width,
  height
} = Dimensions.get("window");

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <ScrollView style={styles.NIyTbkFC} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={require("./pettopia_logo.png")} style={styles.logo} />

          <View style={styles.imageContainer}>
            <Image source={require("./pettopia_dog_image.png")} style={styles.image} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to PetTopia</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              A world for Pets, Pet Parents and Pet Admirers alike
            </Text>
          </View>

          <Pressable style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI2");
      }}>
            <Text style={styles.buttonText}>Get started</Text>
          </Pressable>

          <View style={styles.funFactContainer}>
            <Text style={styles.funFact}>
              Fun fact: Creating an account will take roughly five to ten
              minutes
            </Text>
          </View>
        </View>
      </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: height * 0.32,
    height: height * 0.06,
    marginTop: height * 0.048
  },
  imageContainer: {
    marginTop: height * 0.02
  },
  image: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: width * 0.02 * 5
  },
  titleContainer: {
    marginTop: height * 0.02,
    width: "100%",
    alignItems: "center"
  },
  title: {
    fontSize: width * 0.072,
    fontWeight: 'bold',
    color: "#3E3D40"
  },
  textContainer: {
    marginTop: height * 0.008,
    width: "100%",
    paddingHorizontal: width * 0.2
  },
  text: {
    fontSize: height * 0.020,
    color: "#797979",
    fontWeight: 'bold',
    textAlign: "center"
  },
  button: {
    marginTop: height * 0.016,
    backgroundColor: "#22B9B0",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  funFactContainer: {
    marginTop: height * 0.016,
  },
  funFact: {
    fontSize: height * 0.02,
    color: "#797979",
    width: 317,
    height: 55,
    textAlign: "center"
  },
  NIyTbkFC: {
    backgroundColor: "#fff"
  }
});
export default WelcomeScreen;