import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

const PettopiaScreen = () => {
  return <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./pettopia_logo.png")} style={styles.logo} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You're all done</Text>
        <Text style={styles.subtitle}>
          You can now review your account and pet information
        </Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Combined account name</Text>
        <TextInput style={styles.input} placeholder="First name" editable={false} />
      </View>
      <View style={styles.petsContainer}>
        <View style={styles.petColumn}>
          <TouchableOpacity style={styles.pet}>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.petImage} />
            <View style={styles.editButton}>
              <Text style={styles.editText}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pet}>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.petImage} />
            <View style={styles.editButton}>
              <Text style={styles.editText}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pet}>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.petImage} />
            <View style={styles.editButton}>
              <Text style={styles.editText}>Edit</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.petColumn}>
          <TouchableOpacity style={styles.pet}>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.petImage} />
            <View style={styles.editButton}>
              <Text style={styles.editText}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pet}>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.petImage} />
            <View style={styles.editButton}>
              <Text style={styles.editText}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pet}>
            <Image source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} style={styles.petImage} />
            <View style={styles.editButton}>
              <Text style={styles.editText}>Edit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={{
          uri: "https://tinyurl.com/4j5j8z6r"
        }} style={styles.arrow} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
          <Image source={{
          uri: "https://tinyurl.com/4j5j8z6r"
        }} style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  logo: {
    width: 150,
    height: 50
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center"
  },
  fieldContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10
  },
  petsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  petColumn: {
    flex: 1,
    marginLeft: 10
  },
  pet: {
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    position: "relative"
  },
  petImage: {
    flex: 1,
    resizeMode: "cover"
  },
  editButton: {
    backgroundColor: "#22B9B0",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    alignItems: "center"
  },
  editText: {
    color: "#fff",
    fontWeight: "bold"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  backText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10
  },
  nextButton: {
    backgroundColor: "#22B9B0",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 10
  },
  arrow: {
    width: 20,
    height: 20,
    tintColor: "#fff"
  },
  line: {
    height: 1,
    backgroundColor: "#ccc"
  }
});
export default PettopiaScreen;