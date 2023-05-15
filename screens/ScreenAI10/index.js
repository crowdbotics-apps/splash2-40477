import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const TermsAndConditionsScreen = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque, nunc vel bibendum bibendum, elit sapien bibendum sapien,
          vel bibendum sapien sapien vel sapien. Sed scelerisque, nunc vel
          bibendum bibendum, elit sapien bibendum sapien, vel bibendum sapien
          sapien vel sapien.
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque, nunc vel bibendum bibendum, elit sapien bibendum sapien,
          vel bibendum sapien sapien vel sapien. Sed scelerisque, nunc vel
          bibendum bibendum, elit sapien bibendum sapien, vel bibendum sapien
          sapien vel sapien.
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque, nunc vel bibendum bibendum, elit sapien bibendum sapien,
          vel bibendum sapien sapien vel sapien. Sed scelerisque, nunc vel
          bibendum bibendum, elit sapien bibendum sapien, vel bibendum sapien
          sapien vel sapien.
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque, nunc vel bibendum bibendum, elit sapien bibendum sapien,
          vel bibendum sapien sapien vel sapien. Sed scelerisque, nunc vel
          bibendum bibendum, elit sapien bibendum sapien, vel bibendum sapien
          sapien vel sapien.
        </Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            <View style={styles.checkboxInner} />
            <Text style={styles.checkboxLabel}>
              I agree to the terms and conditions
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.arrowIcon} />
          </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain"
  },
  content: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkboxInner: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#22B9B0",
    marginRight: 10
  },
  checkboxLabel: {
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backButton: {
    backgroundColor: "#22B9B0",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10
  },
  nextButton: {
    backgroundColor: "#22B9B0",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  footer: {
    height: 20,
    backgroundColor: "#ccc"
  }
});
export default TermsAndConditionsScreen;