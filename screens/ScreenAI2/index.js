import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const PetProfileScreen = () => {
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
          <Image source={require("../assets/left-arrow.png")} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
          <Image source={require("../assets/right-arrow.png")} style={styles.buttonIcon} />
        </TouchableOpacity>
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
    justifyContent: "center"
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
    marginBottom: 20,
    textAlign: "center"
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
    width: 120,
    height: 250,
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
    marginTop: 60
  },
  funFact: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 20
  },
  footer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#22B9B0"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  buttonIcon: {
    width: 20,
    height: 20
  },
  bottomLine: {
    height: 1,
    backgroundColor: "#E5E5E5"
  }
});
export default PetProfileScreen;