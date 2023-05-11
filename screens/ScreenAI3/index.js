import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ScrollView } from "react-native";

const PetProfileScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");

  const handleSelection = option => {
    setSelected(option);
  };

  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./pettopia_logo.png")} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Number of pets</Text>
        <Text style={styles.subtitle}>
          How many pets will you create profiles for? This will be important to
          help you set up the profile properly
        </Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={[styles.option, selected === "one" && styles.selectedOption]} onPress={() => handleSelection("one")}>
            <Image source={require("./pet_qtde_column_1.png")} style={styles.petImage} />
            <Image source={require("./paw_icon_unselected.png")} style={styles.pawImage} />
            <Text style={styles.optionText}>ONE PET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.option, selected === "two" && styles.selectedOption]} onPress={() => handleSelection("two")}>
            <Image source={require("./pet_image_col_2.png")} style={styles.petImage} />
            <Image source={require("./paw_icon_unselected.png")} style={styles.pawImage} />
            <Text style={styles.optionText}>TWO PETS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.option, selected === "three" && styles.selectedOption]} onPress={() => handleSelection("three")}>
            <Image source={require("./pet_image_col_3.png")} style={styles.petImage} />
            <Image source={require("./paw_icon_unselected.png")} style={styles.pawImage} />
            <Text style={styles.optionText}>THREE PETS</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.selectedText}>
          You have only one pet that you want to create a profile for.
        </Text>
        <Text style={styles.funFact}>
          Fun fact: You'll be able to create additional profiles afterwards, as
          desired.
        </Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Image source={require("./left_arrow.png")} style={styles.buttonIconLeft} />
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <Pressable style={styles.button} onPress={() => {
          navigation.navigate("ScreenAI4");
        }}>
            <Text style={styles.buttonText}>Next</Text>
            <Image source={require("./right_arrow.png")} style={styles.buttonIconRight} />
          </Pressable>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  logo: {
    width: 180,
    height: 45
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 80,
    paddingTop: 10
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 250,
    gap: 10
  },
  option: {
    width: 100,
    height: 200,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  pawImage: {
    height: 24,
    width: 28,
    marginBottom: 12,
    marginTop: 12
  },
  selectedOption: {
    backgroundColor: "#f5b56d"
  },
  petImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    marginTop: -72
  },
  optionText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  funFact: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20
  },
  footer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    width: 130,
    textAlign: "center",
    backgroundColor: "#22B9B0",
    padding: 12,
    borderRadius: 12
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  buttonIconLeft: {
    width: 14,
    height: 14,
    position: "absolute",
    left: 12,
    top: 14
  },
  buttonIconRight: {
    width: 14,
    height: 14,
    position: "absolute",
    left: 104
  }
});
export default PetProfileScreen;