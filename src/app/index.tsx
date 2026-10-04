import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [mssv, setMssv] = useState("");
  const handlePress = () => {
    // Validate: Không được để trống
    if (!username.trim() || !mssv.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ UserName và MSSV!");
      return;
    }

    console.log("Đang thực hiện chuyển trang...");
    // Chuyển sang Screen 2 và truyền dữ liệu qua query params
    router.push({
      pathname: "/screen2",
      params: { username, mssv },
    });
  };
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
      <View style={styles.extraSection}>
        <Text style={styles.title}>Đăng nhập thông tin</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập UserName"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập MSSV"
          placeholderTextColor="#888"
          value={mssv}
          onChangeText={setMssv}
        />

        {/* Nút Click me ở bottom-center */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Click me</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.footerText}>Nguyễn Xuân Cường - BIT240047</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    top: 60,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
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
  extraSection: {
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerContainer: {
    alignItems: "center",
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
  },
});
