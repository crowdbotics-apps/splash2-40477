import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Picker, ScrollView, Pressable } from "react-native";

const SnackTimeScreen = ({
  navigation
}) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [treats, setTreats] = useState([]);
  const [brands, setBrands] = useState("");
  const [food, setFood] = useState([]);
  const [foodBrands, setFoodBrands] = useState("");
  const pets = [{
    id: 1,
    name: "Buddy",
    image: "none"
  }, {
    id: 2,
    name: "Luna",
    image: "none"
  }, {
    id: 3,
    name: "Max",
    image: "none"
  }, {
    id: 4,
    name: "Charlie",
    image: "none"
  }];

  const handlePetSelection = pet => {
    setSelectedPet(pet);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./pettopia_logo.png")} style={styles.logo} />
      </View>
      <View style={styles.petSelection}>
        {pets.map(pet => <TouchableOpacity key={pet.id} style={[styles.petItem, selectedPet?.id === pet.id && styles.selectedPetItem]} onPress={() => handlePetSelection(pet)}>
            <Image source={pet.image} style={styles.petImage} />
          </TouchableOpacity>)}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Snack Time</Text>
        <Text style={styles.subtitle}>What does your pet like to eat?</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.formField}>
          <Text style={styles.label}>
            What type of treats does {selectedPet?.name} like?*
          </Text>
          <Picker selectedValue={treats} onValueChange={value => setTreats(value)} mode="dropdown" prompt="Select" style={styles.picker} itemStyle={styles.pickerItem} multiple>
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
          </Picker>
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Any preference of brands of treats *</Text>
          <TextInput style={styles.input} placeholder="Brand name" value={brands} onChangeText={text => setBrands(text)} />
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>
            What type of food does {selectedPet?.name} like? *
          </Text>
          <Picker selectedValue={food} onValueChange={value => setFood(value)} mode="dropdown" prompt="Select" style={styles.picker} itemStyle={styles.pickerItem} multiple>
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
          </Picker>
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Any preference of brands for food?</Text>
          <TextInput style={styles.input} placeholder="Brand name" value={foodBrands} onChangeText={text => setFoodBrands(text)} />
        </View>
      </View>
      <View style={styles.funFactContainer}>
        <Text style={styles.funFact}>
          Fun fact: Don’t worry, you’ll be able to change these details at a
          later date
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
          <Image source={require("./left_arrow.png")} style={styles.buttonIcon} />
        </TouchableOpacity>
        <Pressable style={styles.nextButton} onPress={() => {
        navigation.navigate("Untitled9");
      }}>
          <Text style={styles.buttonText}>Next</Text>
          <Image source={require("./right_arrow.png")} style={styles.buttonIcon} />
        </Pressable>
      </View>
      <View style={styles.footer}>
        <View style={styles.line} />
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#fff",
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 180,
    height: 40
  },
  petSelection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20
  },
  petItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center"
  },
  selectedPetItem: {
    borderColor: "#22B9B0"
  },
  petImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  titleContainer: {
    alignItems: "center",
    marginVertical: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },
  subtitle: {
    fontSize: 16,
    color: "#666"
  },
  form: {
    paddingHorizontal: 20
  },
  formField: {
    marginVertical: 10
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  picker: {
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  pickerItem: {
    fontSize: 16
  },
  input: {
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  funFactContainer: {
    alignItems: "center",
    marginVertical: 20
  },
  funFact: {
    fontSize: 14,
    color: "#666"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20
  },
  backButton: {
    backgroundColor: "#22B9B0",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  nextButton: {
    backgroundColor: "#22B9B0",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10
  },
  buttonIcon: {
    width: 20,
    height: 20
  },
  footer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc"
  }
});
export default SnackTimeScreen;