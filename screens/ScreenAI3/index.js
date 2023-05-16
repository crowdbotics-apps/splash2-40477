import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native"
const { width, height } = Dimensions.get("window")

const PetProfileScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");

  const handleSelection = option => {
    setSelected(option);
  };

  const disableNextButton = selected === "";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./pettopia_logo.png")} style={styles.logo} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Number of pets</Text>
          <Text style={styles.subtitle}>
            How many pets will you create profiles for? This will be important
            to help you set up the profile properly
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableWithoutFeedback onPress={() => handleSelection("one")}>
            <View style={styles.option}>
              <Image
                source={require("./pet_qtde_column_1.png")}
                style={styles.petImage}
              />
              <View
                style={[
                  styles.profileTypeBoxLabel,
                  selected === "one" && styles.selectedOption
                ]}
              >
                <Text style={styles.optionText}>ONE PET</Text>
                <Image
                  source={require("./paw_icon_unselected.png")}
                  style={styles.pawImage}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleSelection("two")}>
            <View style={styles.option}>
              <Image
                source={require("./pet_image_col_2.png")}
                style={styles.petImage}
              />
              <View
                style={[
                  styles.profileTypeBoxLabel,
                  selected === "two" && styles.selectedOption
                ]}
              >
                <Text style={styles.optionText}>TWO PETS</Text>
                <Image
                  source={require("./paw_icon_unselected.png")}
                  style={styles.pawImage}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleSelection("three")}>
            <View style={styles.option}>
              <Image
                source={require("./pet_image_col_3.png")}
                style={styles.petImage}
              />
              <View
                style={[
                  styles.profileTypeBoxLabel,
                  selected === "three" && styles.selectedOption
                ]}
              >
                <Text style={styles.optionText}>THREE PETS</Text>
                <Image
                  source={require("./paw_icon_unselected.png")}
                  style={styles.pawImage}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Text style={styles.selectedText}>
          You have only one pet that you want to create a profile for.
        </Text>
        <Text style={styles.funFact}>
          Fun fact: You'll be able to create additional profiles afterwards, as
          desired.
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.marginLeft]}
          onPress={() => {
            navigation.pop()
          }}
        >
          <Image
            source={require("./left_arrow.png")}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonRight,
            styles.marginRight,
            disableNextButton && styles.disabledButton
          ]}
          disabled={disableNextButton}
          onPress={() => {
            navigation.navigate("Untitled14");
          }}
        >
          <Text style={styles.buttonTextRight}>Next</Text>
          <Image
            source={require("./right_arrow.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.04
  },
  option: {
    backgroundColor: "cyan",
    borderRadius: width * 0.04,
    justifyContent: "flex-end",
  },
  profileTypeBoxLabel: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderRadius: width * 0.04,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    paddingVertical: height * 0.024,
  },
  pawImage: {
    height: width * 0.07,
    width: width * 0.08,
    marginTop: height * 0.016
  },
  selectedOption: {
    backgroundColor: "#f5b56d"
  },
  petImage: {
    width: width * 0.29,
    height: height * 0.32,
    borderRadius: width * 0.04,
  },
  optionText: {
    fontSize: width * 0.032,
    color: "#3E3D40",
    fontWeight: "bold",
  },
  selectedText: {
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
    alignSelf: "stretch",
    marginTop: height * 0.024,
    marginBottom: height * 0.024,
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
  disabledButton: {
    opacity: 0.5
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