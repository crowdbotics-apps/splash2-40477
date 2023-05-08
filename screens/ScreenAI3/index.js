import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PetProfileScreen = () => {
  const [selected, setSelected] = useState('');

  const handleSelection = option => {
    setSelected(option);
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./pettopia_logo.png")} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Number of pets</Text>
        <Text style={styles.subtitle}>How many pets will you create profiles for? This will be important to help you set up the profile properly</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={[styles.option, selected === 'one' && styles.selectedOption]} onPress={() => handleSelection('one')}>
            <Image source={require("./pet_image_col_1.png")} style={styles.petImage} />
            <Text style={styles.optionText}>One pet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.option, selected === 'two' && styles.selectedOption]} onPress={() => handleSelection('two')}>
            <Image source={require("./pet_image_col_2.png")} style={styles.petImage} />
            <Text style={styles.optionText}>Two pets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.option, selected === 'three' && styles.selectedOption]} onPress={() => handleSelection('three')}>
            <Image source={require("./pet_image_col_3.png")} style={styles.petImage} />
            <Text style={styles.optionText}>Three pets</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.selectedText}>You have only one pet that you want to create a profile for.</Text>
        <Text style={styles.funFact}>Fun fact: You'll be able to create additional profiles afterwards, as desired.</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Image source={require("./left_arrow.png")} style={styles.arrow} />
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
            <Image source={require("./right_arrow.png")} style={styles.arrow} />
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
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain'
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  option: {
    width: 100,
    height: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedOption: {
    backgroundColor: '#f5b56d'
  },
  petImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  selectedText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  funFact: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  backButton: {
    backgroundColor: '#22b9b0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginRight: 10
  },
  nextButton: {
    backgroundColor: '#22b9b0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5
  },
  arrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  footer: {
    height: 20,
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  }
});
export default PetProfileScreen;