import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const PetSelectionScreen = ({
  navigation
}) => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  useEffect(() => {
    axios.get("https://api.example.com/pets").then(response => setPets(response.data)).catch(error => console.log(error));
  }, []);

  const handlePetSelection = pet => {
    setSelectedPet(pet);
  };

  const renderItem = ({
    item
  }) => <TouchableOpacity style={{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: selectedPet === item ? "#F5B56D" : "#F2F2F2",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5
  }} onPress={() => handlePetSelection(item)}>
      <Ionicons name="paw-outline" size={24} color="black" style={_styles.eODCQCzz} />
      <Image source={{
      uri: item.image
    }} style={_styles.ZyFzdOvx} />
      <Text style={_styles.gicwGhmK}>{item.name}</Text>
    </TouchableOpacity>;

  return <View style={_styles.myNzMFVz}>
      <View style={_styles.NVslVSfO}>
        <Image source={require("./pettopia_logo.png")} style={_styles.cfazrJtM} />
      </View>
      <View style={_styles.OadbPAoG} />
      <View style={_styles.aSXqtQcC}>
        <Text style={_styles.CEnpePJQ}>Type of pet</Text>
        <Text style={_styles.bDkXbCdu}>
          Now it’s time to choose what type of pet the profile will be for
        </Text>
        <FlatList data={pets} renderItem={renderItem} keyExtractor={item => item.id.toString()} style={_styles.BEmHibWx} />
        <Text style={_styles.UsbfGyIr}>
          Fun fact: You'll be able to create additional profiles afterwards, as
          desired
        </Text>
        <View style={_styles.lhlhLGKf}>
          <TouchableOpacity style={_styles.yDmVblik} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#fff" style={_styles.CXEKmRjP} />
            <Text style={_styles.kXBxkThh}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.pfoxdPqW} onPress={() => navigation.navigate("PetDetails", {
          pet: selectedPet
        })} disabled={!selectedPet}>
            <Text style={_styles.ToRosxGm}>Next</Text>
            <Ionicons name="arrow-forward-outline" size={24} color="#fff" style={_styles.fFEbYtSd} />
          </TouchableOpacity>
        </View>
      </View>
    </View>;
};

export default PetSelectionScreen;

const _styles = StyleSheet.create({
  eODCQCzz: {
    marginRight: 10
  },
  ZyFzdOvx: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  gicwGhmK: {
    marginLeft: 10
  },
  myNzMFVz: {
    flex: 1,
    backgroundColor: "#fff"
  },
  NVslVSfO: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 20
  },
  cfazrJtM: {
    width: 180,
    height: 40
  },
  OadbPAoG: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  aSXqtQcC: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  CEnpePJQ: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  bDkXbCdu: {
    fontSize: 16,
    marginBottom: 20
  },
  BEmHibWx: {
    marginBottom: 20
  },
  UsbfGyIr: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 20
  },
  lhlhLGKf: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  yDmVblik: {
    backgroundColor: "#22B9B0",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginRight: 10
  },
  CXEKmRjP: {
    marginRight: 10
  },
  kXBxkThh: {
    color: "#fff",
    fontWeight: "bold"
  },
  pfoxdPqW: {
    backgroundColor: "#22B9B0",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 10
  },
  ToRosxGm: {
    color: "#fff",
    fontWeight: "bold"
  },
  fFEbYtSd: {
    marginLeft: 10
  }
});