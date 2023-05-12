import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Picker, Pressable } from "react-native";

const PetRegistrationScreen = () => {
  const navigation = useNavigation();
  const [selectedPet, setSelectedPet] = useState(null);
  const [toyType, setToyType] = useState([]);
  const [brandPreference, setBrandPreference] = useState("");
  const [dressUpPreference, setDressUpPreference] = useState(null);
  const [costumeType, setCostumeType] = useState("");
  const petList = [{
    id: 1,
    name: "Dog",
    image: require("../assets/dog.png")
  }, {
    id: 2,
    name: "Cat",
    image: require("../assets/cat.png")
  }, {
    id: 3,
    name: "Bird",
    image: require("../assets/bird.png")
  }, {
    id: 4,
    name: "Fish",
    image: require("../assets/fish.png")
  }, {
    id: 5,
    name: "Hamster",
    image: require("../assets/hamster.png")
  }];

  const handlePetSelection = pet => {
    setSelectedPet(pet);
  };

  const handleToyTypeSelection = value => {
    setToyType(value);
  };

  const handleBrandPreference = value => {
    setBrandPreference(value);
  };

  const handleDressUpPreference = value => {
    setDressUpPreference(value);
  };

  const handleCostumeType = value => {
    setCostumeType(value);
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/pettopia-logo.png")} style={styles.logo} />
      </View>
      <View style={styles.petListContainer}>
        {petList.map(pet => <TouchableOpacity key={pet.id} style={[styles.petItem, selectedPet && selectedPet.id === pet.id && styles.selectedPetItem]} onPress={() => handlePetSelection(pet)}>
            <Image source={pet.image} style={styles.petImage} />
          </TouchableOpacity>)}
      </View>
      <View style={styles.playTimeContainer}>
        <Text style={styles.playTimeTitle}>Play Time</Text>
        <Text style={styles.playTimeSubtitle}>
          What does {selectedPet ? `#${selectedPet.name}` : "your pet"} like to
          do for fun?
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>
            What type of toys does{" "}
            {selectedPet ? `#${selectedPet.name}` : "your pet"} like?*
          </Text>
          <Picker selectedValue={toyType} onValueChange={value => handleToyTypeSelection(value)} mode="multiple" style={styles.picker}>
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Chew toys" value="chew-toys" />
            <Picker.Item label="Interactive toys" value="interactive-toys" />
            <Picker.Item label="Squeaky toys" value="squeaky-toys" />
            <Picker.Item label="Plush toys" value="plush-toys" />
          </Picker>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>
            Any preference of brands of toys?*
          </Text>
          <TextInput style={styles.textInput} placeholder="Brand name" value={brandPreference} onChangeText={value => handleBrandPreference(value)} />
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>
            Do you like to dress up{" "}
            {selectedPet ? `#${selectedPet.name}` : "your pet"} in costumes?*
          </Text>
          <Picker selectedValue={dressUpPreference} onValueChange={value => handleDressUpPreference(value)} style={styles.picker}>
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Any specific types of costumes?</Text>
          <TextInput style={styles.textInput} placeholder="Name" value={costumeType} onChangeText={value => handleCostumeType(value)} />
        </View>
      </View>
      <View style={styles.funFactContainer}>
        <Text style={styles.funFactText}>
          Fun fact: Don’t worry, you’ll be able to change these details at a
          later date
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require("../assets/left-arrow.png")} style={styles.arrowIcon} />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <Pressable style={styles.nextButton} onPress={() => {
        navigation.navigate("ScreenAI8");
      }}>
          <Text style={styles.buttonText}>Next</Text>
          <Image source={require("../assets/right-arrow.png")} style={styles.arrowIcon} />
        </Pressable>
      </View>
      <View style={styles.bottomLine} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 80,
    backgroundColor: "#22B9B0",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 150,
    height: 50
  },
  petListContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20
  },
  petItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center"
  },
  selectedPetItem: {
    backgroundColor: "#22B9B0"
  },
  petImage: {
    width: 30,
    height: 30
  },
  playTimeContainer: {
    alignItems: "center",
    marginVertical: 20
  },
  playTimeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#22B9B0"
  },
  playTimeSubtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
    textAlign: "center"
  },
  formContainer: {
    marginHorizontal: 20
  },
  formField: {
    marginVertical: 10
  },
  formLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  picker: {
    backgroundColor: "#F2F2F2",
    borderRadius: 5
  },
  textInput: {
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
    padding: 10
  },
  funFactContainer: {
    alignItems: "center",
    marginVertical: 20
  },
  funFactText: {
    fontSize: 14,
    color: "#666"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20
  },
  backButton: {
    backgroundColor: "#22B9B0",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5
  },
  nextButton: {
    backgroundColor: "#22B9B0",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5
  },
  arrowIcon: {
    width: 20,
    height: 20
  },
  bottomLine: {
    height: 1,
    backgroundColor: "#F2F2F2"
  }
});
export default PetRegistrationScreen;