import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// Không cần import Ionicons nữa

export default function Screen2() {
  const router = useRouter();
  const { username, mssv } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Nút quay lại dạng chữ thay cho icon */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>{"< Quay lại"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Screen2</Text>
        <Text style={styles.title}>Thông tin sinh viên</Text>
        <Text style={styles.value}>UserName: {username}</Text>
        <Text style={styles.value}>MSSV: {mssv}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    marginTop: 40,
    alignItems: "flex-start",
  },
  backButton: {
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  value: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
});
