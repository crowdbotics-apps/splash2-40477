import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Picker, ScrollView, Pressable } from "react-native";

const PetRegistrationScreen = () => {
  const navigation = useNavigation();
  const [selectedPet, setSelectedPet] = useState(null);
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petSize, setPetSize] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petDOB, setPetDOB] = useState(new Date());
  const petOptions = [{
    id: 1,
    image: "pet1"
  }, {
    id: 2,
    image: "pet2"
  }, {
    id: 3,
    image: "pet3"
  }, {
    id: 4,
    image: "pet4"
  }, {
    id: 5,
    image: "pet5"
  }];

  const handlePetSelection = pet => {
    setSelectedPet(pet);
  };

  const handleBackButton = () => {// handle back button press
  };

  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./pettopia_logo.png")} style={styles.logo} />
      </View>
      <View style={styles.petSelection}>
        {petOptions.map(pet => <TouchableOpacity key={pet.id} onPress={() => handlePetSelection(pet)}>
            <Image source={pet.image} style={[styles.petImage, selectedPet?.id === pet.id && styles.selectedPetImage]} />
          </TouchableOpacity>)}
      </View>
      <View style={styles.basicPetInfo}>
        <Text style={styles.basicPetInfoTitle}>Basic Pet Info</Text>
        <Text style={styles.basicPetInfoSubtitle}>
          Let's start with your first pet!
        </Text>
        <View style={styles.form}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>What is your pet's name? *</Text>
            <TextInput style={styles.formInput} placeholder="Name" value={petName} onChangeText={setPetName} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>What breed is your pet? *</Text>
            <Picker style={styles.formInput} selectedValue={petBreed} onValueChange={setPetBreed}>
              <Picker.Item label="Breed" value="" />
              <Picker.Item label="Bulldog" value="bulldog" />
              <Picker.Item label="Chihuahua" value="chihuahua" />
              <Picker.Item label="Labrador" value="labrador" />
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
            <Text style={styles.formLabel}>What gender is your pet? *</Text>
            <Picker style={styles.formInput} selectedValue={petGender} onValueChange={setPetGender}>
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Male" value="male" />
            </Picker>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>
              What's your pet's date of birth? *
            </Text>
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
  petSelection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  selectedPetImage: {
    borderColor: "#22B9B0"
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
export default PetRegistrationScreen;