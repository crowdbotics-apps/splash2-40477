import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Pressable, Dimensions } from "react-native";
const {
  width,
  height
} = Dimensions.get("window");

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

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./pettopia_logo.png")} style={styles.logo} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Hi there!</Text>
          <Text style={styles.subtitle}>
            Let’s start off by choosing what type of profile you want to create
          </Text>
        </View>

        <View style={styles.petInfoContainer}>
          <View style={styles.profileTypeContainer}>
            <TouchableWithoutFeedback onPress={handlePetParentPress}>
              <View style={styles.profileTypeBox}>
                <Image source={require("./pettopia_profile_left.png")} style={styles.profileTypeImage} />
                <View style={[styles.profileTypeBoxLabel, petParentSelected && styles.selectedProfileTypeBox]}>
                  <Text style={styles.profileTypeText}>PET PARENT</Text>
                  <Image source={require("./paw_icon_unselected.png")} style={styles.pawImage} />
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={handlePetGuardianPress}>
              <View style={styles.profileTypeBox}>
                <Image source={require("./pettopia_profile_right.png")} style={styles.profileTypeImage} />
                <View style={[styles.profileTypeBoxLabel, petGuardianSelected && styles.selectedProfileTypeBox]}>
                  <Text style={styles.profileTypeText}>PET ADMIRER</Text>
                  <Image source={require("./paw_icon_unselected.png")} style={styles.pawImage} />
                </View>
              </View>
            </TouchableWithoutFeedback>
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
          <TouchableOpacity style={[styles.button, styles.marginLeft]}>
            <Image source={require("./left_arrow.png")} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonRight, styles.marginRight]}>
            <Text style={styles.buttonTextRight}>Next</Text>
            <Image source={require("./right_arrow.png")} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  header: {
    height: height * 0.1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#F3F3F3"
  },
  logo: {
    width: height * 0.32,
    height: height * 0.06,
  },
  content: {
    flex: 1,
    paddingHorizontal: width * 0.18,
    paddingTop: height * 0.01,
  },
  title: {
    fontSize: width * 0.072,
    fontWeight: "bold",
    color: "#3E3D40",
    textAlign: "center"
  },
  subtitle: {
    fontSize: width * 0.032,
    textAlign: "center",
    fontWeight: "bold",
    color: "#3E3D40",
    paddingTop: height * 0.016,
  },
  petInfoContainer: {
    width: "100%",
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.024,
  },
  profileTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileTypeBox: {
    backgroundColor: "cyan",
    borderRadius: width * 0.04,
    justifyContent: "flex-end",
  },
  selectedProfileTypeBox: {
    backgroundColor: "#F5B56D",
    color: "#fff"
  },
  profileTypeImage: {
    width: width * 0.44,
    height: height * 0.5,
    borderRadius: width * 0.04,
  },
  profileTypeBoxLabel: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderRadius: width * 0.04,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    paddingVertical: height * 0.028,
  },
  profileTypeText: {
    fontSize: width * 0.032,
    color: "#3E3D40",
    fontWeight: "bold",
  },
  pawImage: {
    marginTop: height * 0.016,
    height: 24,
    width: 28,
  },
  description: {
    fontSize: width * 0.032,
    fontWeight: "bold",
    color: "#3E3D40",
    marginTop: height * 0.032,
    textAlign: "center"
  },
  funFact: {
    fontSize: width * 0.032,
    color: "#797979",
    fontStyle: "italic",
    marginTop: height * 0.024,
    textAlign: "center"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: height * 0.048,
    marginTop: height * 0.024,
    // paddingHorizontal: width * 0.04
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#22B9B0",
    borderRadius: width * 0.02,
    height: height * 0.048,
    width: width * 0.44,
    paddingHorizontal: width * 0.04
  },
  buttonRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#22B9B0",
    borderRadius: width * 0.02,
    height: height * 0.048,
    width: width * 0.44,
    paddingHorizontal: width * 0.04
  },
  marginLeft: {
    marginLeft: width * 0.04,
  },
  marginRight: {
    marginRight: width * 0.04,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: width * 0.032,
    fontWeight: "bold",
    marginLeft: width * 0.1
  },
  buttonTextRight: {
    color: "#FFFFFF",
    fontSize: width * 0.032,
    fontWeight: "bold",
    marginRight: width * 0.1
  },
  buttonIcon: {
    width: height * 0.024,
    height: height * 0.024,
  },
});
export default PetProfileScreen;