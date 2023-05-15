import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Picker, ScrollView } from "react-native";

const PetProfileScreen = () => {
  const [about, setAbout] = useState("");
  const [activity, setActivity] = useState("");
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.item}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.itemImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.itemImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.itemImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.itemImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.itemImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Pet Profile</Text>
      <Text style={styles.subtitle}>a</Text>
      <TouchableOpacity style={styles.camera}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.cameraImage} />
      </TouchableOpacity>
      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>About #name*</Text>
          <TextInput style={styles.input} placeholder="Tell us something about your pet" value={about} onChangeText={setAbout} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>1</Text>
          <Picker style={styles.picker} placeholder="Activity" selectedValue={activity} onValueChange={setActivity} mode="dropdown" multiple={true}>
            <Picker.Item label="Running" value="running" />
            <Picker.Item label="Swimming" value="swimming" />
            <Picker.Item label="Playing" value="playing" />
            <Picker.Item label="Sleeping" value="sleeping" />
          </Picker>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>2</Text>
          <Picker style={styles.picker} placeholder="Activity" selectedValue={activity} onValueChange={setActivity} mode="dropdown" multiple={true}>
            <Picker.Item label="Running" value="running" />
            <Picker.Item label="Swimming" value="swimming" />
            <Picker.Item label="Playing" value="playing" />
            <Picker.Item label="Sleeping" value="sleeping" />
          </Picker>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>3</Text>
          <Picker style={styles.picker} placeholder="Activity" selectedValue={activity} onValueChange={setActivity} mode="dropdown" multiple={true}>
            <Picker.Item label="Running" value="running" />
            <Picker.Item label="Swimming" value="swimming" />
            <Picker.Item label="Playing" value="playing" />
            <Picker.Item label="Sleeping" value="sleeping" />
          </Picker>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>4</Text>
          <Picker style={styles.picker} placeholder="Activity" selectedValue={activity} onValueChange={setActivity} mode="dropdown" multiple={true}>
            <Picker.Item label="Running" value="running" />
            <Picker.Item label="Swimming" value="swimming" />
            <Picker.Item label="Playing" value="playing" />
            <Picker.Item label="Sleeping" value="sleeping" />
          </Picker>
        </View>
      </View>
      <Text style={styles.funFact}>b</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.arrow} />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>Next</Text>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  item: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center"
  },
  itemImage: {
    width: 30,
    height: 30
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10
  },
  camera: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20
  },
  cameraImage: {
    width: 50,
    height: 50
  },
  form: {
    marginBottom: 20
  },
  field: {
    alignItems: "center",
    marginBottom: 10
  },
  label: {
    width: '100%',
    marginRight: 10,
    paddingLeft: '10px'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10
  },
  picker: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10
  },
  funFact: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  backButton: {
    backgroundColor: "#22B9B0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  nextButton: {
    backgroundColor: "#22B9B0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 10
  },
  arrow: {
    width: 20,
    height: 20
  }
});
export default PetProfileScreen;