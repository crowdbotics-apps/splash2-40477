import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from "react-native";

const PetProfileScreen = () => {
  const navigation = useNavigation();
  const [petParentSelected, setPetParentSelected] = useState(false);
  const [petGuardianSelected, setPetGuardianSelected] = useState(false);

  const handlePetParentPress = () => {
    setPetParentSelected(true);
    setPetGuardianSelected(false);
  };

  const handlePetGuardianPress = () => {
    setPetGuardianSelected(true);
    setPetParentSelected(false);
  };

  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./pettopia_logo.png")} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Hi there</Text>
        <Text style={styles.subtitle}>
          Let’s start off by choosing what type of profile you want to create
        </Text>
        <View style={styles.profileTypeContainer}>
          <TouchableOpacity style={[styles.profileTypeBox, petParentSelected && styles.selectedProfileTypeBox]} onPress={handlePetParentPress}>
            <Image source={require("./pettopia_profile_left.png")} style={styles.profileTypeImage} />
            <Text style={styles.profileTypeText}>Pet parent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.profileTypeBox, petGuardianSelected && styles.selectedProfileTypeBox]} onPress={handlePetGuardianPress}>
            <Image source={require("./pettopia_profile_right.png")} style={styles.profileTypeImage} />
            <Text style={styles.profileTypeText}>Pet Guardian</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          Your furry (or furless) child(ren) has your heart and you’re creating
          this profile on their behalf
        </Text>
        <Text style={styles.funFact}>
          Fun fact: You’ll be able to create a profile for most types of pets
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("./left_arrow.png")} style={styles.buttonIconLeft} />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <Pressable style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI3");
      }}>
          <Text style={styles.buttonText}>Next</Text>
          <Image source={require("./right_arrow.png")} style={styles.buttonIconRight} />
        </Pressable>
      </View>
      <View style={styles.bottomLine} />
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  header: {
    height: 80,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  logo: {
    width: 180,
    height: 45
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 38,
    textAlign: "center",
    marginTop: 14
  },
  profileTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 316,
    height: 270
  },
  profileTypeBox: {
    width: "48%",
    height: 320,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  selectedProfileTypeBox: {
    backgroundColor: "#F5B56D"
  },
  profileTypeImage: {
    width: 110,
    height: 254,
    marginBottom: 10,
    left: 3
  },
  profileTypeText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 60,
    textAlign: "center"
  },
  funFact: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 20,
    marginTop: 24,
    textAlign: "center"
  },
  footer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
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
    left: 98
  },
  bottomLine: {
    height: 1,
    backgroundColor: "#E5E5E5"
  }
});
export default PetProfileScreen;