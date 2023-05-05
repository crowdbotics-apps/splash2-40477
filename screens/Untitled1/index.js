import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.wcwRNnss}>{"This is my app home page"}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  wcwRNnss: {
    width: 335,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center"
  }
});
export default Untitled1;