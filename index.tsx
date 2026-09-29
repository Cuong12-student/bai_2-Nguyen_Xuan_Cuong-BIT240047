import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>1</Text>
      </View>

      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>2</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.textDark}>3</Text>
        </View>
        <View style={[styles.box, styles.box4]}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={[styles.box, styles.box5]}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={[styles.box, styles.boxno]}></View>
      </View>

      <View style={[styles.box, styles.box6]}>
        <Text style={styles.text}>6</Text>
      </View>

      <Text style={styles.footerText}>Nguyễn Xuân Cường - BIT240047</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  box: {
    justifyContent: "center",
    marginLeft: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f9f6f6",
    justifyContent: "center",
  },
  textDark: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  box1: {
    backgroundColor: "#007AFF",
    height: 70,
  },
  box2: {
    backgroundColor: "#FF3B30",
    height: 70,
  },
  row: {
    flexDirection: "row",
    height: 150,
    marginBottom: 8,
  },
  box3: {
    backgroundColor: "#FFCC00",
    flex: 1,
    height: "100%",
    marginRight: 4,
  },
  box4: {
    backgroundColor: "#34C759",
    flex: 1,
    height: "100%",
    marginRight: 4,
  },
  box5: {
    backgroundColor: "#AF52DE",
    flex: 1,
    height: "100%",
    marginRight: 4,
  },
  boxno: {
    flex: 1,
    height: "100%",
  },
  box6: {
    backgroundColor: "#FF9500",
    height: 120,
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
