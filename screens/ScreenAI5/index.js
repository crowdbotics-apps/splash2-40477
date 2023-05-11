import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Picker, DatePickerIOS } from 'react-native';
import pet1 from '../assets/pet1.png';
import pet2 from '../assets/pet2.png';
import pet3 from '../assets/pet3.png';
import pet4 from '../assets/pet4.png';
import pet5 from '../assets/pet5.png';

const PetRegistrationScreen = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petSize, setPetSize] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petDOB, setPetDOB] = useState(new Date());
  const petOptions = [{
    id: 1,
    image: pet1
  }, {
    id: 2,
    image: pet2
  }, {
    id: 3,
    image: pet3
  }, {
    id: 4,
    image: pet4
  }, {
    id: 5,
    image: pet5
  }];

  const handlePetSelection = pet => {
    setSelectedPet(pet);
  };

  const handleBackButton = () => {// handle going back to previous screen
  };

  const handleNextButton = () => {// handle going to next screen
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/pettopia-logo.png')} style={styles.logo} />
      </View>
      <View style={styles.petSelection}>
        {petOptions.map(pet => <TouchableOpacity key={pet.id} onPress={() => handlePetSelection(pet)}>
            <Image source={pet.image} style={[styles.petImage, selectedPet?.id === pet.id && styles.selectedPetImage]} />
          </TouchableOpacity>)}
      </View>
      <View style={styles.basicPetInfo}>
        <Text style={styles.basicPetInfoTitle}>Basic Pet Info</Text>
        <Text style={styles.basicPetInfoSubtitle}>Let's start with your first pet!</Text>
        <View style={styles.form}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>What is your pet's name? *</Text>
            <TextInput style={styles.formInput} placeholder="Name" value={petName} onChangeText={setPetName} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>What breed is your pet? *</Text>
            <TextInput style={styles.formInput} placeholder="Breed" value={petBreed} onChangeText={setPetBreed} />
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
            <Text style={styles.formLabel}>What's your pet's date of birth? *</Text>
            <DatePickerIOS style={styles.formInput} date={petDOB} onDateChange={setPetDOB} />
          </View>
        </View>
        <Text style={styles.funFact}>Fun fact: You'll be able to create additional profiles afterwards, as desired</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
            <Text style={styles.buttonText}>Back</Text>
            <Image source={require('../assets/left-arrow.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextButton}>
            <Text style={styles.buttonText}>Next</Text>
            <Image source={require('../assets/right-arrow.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain'
  },
  petSelection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  selectedPetImage: {
    borderColor: '#22B9B0'
  },
  basicPetInfo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10
  },
  basicPetInfoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    marginBottom: 5
  },
  formInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  funFact: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backButton: {
    backgroundColor: '#22B9B0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  nextButton: {
    backgroundColor: '#22B9B0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5
  },
  buttonIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  footer: {
    height: 20,
    backgroundColor: '#ccc'
  }
});
export default PetRegistrationScreen;