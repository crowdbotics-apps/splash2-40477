import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native";
const {
  width,
  height
} = Dimensions.get("window");

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <Pressable>
      <ScrollView style={styles.NIyTbkFC}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require("./pettopia_logo.png")} style={styles.logo} />
          </View>
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
      </ScrollView>
    </Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    marginTop: height * 0.024,
    width: "100%",
    height: height * 0.024,
    alignItems: "center"
  },
  logo: {
    width: height * 0.12,
    height: height * 0.024
  },
  imageContainer: {
    marginTop: height * 0.024
  },
  image: {
    width: width * 0.12,
    height: width * 0.16,
    borderRadius: width * 0.02
  },
  titleContainer: {
    marginTop: height * 0.02,
    width: "100%",
    alignItems: "center"
  },
  title: {
    fontSize: width * 0.011,
    color: "#333"
  },
  textContainer: {
    marginTop: height * 0.012,
    width: "100%",
    paddingHorizontal: width * 0.02
  },
  text: {
    fontSize: height * 0.01,
    color: "#797979",
    textAlign: "center"
  },
  button: {
    marginTop: 50,
    backgroundColor: "#22B9B0",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  funFactContainer: {
    marginTop: 20
  },
  funFact: {
    fontSize: 16,
    color: "#999",
    width: 317,
    height: 55,
    textAlign: "center"
  },
  NIyTbkFC: {
    backgroundColor: "#fff"
  }
});
export default WelcomeScreen;