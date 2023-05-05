import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const WelcomeScreen = () => {
  return <ScrollView style={styles.NIyTbkFC}>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./image 2.png")} style={styles.logo} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("./image 4 (1).png")} style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to Pettopia</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          A world for Pets, Pet Parents and Pet Admirers alike
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
      <View style={styles.funFactContainer}>
        <Text style={styles.funFact}>
          Fun fact: Creating an account will take roughly five to ten minutes
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
  logoContainer: {
    marginTop: 50
  },
  logo: {
    width: 200,
    height: 50
  },
  imageContainer: {
    marginTop: 50
  },
  image: {
    width: 300,
    height: 300
  },
  titleContainer: {
    marginTop: 50
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    width: 291,
    height: 50
  },
  textContainer: {
    marginTop: 20
  },
  text: {
    fontSize: 20,
    color: "#666",
    position: "absolute",
    left: -142,
    top: -18,
    textAlign: "center",
    width: 280,
    height: 60
  },
  button: {
    marginTop: 50,
    backgroundColor: "#f4511e",
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
    backgroundColor: "#FFFFFF"
  }
});
export default WelcomeScreen;