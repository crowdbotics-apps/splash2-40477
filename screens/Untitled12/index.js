import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Picker, ScrollView, Pressable } from "react-native";

const UserInfo = () => {
  const navigation = useNavigation();
  const [selectedPet, setSelectedPet] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petSize, setPetSize] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petDOB, setPetDOB] = useState(new Date());

  const handleBackButton = () => {// handle back button press
  };

  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./pettopia_logo.png")} style={styles.logo} />
      </View>
      <View style={styles.basicPetInfo}>
        <Text style={styles.basicPetInfoTitle}>Your Basic Info</Text>
        <Text style={styles.basicPetInfoSubtitle}>
          We’ll just need a bit of information about you.
          This won’t be displayed on your profile
        </Text>
        <View style={styles.form}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>What is your first name? *</Text>
            <TextInput style={styles.formInput} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
          </View>
         <View style={styles.formField}>
            <Text style={styles.formLabel}>What is your last name? *</Text>
            <TextInput style={styles.formInput} placeholder="First Name" value={lastName} onChangeText={setLastName} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>
              What's your pet's date of birth? *
            </Text>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>What country do you reside in? *</Text>
            <Picker style={styles.formInput} selectedValue={petBreed} onValueChange={setPetBreed}>
              <Picker.Item label="Country" value="Country" />
            </Picker>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>What size is your pet?</Text>
            <Picker style={styles.formInput} selectedValue={petSize} onValueChange={setPetSize}>
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Small" value="small" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Large" value="large" />
            </Picker>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>What type of content do prefer to see? We’ll ensure we prioritize these suggestions</Text>
            <Picker style={styles.formInput} selectedValue={petGender} onValueChange={setPetGender}>
              <Picker.Item label="german shepard" value="german shepard" />
              <Picker.Item label="siamese" value="siamese" />
            </Picker>
          </View>
        </View>
        <Text style={styles.funFact}>
          Fun fact: You'll be able to create additional profiles afterwards, as
          desired
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <Pressable style={styles.nextButton} onPress={() => {
          navigation.navigate("ScreenAI7");
        }}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.footer} />
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
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain"
  },
  basicPetInfo: {
    flex: 1,
    padding: 20
  },
  basicPetInfoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  basicPetInfoSubtitle: {
    fontSize: 16,
    marginBottom: 20
  },
  form: {
    marginBottom: 20
  },
  formField: {
    marginBottom: 10
  },
  formLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  formInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  funFact: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backButton: {
    backgroundColor: "#22B9B0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  nextButton: {
    backgroundColor: "#22B9B0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10
  },
  footer: {
    height: 20,
    backgroundColor: "#ccc"
  }
});
export default UserInfo;