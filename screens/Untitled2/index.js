import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.BbpmJrRD}>{"This is my home page"}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  BbpmJrRD: {
    width: 335,
    height: 50,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "center",
    fontWeight: "700",
    color: "#0b8c2f"
  }
});
export default Untitled2;